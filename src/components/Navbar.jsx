//REACT IMPORTS
import React from "react";
import { Link } from "react-router-dom";
//CHAKRA IMPORTS
import { Flex, IconButton, Select } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
//COMPONENTS
import NavbarButton from "./NavbarButton";

function Navbar() {
  return (
    <Flex padding="10px" alignItems="center" justifyContent="space-around">
      <NavbarButton w="15px" link="/" text={<ChevronLeftIcon w={7} h={7} />} />
      <NavbarButton link="/movies" text="Filmler" />
      <NavbarButton link="/series" text="Diziler" />
    </Flex>
  );
}

export default Navbar;
