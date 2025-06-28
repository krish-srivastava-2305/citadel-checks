import dotenv from 'dotenv';
import { Pinecone } from '@pinecone-database/pinecone';
import recommender from './functions/search.js';
import stimulateLikeDislike from './functions/stimulateLikeDislike.js';
import updateEmbeddings from './functions/updateOne.js';
import generateSemanticRepresentation from './util/semanticGenerator.js';
import userData from './sample/user.data.js';
import fs from 'fs';
import path from 'path';

dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

// Ensure the environment variables are set
const indexName = process.env.PINECONE_INDEX_NAME || 'all-users-index';
const indexHost = process.env.PINECONE_INDEX_HOST;
const namespace = 'user-info-citadel';

// Check if the index exists, and create it if it doesn't
const { indexes } = await pc.listIndexes();
const indexExists = indexes.filter((index) => index.name === indexName).length > 0;
 
if(!indexExists) {
  await pc.createIndexForModel({
  name: indexName,
  cloud: 'aws',
  region: 'us-east-1',
  embed: {
    model: 'llama-text-embed-v2',
    fieldMap: { text: 'chunk_text' },
  },
  waitUntilReady: true,
});
}
console.log(`Index ${indexName} created successfully.`);

const ns = pc.index(indexName, indexHost).namespace(namespace);


// (async (userData, pc) => {
//   try {
//     const semantics = await generateSemanticRepresentation(userData, pc);
//     const parsedData = semantics.map(obj => JSON.parse(obj));

//     const output = `const enrichedUserData = ${JSON.stringify(parsedData, null, 2)};\n\nexport default enrichedUserData;\n`;

//     const filePath = path.resolve('./app/sample/sampleData2.js');
//     fs.writeFileSync(filePath, output, 'utf-8');

//     console.log(`Semantic user data written to ${filePath}`);
//   } catch (error) {
//     console.error("Error generating and writing semantic user data:", error);
//   }
// })(userData, pc);

// Uncomment the following line to populate the vectorDB with initial user base
// upsertAll(pc, indexName, indexHost, namespace);

/*
  Simulate a like or dislike action by a user
  Args:
  1. userId: ID of the user performing the action
  2. accountId: ID of the account associated with the action
  3. action: an object containing the type of action (like or dislike) and any additional data needed
*/
const updatedUserData = await stimulateLikeDislike("5", "4", { type: 'like', data: { tags: ["hiking", "mountain-person"] } }, pc)
console.log("Updated user data: ", updatedUserData)

/*
  Update embeddings for the user after liking/disliking content
  Args:
  1. pc: Pinecone client instance
  2. indexName: Name of the index to update
  3. indexHost: Host URL of the index
  4. namespace: Namespace in which the user data is stored
  5. updatedUserData: The user data object containing the updated chunk_text and other metadata
*/
await updateEmbeddings(ns, updatedUserData);
console.log("Updated embeddings for user ID: ", updatedUserData.id);

/*
  Get recommendations for a user based on their interactions and preferences
  Args:
  1. pc: Pinecone client instance
  2. indexName: Name of the index to search
  3. indexHost: Host URL of the index
  4. namespace: Namespace in which the user data is stored
  5. userId: ID of the user for whom recommendations are being sought
*/
const users = await recommender(ns, '5', 5);
console.log("Recommended users: ", users);
