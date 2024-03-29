import React from "react";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Box,
  HStack,
  useColorMode,
  Spacer,
  Link
} from "@chakra-ui/react";
import NextLink from 'next/link';
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify={"space-between"}>
      <Text fontSize='xl' textAlign="center" display={{ base: "none", md: "flex" }}>
        Logo Here
      </Text>
      <Box display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Dropdown menu"
            icon={<HamburgerIcon />}
          ></MenuButton>
          <MenuList>
            <MenuItem> 
            <NextLink href='#about' passHref>
              <Link>About</Link>
          </NextLink>
            </MenuItem>
            <MenuItem> 
            <NextLink href='#roadmap' passHref>
              <Link>Roadmap</Link>
          </NextLink>
            </MenuItem>
            <MenuItem> 
            <NextLink href='teams' passHref>
              <Link>Team</Link>
          </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <HStack spacing='100px' justify={"space-between"} display={{base: 'none', md:'flex'}} >
          <Button variant='ghost'>About</Button>
          <Button variant='ghost'>Roadmap</Button>
          <Button variant='ghost'>Team</Button>
      </HStack>
      <HStack spacing='15px'>
        <Button>Connect Wallet</Button>
        <IconButton aria-label="Theme switcher" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default Navbar;
