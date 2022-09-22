import fetch from "node-fetch";

// How to refactor this code to async await
// How would you type the response

const fetchPlanet = () => {
  return new Promise((resolve) => {
    fetch("https://swapi.dev/api/planets/1")
      .then((data) => data.json())
      .then((data) => resolve({ success: true, data }))
      .catch((error) => resolve({ success: false, error }));
  });
};

(() => {
  fetchPlanet().then((response) => console.log(response));
})();
