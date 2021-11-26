import data from "../data/data.json";

const API = () => {
  const getMovies = () =>
    data.entries.filter((item) => item.programType === "movie");

  const getSeries = () =>
    data.entries.filter((item) => item.programType === "series");

  const sortSeries = (c) =>
    getSeries().sort((a, b) => {
      if (c == true) {
        return b.releaseYear - a.releaseYear;
      } else {
        return a.releaseYear - b.releaseYear;
      }
    });

  const sortMovies = (c) =>
    getMovies().sort((a, b) => {
      if (c == true) {
        return b.releaseYear - a.releaseYear;
      } else {
        return a.releaseYear - b.releaseYear;
      }
    });

  const randomizeItems = (tempMovies) => {
    for (let i = 0; i < tempMovies.length; i++) {
      const tempMovie = tempMovies[i];
      const randomIndex = Math.floor(Math.random() * tempMovies.length);
      tempMovies[i] = tempMovies[randomIndex];
      tempMovies[randomIndex] = tempMovie;
    }
    return tempMovies;
  };

  return { getMovies, getSeries, sortMovies, sortSeries, randomizeItems };
};

export default API;
