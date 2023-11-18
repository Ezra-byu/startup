const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000; //I changed this from 3000


// app.use(express.static('public'));
// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

var queue = []; //Queue is just a string intended to hold character type

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// SubmitCharacter
apiRouter.post('/characters', (req, res) => {
  console.log('in post request')
  queue = req.body;
  res.send(queue);
});

// GetCharacter
apiRouter.get('/characters', (_req, res) => {
  console.log('in get request')
  res.send(queue); // Is this correct?
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



function updateCharacter(queue) {
  // for entry in characters, add/update the user's character
  // queue[username] = character
  // return queue.username
  console.log(queue);
  return queue;
}
