import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header>
          Learn React
      </header>
      <main>
<Dictionary defaultKeyword="book"/>
      </main>
      <footer>
        This project is open-sourced on GitHub
      </footer>
    </div>
  );
}

export default App;
