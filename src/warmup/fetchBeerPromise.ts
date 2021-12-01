export const fetchAle = () => {
  return new Promise((resolve, reject) => {
    fetch("'https://api.sampleapis.com/beers/ale'")
      .then((data) => data.json())
      .then((data) => resolve({ data, success: true }))
      .catch(() => reject({ success: false }));
  });
};
