//REACT IMPORTS
import React from "react";
//CHAKRA IMPORTS
import { Flex } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
//COMPONENTS
import NavbarButton from "./NavbarButton";

function Navbar() {
  return (
    <Flex
      flexDirection={{ md: "row", sm: "column" }}
      padding="10px"
      alignItems="center"
      justifyContent="space-around"
      paddingTop="15px"
    >
      <NavbarButton w="15px" link="/" text={<HiHome fontSize="33" />} />
      <NavbarButton link="/movies" text="Filmler" />
      <NavbarButton link="/series" text="Diziler" />
    </Flex>
  );
}

export default Navbar;
