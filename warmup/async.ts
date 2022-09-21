import fetch from "node-fetch";

// How to refactor this code to promises
// How would you type the response

const fetchGames = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/planets/1");
    const data = await res.json();
    return data;
  } catch (e) {
    return { success: false, error: e };
  }
};

(async () => {
  try {
    const result = await fetchGames();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
