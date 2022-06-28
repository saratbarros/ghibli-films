import React, { useState } from "react";
import "./App.css";
import FilmList from "../components/FilmList";
import logo from "../logo.png";

export default function App() {
  // eslint-disable-next-line
  const [film, setFilm] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img alt="Ghilbli Films logo" src={logo}/>
      </header>
      <div className="MainContainer">
        <FilmList setter={setFilm} />
      </div>
    </div>
  );
}