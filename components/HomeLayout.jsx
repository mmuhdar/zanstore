import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Grid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import HomeCard from "./Homecard";
import { fetchGame } from "../store/game/action";

export default function HomeLayout() {
  const dispatch = useDispatch();
  const games = useSelector(({ games }) => games.games);
  const isLoading = useSelector(({ games }) => games.isLoading);

  useEffect(() => {
    dispatch(fetchGame("http://localhost:1337/games"));
  }, [dispatch]);
  console.log(games);

  return (
    <Box mt={10} mx="auto" boxSize="xl" width="80%">
      {isLoading ? (
        <Flex justifyContent="center" h="70vh" alignItems="center">
          <Spinner color="telegram.600" size="xl" />
        </Flex>
      ) : (
        <Grid
          templateColumns={{
            xl: "repeat(5, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          {games.map((item) => {
            return <HomeCard game={item} key={item.id} />;
          })}
        </Grid>
      )}
    </Box>
  );
}
