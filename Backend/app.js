const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth');
const quizRoutes = require('./Routes/quizzes');
const flashcardRoutes = require('./Routes/flashcards');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/flashcards', flashcardRoutes);

mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});

module.exports = app;
