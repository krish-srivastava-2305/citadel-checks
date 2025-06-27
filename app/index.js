import dotenv from 'dotenv';
import { Pinecone } from '@pinecone-database/pinecone';
import recommender from './functions/search.js';
import stimulateLikeDislike from './functions/stimulateLikeDislike.js';
import updateEmbeddings from './functions/updateOne.js';

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

// Uncomment the following line to populate the vectorDB with initial user base
// upsertAll(pc, indexName, indexHost, namespace);

/*
  Simulate a like or dislike action by a user
  Args:
  1. userId: ID of the user performing the action
  2. accountId: ID of the account associated with the action
  3. action: an object containing the type of action (like or dislike) and any additional data needed
*/
const updatedUserData = await stimulateLikeDislike("5", "4", { type: 'like', data: { tags: ["hiking", "mountain-person"] } })
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
await updateEmbeddings(pc, indexName, indexHost, namespace, updatedUserData);
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
const users = await recommender(pc, indexName, indexHost, namespace, '5');
console.log("Recommended users: ", users);
