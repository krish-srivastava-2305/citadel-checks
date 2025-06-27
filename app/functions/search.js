import userData from "../sample/user.data.js"
import generateSemanticRepresentation from "../util/semanticGenerator.js";

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

        console.log(`Top recommendations for user ID ${userId}:`);
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