import { Button, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems="center" px={20} py={5}>
      <Link href="/">
        <Heading cursor="pointer" color="telegram.400">
          Gameshop
        </Heading>
      </Link>
      <Spacer />
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? (
          <SunIcon color="telegram.400" />
        ) : (
          <MoonIcon color="telegram.400" />
        )}
      </Button>
    </Flex>
  );
}
