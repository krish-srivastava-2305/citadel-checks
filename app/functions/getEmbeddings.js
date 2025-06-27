
/* Generate embeddings for the given text chunk using Pinecone */

const getEmbeddings = async (chunkText, pc) => {
    try {
        const model = 'llama-text-embed-v2';

        const embeddings = await pc.inference.embed(
            model,
            [chunkText],
            { inputType: 'passage', truncate: 'END' }
        );

    
        return embeddings;
    } catch (error) {
        console.error("Error generating embeddings:", error);
        throw error;
    }
}

export default getEmbeddings;