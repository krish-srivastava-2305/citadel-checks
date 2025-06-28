/*
  Purpose:
    Generate a generic semantic representation of user data.

  Uses a solid boilerplate added with user insights to create a semantic representation of the user.
*/

import getEmbeddings from "../functions/getEmbeddings.js";


async function generateSemanticRepresentation(userData, pc) {
  return Promise.all(userData.map(async user => {
    const name = user.name;
    const age = user.personal?.age ?? "unknown";
    const gender = user.personal?.gender ?? "unspecified";
    const degree = user.academic?.degreeProgram ?? "a program";
    const university = user.academic?.university ?? "unknown university";
    const gradYear = user.academic?.graduationYear ?? "unknown year";
    const city = user.geographic?.city ?? "an unknown city";
    const areas = user.geographic?.preferredAreas?.join(", ") ?? "various areas";
    const interests = user.personal?.interests?.join(", ") ?? "no specific interests";
    const bio = user.profileContent?.bio ?? "no bio provided";
    const likes = user.behavioural?.previousLikes?.join(", ") ?? "no data";
    const dislikes = user.behavioural?.previousDislikes?.join(", ") ?? "no data";

    const chunk_text = `I am ${name}, a ${age}-year-old ${gender} studying ${degree} at ${university}, graduating in ${gradYear}. I live in ${city}, and I prefer areas like ${areas}. My interests include ${interests}. Here's a bit about me: "${bio}". Based on my past interactions, I tend to like ${likes}, and I typically dislike ${dislikes}.`;

    const embeddings = await getEmbeddings(chunk_text, pc);

    await Promise.resolve(setTimeout(() => {
      console.log(`Generated semantic representation for ${name}`);
    }, 1000));

    return JSON.stringify({
      ...user,
      chunkText: chunk_text,
      embeddings: embeddings.data[0].values,
    });
  }));
}


export default generateSemanticRepresentation;