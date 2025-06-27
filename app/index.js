import dotenv from 'dotenv';
import { Pinecone } from '@pinecone-database/pinecone';
import upsertAll from './functions/upsertAll.js';
import getEmbeddings from './functions/getEmbeddings.js';
import updateEmbeddings from './functions/updateOne.js';
import recommender from './functions/search.js';

dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const indexName = process.env.PINECONE_INDEX_NAME || 'all-users-index';
const indexHost = process.env.PINECONE_INDEX_HOST;
const namespace = 'user-info-citadel';

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

// upsertAll(pc, indexName, indexHost, namespace); // Only to be run once to populate the index

const exampleUserData = {
  id: '1',
  chunk_text: 'This is a sample text to generate embeddings.'
};

// await updateEmbeddings(pc, indexName, indexHost, namespace, exampleUserData);

recommender(pc, indexName, indexHost, namespace, '1'); // Example user ID to test the recommender function

