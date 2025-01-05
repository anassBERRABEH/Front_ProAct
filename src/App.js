import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';  // Example of another page
import RegisterPage from './pages/RegisterPage';  // Example of another page
import ScenarioPage from './pages/ScenarioPage';
import RoadPage from './pages/Road';

function App() {

  const myVariable = {
    "id": 9,
    "problem": "\n        Situation:\n        Your first business idea didn't succeed, and you're closing down the startup. However, you’ve learned valuable lessons and built a solid network. You have the choice to start over with a new idea or take a break and reflect longer.\n\n        Challenge:\n        Failure isn't the end—it's a step forward. How would you use this experience to launch a stronger second venture?\n\n        Text Box for Answer:\n        What would you do next? Would you immediately start another business or take time to reflect? Explain how your past experiences would shape your next entrepreneurial move.\n         ",
    "solution": "\n         Failure is a powerful learning experience. Take time to reflect on what went wrong, whether it was market fit, team dynamics, or financial planning. Use these insights to refine your next business idea. Stay connected with the network you’ve built and seek mentorship. Remember, many successful entrepreneurs faced failure before their breakthrough.\n         ",
    "title": "Every End is a Start"
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/scenario" element={<ScenarioPage level={myVariable} />} />
        <Route path="/road" element={<RoadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
