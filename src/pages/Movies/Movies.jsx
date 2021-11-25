//REACT IMPORTS
import React from "react";
import { useState, useEffect } from "react";
//CHAKRA IMPORTS
import { Box, SimpleGrid } from "@chakra-ui/react";
//COMPONENTS
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import ItemInfobox from "../../components/ItemInfobox";
//SERVICES  IMPORT
import API from "../../services/API";
function Movies({ type = "movie" }) {
  const [items, setItems] = useState([]);
  const { getMovies, getSeries } = API();
  useEffect(() => {
    if (type == "movie") {
      setItems(getMovies().slice(0, 18));
    } else {
      setItems(getSeries().slice(0, 18));
    }
  }, []);
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
      <SearchBar />
      <SimpleGrid padding="2rem" minChildWidth="200px" spacing="60px">
        {DisplayMovies()}
      </SimpleGrid>
    </Box>
  );
}

export default Movies;
