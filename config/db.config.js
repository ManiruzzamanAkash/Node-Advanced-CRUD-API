const dbName   = process.env.MONGODB_DEFAULT_DB;
const cluster  = process.env.MONGODB_CLUSTER;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

module.exports = {
    url: `mongodb+srv://${username}:${encodeURIComponent(password)}@${cluster}/${dbName}?retryWrites=true&w=majority`
};