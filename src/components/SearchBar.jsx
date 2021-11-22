//REACT IMPORTS
import React from "react";
//CHAKRA IMPORTS
import {
  Flex,
  Input,
  IconButton,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
//COMPONENTS

function SearchBar() {
  return (
    <Flex
      paddingY="2rem"
      paddingX="3rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex w="550px">
        <Input
          textColor="black"
          backgroundColor="#ffcdb2"
          borderRadius="15px 0px 0px 15px"
          _focus="none"
          variant="filled"
          placeholder="Dizi/Film"
          boxShadow="dark-lg"
        />
        <IconButton
          backgroundColor="#ffb4a2"
          borderRadius="0px 15px 15px 0px"
          _focus="none"
          aria-label="Search database"
          boxShadow="dark-lg"
          icon={<SearchIcon />}
        />
      </Flex>
      <Menu>
        <MenuButton
          _hover={{
            backgroundColor: "#ffdecc",
            transform: "translate3d(0,4px,-0)",
          }}
          fontSize="xl"
          width="200px"
          backgroundColor="#ffcdb2"
          borderRadius="15px"
          _focus="none"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _hover={{
            boxShadow: "0 20px 30px -11px rgb(31 35 65 / 80%)",
            transform: "translate(0px, -5px)",
          }}
        >
          Sırala
        </MenuButton>
        <MenuList
          font="lg"
          boxShadow="dark-lg"
          backgroundColor="#ffcdb2"
          borderColor="black"
        >
          <MenuItem>Yeniye Göre Sırala</MenuItem>
          <MenuItem>Eskiye Göre Sırala</MenuItem>
          <MenuItem>Puana Göre Sırala</MenuItem>
          <MenuItem>Rastgele Sırala</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default SearchBar;
