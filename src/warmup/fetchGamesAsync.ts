export const fetchGames = async () => {
  try {
    const res = await fetch("https://api.sampleapis.com/switch/games");
    const data = await res.json();
    return data;
  } catch (e) {
    return {success: false};
  }
};