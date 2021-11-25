//REACT IMPORTS
import React from "react";
import { Link } from "react-router-dom";
//CHAKRA IMPORTS
import { Flex, Image, Heading } from "@chakra-ui/react";
//COMPONENTS

function HomeButton({ to, src, text, ...probs }) {
  return (
    <Link to={to}>
      <Flex
        borderRadius="15px"
        padding="8px"
        flexDirection="column"
        background="#b5838d"
        boxShadow=" 0px 64px 82px 20px rgba(0,0,0,0.64)"
        {...probs}
      >
        <Image
          border="1px"
          boxShadow="md"
          src={src}
          maxW="250px"
          borderRadius="15px"
        ></Image>
        <Heading textAlign="center" size="lg">
          {text}
        </Heading>
      </Flex>
    </Link>
  );
}

export default HomeButton;
