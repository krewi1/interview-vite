import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// This is for warmump remove
import { binding } from "./warmup/binding";
import { iteratorFail } from "./warmup/iteratorFail";
("./warmup/iteratorFail");
import { fetchGames } from "./warmup/fetchGamesAsync";
import { fetchAle } from "./warmup/fetchBeerPromise";
import { timeout } from "./warmup/timeout";

window.warmup = {
  binding,
  iteratorFail,
  fetchGames,
  fetchAle,
  timeout,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
