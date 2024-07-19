import React, { useState, useEffect } from 'react';
import api from '../API/api';

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await api.get('/Flashcards');
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <div>
      <h2>Flashcards</h2>
      {flashcards.map(flashcard => (
        <div key={flashcard._id}>
          <h3>{flashcard.question}</h3>
          <p>{flashcard.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;
