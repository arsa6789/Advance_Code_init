const { MongoClient } = require('mongodb')
require('dotenv').config()

async function connectMongo(){
    const url = process.env.MONGODB_URI //|| 'mongodb+srv://abdulrehmanshamshad311_db_user:2sc0w3qAzQgCR2rr@cluster0.vevyg9r.mongodb.net/?appName=Cluster0'

    const client = new MongoClient(url)

    try{
        await client.connect()
        await listDatabases(client) 

    }catch(e){
        console.log(e.message, '===error')
    }finally{
        await client.close()
    }
}

connectMongo().catch(console.error);

async function listDatabases(client){
   const dbList = await client.db().admin().listDatabases()

    console.log('Databases: ')
    dbList.databases.forEach(db => console.log(` - ${db.name}`));
}

module.exports = connectMongo()