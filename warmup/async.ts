import fetch from "node-fetch";

// How to refactor this code to promises
// How would you type the response

const fetchGames = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/planets/1");
    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

(async () => {
  const result = await fetchGames();
  console.log(result);
})();
