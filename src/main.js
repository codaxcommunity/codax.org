const sdk = require("node-appwrite");
const client = new sdk.Client();
const databases = new sdk.Databases(client);

client
  .setEndpoint("https://[YOUR_APPWRITE_ENDPOINT]")
  .setProject("[codaxwebsite]")

const blogsCollectionId = '[YOUR_BLOGS_COLLECTION_ID]';
const challengesCollectionId = '[YOUR_CHALLENGES_COLLECTION_ID]';

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
      
