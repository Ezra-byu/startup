const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Cluster0');
// const userCollection = db.collection('user');
// const characterCollection = db.collection('characters');

const userCollection = client.db('miniquest').collection('user');
const characterCollection = client.db('miniquest').collection('characters');

const wizard = {
    name: 'Wizard',
    summary: 'Manipulates arcane energy to both harm and heal',
    damage: '2',
    range: '5',
    speed: '4',
    special: 'heal'
};

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addCharacter(character) {
  const result = await characterCollection.insertOne(character);
  return result;
}

async function updateCharacterCount(character){
  try {
      characterCollection.updateOne(
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
const cursor = characterCollection.find(query, options);
return cursor
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addCharacter,
  updateCharacterCount,
  getCharacterCount,
};