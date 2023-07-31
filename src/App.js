import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Midrand" />
        <footer>
          This project was coded by {"Cathy Sekhuto"}
          <a
            href="https://github.com/CathrineZA/weather-app-react.git"
            target="-blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
