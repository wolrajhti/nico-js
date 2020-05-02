// load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// fake local database
const nodes = {
  0: {title: 'title1'},
  1: {title: 'title2'},
  2: {title: 'title3'}
};
let CURRENT_ID = 2;

// basic api for nodes
app.get('/api/nodes', (req, res) => {
  res.json(Object.values(nodes));
});

app.get('/api/nodes/:id', (req, res) => {
  res.json(nodes[req.params.id]);
});

app.post('/api/nodes', bodyParser.json(), (req, res) => {
  console.log(req.body);
  ++CURRENT_ID;
  nodes[CURRENT_ID] = req.body;
  res.json(nodes[CURRENT_ID]);
});

// serve front-end files
app.get('/*', express.static('public'));

// start server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
