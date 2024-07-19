const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quizzes');
const flashcardRoutes = require('./routes/flashcards');

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
