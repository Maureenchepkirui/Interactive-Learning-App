const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');
const authMiddleware = require('../Middleware/authMiddleware');

// Create a quiz
router.post('/', authMiddleware, async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Other CRUD operations...

module.exports = router;
