import { useEffect } from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Button,
  Spinner,
  Input,
  Grid,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDetail } from "../store/detail/action";

export default function DetailLayout(props) {
  const dispatch = useDispatch();
  const detail = useSelector(({ detail }) => detail.detail);
  const isLoading = useSelector(({ detail }) => detail.isLoading);

  const checkoutBackground = useColorModeValue("gray.200", "gray.700");
  const nominalBackground = useColorModeValue("gray.300", "gray.600");
  const priceColor = useColorModeValue("telegram.600", "telegram.400");

  const { id } = props;

  useEffect(() => {
    dispatch(fetchDetail(`http://localhost:1337/games/${id}`));
  }, [id, dispatch]);

  return (
    <Box h="full" w={{ xl: "80%", sm: "90%", md: "80%", lg: "80%" }} mx="auto">
      {isLoading ? (
        <Flex justifyContent="center" h="70vh" alignItems="center">
          <Spinner color="telegram.600" size="xl" />
        </Flex>
      ) : (
        <Box w={{ xl: "70%", lg: "70%", sm: "100%" }} mx="auto">
          <Flex direction="column">
            <Box bg={checkoutBackground} p={3} rounded="xl">
              <Flex alignItems="center">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  p={3}
                  bg="telegram.400"
                  rounded="lg"
                  color="white"
                >
                  1
                </Text>
                <Text fontSize="lg" fontWeight="bold" ml={3}>
                  Masukkan User ID
                </Text>
              </Flex>
              <Input
                w={{ xl: "50%", sm: "100%" }}
                mt={3}
                placeholder="Masukkan ID"
                focusBorderColor="telegram.400"
                borderColor="telegram.600"
                border="2px"
              />
            </Box>
            <Box bg={checkoutBackground} p={3} rounded="xl" mt={3}>
              <Flex alignItems="center">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  p={3}
                  bg="telegram.400"
                  rounded="lg"
                  color="white"
                >
                  2
                </Text>
                <Text fontSize="lg" fontWeight="bold" ml={3}>
                  Pilih nominal
                </Text>
              </Flex>
              <Grid templateColumns="repeat(3, 1fr)" mt={3} gap={3}>
                {detail?.items?.map((item) => {
                  return (
                    <Button key={item.id} bg={nominalBackground}>
                      {item.amount} {item.name}
                    </Button>
                  );
                })}
              </Grid>
            </Box>
            <Box bg={checkoutBackground} p={3} rounded="xl" mt={3}>
              <Flex alignItems="center">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  p={3}
                  bg="telegram.400"
                  rounded="lg"
                  color="white"
                >
                  3
                </Text>
                <Text fontSize="lg" fontWeight="bold" ml={3}>
                  Pilih Pembayaran
                </Text>
              </Flex>
              <Box
                bg={nominalBackground}
                p={3}
                mt={3}
                rounded="lg"
                cursor="pointer"
                _active={{ borderBlockColor: "telegram.400" }}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Image
                    src="https://seeklogo.com/images/Q/quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png"
                    objectFit="cover"
                    boxSize="10%"
                  />
                  <Text fontWeight="semibold" color={priceColor}>
                    Rp. 120.000
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
