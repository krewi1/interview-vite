import fetch from "node-fetch";

// How to refactor this code to async await
// How would you type the response

const fetchPlanet = () => {
  return new Promise((resolve, reject) => {
    fetch("https://swapi.dev/api/planets/1")
      .then((data) => data.json())
      .then((data) => resolve({ data, success: true }))
      .catch((e) => reject({ success: false, error: e }));
  });
};

(() => {
  fetchPlanet()
    .then((response) => console.log(response))
    .catch((error) => console.log("error", error));
})();
