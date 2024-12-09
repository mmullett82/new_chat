// frontend/src/App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import Suggestions from './components/Suggestions';

function App() {
  // Mock data for menu and suggestions
  const [menuItems] = useState(["Sources", "Quick Upload", "Settings", "Help"]);
  const [suggestions] = useState([
    "What is AI?",
    "Explain Python basics",
    "How do I build a chatbot?",
  ]);

  const handleSuggestionClick = (suggestion) => {
    console.log(`User clicked: ${suggestion}`);
  };

  return (
    <div className="app">
      <Menu menuItems={menuItems} />
      <Suggestions suggestions={suggestions} onClickSuggestion={handleSuggestionClick} />
    </div>
  );
}

export default App;
