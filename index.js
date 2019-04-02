const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Correctly Connected To Server');
    const db = client.db(dbname);
    const colllection = db.collection('dishes');

    collection.insert({"name": "uthaapizza", "description": "test"}, (err, result) => {
         assert.equal(err, null);

         console.log("After Insert:\n");
         console.log(results.ops);

         collection.find({}).toArray((err, docs) => {
             assert.equal(err, null);
             console.log("Found:\n");
             console.log(docs);
         });
    });
});