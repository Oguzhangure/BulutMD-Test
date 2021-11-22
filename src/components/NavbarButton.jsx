//REACT IMPORTS
import React from "react";
import { Link } from "react-router-dom";
//CHAKRA IMPORTS
import { Button } from "@chakra-ui/react";
//COMPONENTS

function NavbarButton({ link, text, ...probs }) {
  return (
    <Link to={link}>
      <Button
        height="35px"
        target="_blank"
        _focus="none"
        padding="13px"
        colorScheme="purple"
        size="lg"
        variant="outline"
        {...probs}
      >
        {text}
      </Button>
    </Link>
  );
}

export default NavbarButton;
