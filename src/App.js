import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Quizzes from './Components/Quizzes';
import Flashcards from './Components/Flashcards';
import Login from './Components/Login';
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quizzes" component={Quizzes} />
          <Route path="/flashcards" component={Flashcards} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
