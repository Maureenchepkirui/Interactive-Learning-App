const express = require('express');
const auth = require('../Middleware/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
  // Retrieve flashcards
  res.send({ message: 'List of flashcards' });
});

router.post('/', auth, (req, res) => {
  // Create a new flashcard
  res.send({ message: 'Flashcard created' });
});

module.exports = router;
