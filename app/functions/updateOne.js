import getEmbeddings from "./getEmbeddings.js";

/*
    Purpose:
      Update the embeddings for a user in the Pinecone index.

    The userData object should contain the following properties:
    - id: The unique identifier for the user
    - chunk_text: The text chunk for which embeddings are to be generated

    Args:
    1. pc: Pinecone client instance
    2. indexName: Name of the index to update
    3. indexHost: Host URL of the index
    4. namespace: Namespace in which the user data is stored
    5. userData: The user data object containing the updated chunk_text and other metadata

    This function generates embeddings for the user's chunk_text and updates the Pinecone index with the new embeddings.
    It also updates the metadata associated with the user in the index.
*/

const updateEmbeddings = async (pc, indexName, indexHost, namespace, userData) => {
    try {
        const embeddings = await getEmbeddings(userData.chunk_text, pc);
        userData.embeddings = embeddings.data[0].values;

        const index = pc.index(indexName, indexHost);
        const ns = index.namespace(namespace);
        await ns.update({
            id: String(userData.id), 
            values: userData.embeddings,
            metadata: {
                chunk_text: userData.chunk_text,
                category: userData.category || "general", 
                quarter: userData.quarter || "Q1"          
            }
        });

        console.log(`Successfully updated embeddings for user ID: ${userData.id} in index '${indexName}' in namespace '${namespace}'.`);
    } catch (error) {
        console.error("Error generating embeddings:", error);
        throw error;
    }
}

export default updateEmbeddings;
