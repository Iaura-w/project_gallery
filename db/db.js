
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users.js');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'galleryDB';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  db.collection('users').insertOne({
    imie: "Jan",
    nazwisko: "Kowalski"
  }, (error, result) => {
    if(error) {
      console.log("coś nie tak")
    } else {
      console.log("działa poprawnie")
    }
  });

  client.close();
});

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
