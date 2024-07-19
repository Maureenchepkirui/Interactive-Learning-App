const express = require('express');
const auth = require('../Middleware/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
  // Retrieve quizzes
  res.send({ message: 'List of quizzes' });
});

router.post('/', auth, (req, res) => {
  // Create a new quiz
  res.send({ message: 'Quiz created' });
});

module.exports = router;
