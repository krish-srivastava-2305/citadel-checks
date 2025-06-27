import userData from "../sample/user.data.js";
import generateSemanticRepresentation from "../util/semanticGenerator.js";


/*
    Purpose:
        Populate the Pinecone index with user data.
*/

async function upsertAll(pc, indexName, indexHost, namespace) {
    try {
        const index = pc.index(indexName, indexHost);
        const ns = index.namespace(namespace);

        const records = userData.map(user => {
            const chunkText = generateSemanticRepresentation([user]).join("");

            return {
                _id: String(user.id), // Ensure ID is a string
                chunk_text: chunkText,
                category: user.category || "general",     // Optional metadata
                quarter: user.quarter || "Q1"             // Optional metadata
            };
        });

        await ns.upsertRecords(records);
        console.log(`Successfully upserted ${records.length} records to index '${indexName}' in namespace '${namespace}'.`);
    } catch (error) {
        console.error("Error upserting user info:", error);
    }
}

export default upsertAll;
