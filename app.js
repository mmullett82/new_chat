// frontend/src/components/Menu.js
import React from 'react';

const Menu = ({ menuItems }) => {
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;

// frontend/src/components/Suggestions.js
import React from 'react';

const Suggestions = ({ suggestions, onClickSuggestion }) => {
  return (
    <div className="suggestions">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="suggestion-bubble"
          onClick={() => onClickSuggestion(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
