const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const User = require('./models/User');
require('dotenv').config();


const app = express();
const PORT = 5000;

// MongoDB connection
const DB_URI = process.env.MONGODB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use(cors());

// Simple API Route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the Node.js backend!' });
});

// Example POST route to add a user
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;

    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
