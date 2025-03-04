const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Routes/auth');
const quizRoutes = require('./Routes/quizzes');
const flashcardRoutes = require('./Routes/flashcards');

const app = express();

mongoose.connect('mongodb://localhost:27017/interactive-learning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON bodies

app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/flashcards', flashcardRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
