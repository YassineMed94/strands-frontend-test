import "./App.scss";
import BreedsChart from "./features/BreedsChart";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        <button
          className="toggle-button"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <h1>Top 10 Dog Breeds by Image Count</h1>
        <BreedsChart />
      </div>
    </>
  );
}

export default App;
