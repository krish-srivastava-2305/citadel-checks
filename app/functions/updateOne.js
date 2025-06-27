import getEmbeddings from "./getEmbeddings.js";

const updateEmbeddings = async (pc, indexName, indexHost, namespace, userData) => {
    try {
        const embeddings = await getEmbeddings(userData.chunk_text, pc);
        userData.embeddings = embeddings.data[0].values;

        const index = pc.index(indexName, indexHost);
        const ns = index.namespace(namespace);
        const u = await ns.update({
            id: String(userData.id), 
            values: userData.embeddings,
            metadata: {
                chunk_text: userData.chunk_text,
                category: userData.category || "general", 
                quarter: userData.quarter || "Q1"          
            }
        });

        console.log(u);
        console.log(`Successfully updated embeddings for user ID: ${userData.id} in index '${indexName}' in namespace '${namespace}'.`);
        return u;
    } catch (error) {
        console.error("Error generating embeddings:", error);
        throw error;
    }
}

export default updateEmbeddings;
