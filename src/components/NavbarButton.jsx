//REACT IMPORTS
import React from "react";
import { Link } from "react-router-dom";
//CHAKRA IMPORTS
import { Button } from "@chakra-ui/react";

function NavbarButton({ link, text, ...probs }) {
  return (
    <Link to={link}>
      <Button
        minWidth="250px"
        fontSize="2xl"
        boxShadow="md"
        _hover={{
          boxShadow: "0 20px 30px -11px rgb(31 35 65 / 80%)",
          transform: "translate(0px, -5px)",
        }}
        w="150px"
        backgroundColor="#ffb4a2"
        borderRadius="20"
        _focus="none"
        padding="13px"
        colorScheme="#6d6875"
        size="lg"
        variant="outline"
        marginTop={{ lg: "none", sm: "10px" }}
        {...probs}
      >
        {text}
      </Button>
    </Link>
  );
}

export default NavbarButton;
