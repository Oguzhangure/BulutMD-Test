//REACT IMPORTS
import React from "react";
import { useState, useEffect } from "react";
//CHAKRA IMPORTS
import { Box, SimpleGrid } from "@chakra-ui/react";
//COMPONENTS
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import ItemInfobox from "../../components/ItemInfobox";
//SERVCES  IMPORT
import API from "../../services/API";
function Movies({ type = "movie" }) {
  const [items, setItems] = useState([]);

  const { getMovies, getSeries, sortMovies, sortSeries, randomizeItems } =
    API();
  useEffect(() => {
    if (type === "movie") {
      setItems(getMovies().slice(0, 18));
    } else {
      setItems(getSeries().slice(0, 18));
    }
  }, []);

  const menu1Action = () => {
    if (type === "movie") {
      setItems(getMovies());
    } else {
      setItems(getSeries());
    }
  };
  const menu3Action = () => {
    if (type === "movie") {
      setItems(sortMovies(false));
    } else {
      setItems(sortSeries(false));
    }
  };
  const menu2Action = () => {
    if (type === "movie") {
      setItems(sortMovies(true));
    } else {
      setItems(sortSeries(true));
    }
  };
  const menu4Action = () => {
    if (type === "movie") {
      setItems(randomizeItems(getMovies()));
    } else {
      setItems(randomizeItems(getSeries()));
    }
  };

  console.log(items);

  function DisplayMovies() {
    return items.map((item) => (
      <ItemInfobox
        title={item.title}
        description={item.description}
        year={item.releaseYear}
        src={item.images["Poster Art"].url}
      />
    ));
  }

  return (
    <Box bg="#6d6875">
      <Navbar />
      <SearchBar
        onSearch={() => menu1Action()}
        menu1={() => menu1Action()}
        menu2={() => menu2Action()}
        menu3={() => menu3Action()}
        menu4={() => menu4Action()}
      />
      <SimpleGrid padding="2rem" minChildWidth="200px" spacing="60px">
        {DisplayMovies()}
      </SimpleGrid>
    </Box>
  );
}

export default Movies;
