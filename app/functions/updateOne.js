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

const updateEmbeddings = async (ns, userData) => {
    try {
        await ns.update({
            id: String(userData.id), 
            values: userData.embeddings,
            metadata: {
                chunk_text: userData.chunkText,
                category: userData.category || "general", 
                quarter: userData.quarter || "Q1"          
            }
        });
    } catch (error) {
        console.error("Error generating embeddings:", error);
        throw error;
    }
}

export default updateEmbeddings;
