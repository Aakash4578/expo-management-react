import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Websiteindex from './Websiteindex'; // adjust path if needed
import LoginRegister from './assets/components/Auth/LoginRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Websiteindex />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
