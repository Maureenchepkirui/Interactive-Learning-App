const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');
const authMiddleware = require('../Middleware/authMiddleware');

// Create a flashcard
router.post('/', authMiddleware, async (req, res) => {
  try {
    const flashcard = new Flashcard(req.body);
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all flashcards
router.get('/', async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.status(200).json(flashcards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Other CRUD operations...

module.exports = router;
