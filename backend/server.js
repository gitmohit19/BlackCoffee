const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const cors =require('cors');
const UserModel= require('./models/User');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
// Replace with your MongoDB connection string
 const mongoURI= 'mongodb+srv://mohit1911mp:tOaBOgBoI5fNLO3g@cluster1.noki7zz.mongodb.net/coffee?retryWrites=true&w=majority';

 
//  Connect to MongoDB
mongodb.MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');
        const db = client.db();

        // Define API route to fetch data
        app.get('/getData', (req, res) => {
            const collection = db.collection('coffeedata');
            
            // Fetch data from the collection
            collection.find({}).toArray()
                .then(data => {
                    res.json(data);
                })
                .catch(error => {
                    res.status(500).json({ error: 'Error fetching data' });
                });
        });
    })
    .catch(error => console.error('Error connecting to MongoDB', error));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});