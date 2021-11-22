//REACT IMPORTS
import React from "react";
//CHAKRA IMPORTS
import { Box, Center, Flex } from "@chakra-ui/react";
//COMPONENTS
import HomeButton from "../../components/HomeButton";

const Home = () => {
  return (
    <Center height="100vh" background="#6d6875">
      <Flex alignItems="center" justifyContent="space-around" w="100vh">
        <HomeButton
          text="Dizi"
          to="/series"
          src="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
        />
        <HomeButton
          text="Film"
          to="/movies"
          src="https://streamcoimg-a.akamaihd.net/000/115/3873/1153873-PosterArt-93b3333a696042bf7da06b874af771d8.jpg"
        />
      </Flex>
    </Center>
  );
};

export default Home;
