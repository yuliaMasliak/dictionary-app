import React from "react";
import './App.css';
import Dictionary from "./Dictionary";
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      This project was coded by <a href="https://github.com/yuliaMasliak" target="_blank" rel="noreferrer">Yulia Masliak</a> and is open-sourced on <a href="https://github.com/yuliaMasliak/dictionary-app" targrt="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://fastidious-cannoli-88e429.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </footer>
    </div></div>
  );
}

export default App;
