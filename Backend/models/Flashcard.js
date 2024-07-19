const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  front: { type: String, required: true },
  back: { type: String, required: true }
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
