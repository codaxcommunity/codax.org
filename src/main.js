const sdk = require("node-appwrite");
const client = new sdk.Client();
const databases = new sdk.Databases(client);
const account = new sdk.Account(client); // Fixed Account initialization

// Removed duplicate imports for posts, blogs, challenges, and databases
// const { ID } = require('appwrite'); // You probably don't need this

client
   .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your endpoint
   .setProject('codaxwebsite');                // Replace with your project ID

const blogsCollectionId = 'blogs';
const challengesCollectionId = 'challenges';

// Fixed fetchBlogs function with correct response handling
async function fetchBlogs(req, res) {
    try {
        const response = await databases.listDocuments(blogsCollectionId, [], 3); // Limit to 3 blogs
        res.json(response.documents); // Corrected 'blogs' to 'response.documents'
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
}

// Fixed fetchChallenges function with correct response handling
async function fetchChallenges(req, res) {
    try {
        const response = await databases.listDocuments(challengesCollectionId, [], 5); // Limit to 5 challenges
        res.json(response.documents); // Corrected 'challenges' to 'response.documents'
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch challenges' });
    }
}

module.exports = { fetchBlogs, fetchChallenges };
