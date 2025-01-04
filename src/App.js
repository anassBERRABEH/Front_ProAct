import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';  // Example of another page
import RegisterPage from './pages/RegisterPage';  // Example of another page
import ScenarioPage from './pages/ScenarioPage';
import RoadPage from './pages/Road';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/scenario" element={<ScenarioPage />} />
        <Route path="/road" element={<RoadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
