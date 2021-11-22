//REACT IMPORTS
import React from "react";
//CHAKRA IMPORTS
import { Box, SimpleGrid } from "@chakra-ui/react";
//COMPONENTS
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import ItemInfobox from "../../components/ItemInfobox";
import Data from "../../data/data.json";
function Movies({ type = "movie" }) {
  return (
    <Box bg="#6d6875">
      <Navbar />
      <SearchBar />
      <SimpleGrid padding="2rem" minChildWidth="200px" spacing="60px">
        {Data.entries.map((data) => {
          if (data.programType == (type)) {
            return (
              <ItemInfobox
                description={data.description}
                title={data.title}
                year={data.releaseYear}
                src={data.images["Poster Art"].url}
              />
            );
          }
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Movies;
