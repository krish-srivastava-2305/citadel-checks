import userData from "../sample/user.data.js"
import generateSemanticRepresentation from "../util/semanticGenerator.js";

/* 
    Purpose:
      Generate recommendations for users based on their semantic representation and interactions.
    
    Algorithm behind the recommender:
    1. Find the user by their ID.
    2. Generate a semantic representation of the user using their data.
    3. Use the Pinecone client to search for similar users in the specified index and namespace.
        - Pinecone searches for records that match the semantic representation of the user.
        - This done by calculating the cosine similarity between the user's semantic representation and other users' representations stored in the index.
    4. Return the IDs of the recommended users based on the search results.
    
    Args:
    1. pc: Pinecone client instance
    2. indexName: Name of the index to search
    3. indexHost: Host URL of the index
    4. namespace: Namespace in which the user data is stored
    5. userId: ID of the user for whom recommendations are being sought


    For high-volume of users, the recommender can be optimized by:
    1. Indexing based on region-code.
        - This can be done by creating separate namespaces for different regions or countries.
*/

const recommender = async (pc, indexName, indexHost, namespace, userId) => {
    try {
        const user = findUserById(userId);
        if (!user) throw new Error("User not found");

        const generatedText = generateSemanticRepresentation([user]).join("");

        const ns = pc.index(indexName, indexHost).namespace(namespace);

        const query = {
            inputs: { text: generatedText },
            topK: 5,
        };

        const results = await ns.searchRecords({ query });

        const chunks = results.result.hits
        const users = chunks.map(hit => hit._id)

        if (users.length === 0) {
            console.log("No recommendations found.");
        } 
        return users.map(userId => findUserById(userId));

    } catch (error) {
        console.error("Error in recommender:", error);
    }
}


const findUserById = (userId) => {
    return userData.find(user => user.id === Number(userId));
}

export default recommender;