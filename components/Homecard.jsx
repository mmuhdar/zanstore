import React from "react";
import Link from "next/link";
import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";

export default function HomeCard({ game }) {
  const cardBackground = useColorModeValue("gray.200", "gray.700");
  const link = `/detail/${game.id}`;

  return (
    <Flex direction="column" justifyContent="space-between">
      <Link href={link}>
        <Box bg={cardBackground} p={1} rounded="xl" cursor="pointer">
          <Image objectFit="cover" rounded="lg" src={game.imageURL} />
        </Box>
      </Link>
      <Text mt={3} textAlign="center" fontWeight="bold">
        {game.name}
      </Text>
    </Flex>
  );
}
