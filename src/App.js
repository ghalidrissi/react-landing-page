import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
