import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "./App.css"; // Adjust the path based on your folder structure

function App() {
  // Step 1: Use useState to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Create the className based on the dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Step 3: Create an event handler to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Add the button with an event handler */}
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
