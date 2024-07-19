import React, { useState, useEffect } from 'react';
import api from '../api/api';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await api.get('/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Quizzes</h2>
      {quizzes.map(quiz => (
        <div key={quiz._id}>
          <h3>{quiz.title}</h3>
          {/* Render quiz questions here */}
        </div>
      ))}
    </div>
  );
};

export default Quizzes;
