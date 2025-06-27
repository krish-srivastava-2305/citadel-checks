import userData from "../sample/user.data.js";
import generateSemanticRepresentation from "../util/semanticGenerator.js";

const stimulateLikeDislike = async (userId, accountId, action) => {
    /* 
        Action is an object that contains the action type (like or dislike) and any additional data needed.

        Stimulate liking of media
        Example: { 
            type: 'like', 
            data: { tags: ["hiking", "mountain-person"] }  
        }
        
        Stimulates liking of prompt
        Another Example: {
            type: "like",
            data: { tags: ["witty", "cute"] } 
        }

        These tags can be found on media/prompt liked by the user.
    */
    try {
        const user = findUserById(userId);
        const account = findUserById(accountId); 
        if (!user) throw new Error("User not found");
        if (!account) throw new Error("Account not found");
        
        /*
            In case of likes, we can update,
            1. previousLikes using tags provided in action.data
            2. update userInterests with weights and use top 5 tags to update our vector database.
            3. If the action is a dislike, we can remove the tags from previousLikes and userInterests.

            Note: "Weighted approach is not implemented yet, but can be added later."
        */


        if (action.type === 'like') {
            user.behavioural.previousLikes = [...(user.behavioural.previousLikes || []), ...action.data.tags];
            user.personal.interests = [...(user.personal.interests || []), ...action.data.tags];
            console.log(`User ${userId} liked content with tags: ${action.data.tags}`);
        } else if (action.type === 'dislike') {
            user.behavioural.previousLikes = (user.behavioural.previousLikes || []).filter(tag => !action.data.tags.includes(tag));
            user.behavioural.previousDislikes = [...(user.behavioural.previousDislikes || []), ...action.data.tags];
            user.personal.interests = (user.personal.interests || []).filter(tag => !action.data.tags.includes(tag));
            console.log(`User ${userId} disliked content with tags: ${action.data.tags}`);
        } else {
            throw new Error("Invalid action type");
        }

        const generateSemantics = generateSemanticRepresentation([user]);

        return {
            id: user.id,
            chunk_text: generateSemantics[0],
        }

    } catch (error) {
        console.error("Error in stimulateLikeDislike:", error);
    }
}

const findUserById = (userId) => {
    return userData.find(user => user.id === Number(userId));
};


export default stimulateLikeDislike;