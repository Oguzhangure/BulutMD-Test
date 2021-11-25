import data from "../data/data.json";

const API = () => {
  const getMovies = () =>
    data.entries.filter((item) => item.programType === "movie");

  const getSeries = () =>
    data.entries.filter((item) => item.programType === "series");

  return { getMovies, getSeries };
};

export default API;
