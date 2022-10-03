

// const { MongoClient } = require('mongodb');

// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://usr:pwd@cluster0.kiqskwt.mongodb.net/?retryWrites=true&w=majority";

//     /**
//      * The Mongo Client you will use to interact with your database
//      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
//      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
//      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
//      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
//      */
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }

// main().catch(console.error);

// /**
//  * Print the names of all available databases
//  * @param {MongoClient} client A MongoClient that is connected to a cluster
//  */
// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

const { MongoClient } = require('mongodb');

async function main() {
    
    const uri = "mongodb+srv://usr:pwd@cluster0.kiqskwt.mongodb.net/?retryWrites=true&w=majority";
     const client = new MongoClient(uri);

     try {
         await client.connect();
         await findOneListingByName(client);
     } finally {
         await client.close();
     }
 }
 
 main().catch(console.error);
 
 /**
  * Print an Airbnb listing with the given name
  * Note: If more than one listing has the same name, only the first listing the database finds will be printed.
  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
  * @param {String} nameOfListing The name of the listing you want to find
  */
 async function findOneListingByName(client) {
     
     const result = await client.db("test").collection("Events").find();
 
     if (result) {
         console.log(`Results Retrieved !!`);
     } else {
         console.log(`No listings found with the name `);
     }
 
 

     const cursor = client.db("test").collection("Events").find()
 
     const results = await cursor.toArray();
 
     if (results.length > 0) {
         console.log(`List of Users`);
         results.forEach((result, i) => {
             console.log(result.title)
         });
     } else {
         console.log(`No listings found with at least  bedrooms and bathrooms`);
     }
 }
