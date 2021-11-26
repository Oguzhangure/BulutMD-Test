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

  //API FUNCTIONS İMPORT
  const {
    getMovies,
    getSeries,
    sortMovies,
    sortSeries,
    randomizeItems,
    searchItems,
  } = API();

  //Sayfa açıldığında gelen verilerin ilk 18 tanesini state'e atar.
  useEffect(() => {
    if (type === "movie") {
      setItems(getMovies().slice(0, 18));
    } else {
      setItems(getSeries().slice(0, 18));
    }
  }, []);

  //İnputtan gelen veriyi alır.
  const getid = () => document.getElementById("itemSearch").value;

  //Gelen veriyi inputtaki veriyle filtreler ve state'e atar
  const searchAction = () => {
    if (type === "movie") {
      setItems(searchItems(getid(), getMovies()));
    } else {
      setItems(searchItems(getid(), getSeries()));
    }
  };

  //Sırala menüsünün evetleri. Gelen veriyi işler state'e atar
  const menu1Action = () => {
    if (type === "movie") {
      setItems(getMovies());
    } else {
      setItems(getSeries());
    }
  };
  const menu2Action = () => {
    if (type === "movie") {
      setItems(sortMovies(true));
    } else {
      setItems(sortSeries(true));
    }
  };
  const menu3Action = () => {
    if (type === "movie") {
      setItems(sortMovies(false));
    } else {
      setItems(sortSeries(false));
    }
  };
  const menu4Action = () => {
    if (type === "movie") {
      setItems(randomizeItems(getMovies()));
    } else {
      setItems(randomizeItems(getSeries()));
    }
  };

  //State'deki verileri gridin içine bastırır.
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
    <Box minH="100vh" bg="#6d6875">
      <Navbar />
      <SearchBar
        menu1={() => menu1Action()}
        menu2={() => menu2Action()}
        menu3={() => menu3Action()}
        menu4={() => menu4Action()}
        onSearch={() => searchAction()}
      />
      <SimpleGrid
        justifyItems="center"
        alignItems="baseline"
        padding="2rem"
        minChildWidth="200px"
        spacing="60px"
      >
        {DisplayMovies()}
      </SimpleGrid>
    </Box>
  );
}

export default Movies;
