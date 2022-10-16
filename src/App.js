import React from "react";
import './App.css';
import Dictionary from "./Dictionary";
import logo from './logo.png';

function App() {
  return (
    <div className="Project">
    <header>
          <img src={logo} alt="logo" className="logo" width="100"></img><span className="header-title">Dictionary App</span>
      </header>
    <div className="App">
      <main>
<Dictionary />
      </main>
      <footer>
      This project was coded by Yulia Masliak and is open-sourced on GitHub and hosted on Netlify
      </footer>
    </div></div>
  );
}

export default App;
