const sdk = require("node-appwrite");
const client = new sdk.Client();
const databases = new sdk.Databases(client);

import { databases} from 'appwrite';


client
   .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your endpoint
        .setProject('codaxwebsite');                // Replace with your project ID
const blogsCollectionId = 'blogs';
const challengesCollectionId = 'challenges';

async function fetchBlogs(req, res) {
    try {
        const blogs = await databases.listDocuments(blogsCollectionId, [], 3);
      res.json(blogs.documents);
    } catch (error){
      res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

async function fetchChallenges(req, res) {
    try {
        const challenges = await databases.listDocuments(challengesCollectionId, [], 5); // Limit to 5 challenges
        res.json(challenges.documents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch challenges' });
    }
}

module.exports = { fetchBlogs, fetchChallenges };
      
