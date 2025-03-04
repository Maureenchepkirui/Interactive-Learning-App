import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/quizzes">Quizzes</Link>
      <Link to="/flashcards">Flashcards</Link>
    </nav>
  );
};

export default Navbar;
