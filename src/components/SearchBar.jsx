//REACT IMPORTS
import React from "react";
//CHAKRA IMPORTS
import {
  Flex,
  Input,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

function SearchBar({ menu1, menu2, menu3, menu4, onSearch }) {
  return (
    <Flex
      flexDirection={{ lg: "row", sm: "column" }}
      paddingY="2rem"
      paddingX="3rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        w={{ md: "550px", sm: "300px" }}
        marginBottom={{ lg: "none", sm: "20px" }}
      >
        <Input
          onChange={onSearch}
          minLength="3"
          id="itemSearch"
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
          <MenuItem onClick={menu1}>Tümünü Sırala</MenuItem>
          <MenuItem onClick={menu2}>Yeniye Göre Sırala</MenuItem>
          <MenuItem onClick={menu3}>Eskiye Göre Sırala</MenuItem>
          <MenuItem onClick={menu4}>Rastgele Sırala</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default SearchBar;
