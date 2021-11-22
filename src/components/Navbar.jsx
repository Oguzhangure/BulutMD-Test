//REACT IMPORTS
import React from "react";
import { Link } from "react-router-dom";
//CHAKRA IMPORTS
import { Flex, IconButton, Select } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  ArrowLeftIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
//COMPONENTS
import NavbarButton from "./NavbarButton";

function Navbar() {
  return (
    <Flex
      bg="#E9D8FD"
      padding="10px"
      alignItems="center"
      justifyContent="space-around"
    >
      <Link to="/">
        <IconButton
          height="35px"
          colorScheme="purple"
          size="lg"
          variant="outline"
          icon={<ArrowLeftIcon />}
        />
      </Link>
      <NavbarButton link="/movies" text="Filimler" />
      <NavbarButton link="/series" text="Diziler" />
    </Flex>
  );
}

export default Navbar;
