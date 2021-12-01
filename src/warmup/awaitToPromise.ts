export const fetchFuturama = async () => {
  try {
    const res = await fetch("https://sampleapis.com/futurama/api/characters");
    const data = await res.json();
    return data;
  } catch (e) {
    return {success: false};
  }
};