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
        _hover={{
          backgroundColor: "#ffcdb2",
          transform: "translate3d(4px,0,-0)",
        }}
        w="150px"
        backgroundColor="#ffb4a2"
        borderRadius="20"
        boxShadow="dark-lg"
        height="35px"
        target="_blank"
        _focus="none"
        padding="13px"
        colorScheme="#6d6875"
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
