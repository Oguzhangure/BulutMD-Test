//REACT IMPORTS
import { useState } from "react";
import React from "react";
//CHAKRA IMPORTS
import { Flex, Image, Heading, Collapse, Button } from "@chakra-ui/react";
//COMPONENTS

function ItemInfobox({ description, year, src, title, ...probs }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Flex
      border="2px"
      w="215px"
      borderRadius="15px"
      padding="5px"
      flexDirection="column"
      background="#b5838d"
      boxShadow="lg"
    >
      <Image
        alignSelf="center"
        border="1px"
        boxShadow="md"
        src={`${src}`}
        maxW="200px"
        borderRadius="15px"
      ></Image>
      <Heading paddingY="5px" textAlign="center" size="lg">
        {title}
      </Heading>
      <Heading paddingY="5px" textAlign="center" size="md">
        {year}
      </Heading>
      <Collapse startingHeight={45} in={show}>
        {description}
      </Collapse>
      <Button
        _hover={{
          backgroundColor: "#ffb4a2",
        }}
        _focus="none"
        variant="ghost"
        size="sm"
        onClick={handleToggle}
        mt="1rem"
      >
        Ayrıntıları {show ? "Gizle" : "Göster"}
      </Button>
    </Flex>
  );
}

export default ItemInfobox;
