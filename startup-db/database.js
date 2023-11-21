const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('Cluster0');
const collection = client.db('miniquest').collection('characters');

const wizard = {
    name: 'Wizard',
    summary: 'Manipulates arcane energy to both harm and heal',
    damage: '2',
    range: '5',
    speed: '4',
    special: 'heal'
  };

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

async function addCharacter(character) {
    const result = await collection.insertOne(character);
    return result;
}

async function updateCharacterCount(character){
    try {
        collection.updateOne(
           { "character" : character },
           { $inc: { "count" : 1 } }
        );
     } catch (error) {
        print(error);
     }
}

async function getCharacterCount(character){
  const query = { name: { character } };
  console.log(query)
  const cursor = collection.find(query, options);
  return cursor
}

module.exports = { addCharacter, updateCharacterCount, getCharacterCount };