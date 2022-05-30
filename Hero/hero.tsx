import React from "react";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box flex={2}>
        <Stack spacing={6} w={"full"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Frontend Web Developer
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Leo Achear
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Create Project
            </Button>
            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Stack>
      </Box>
      <Box flex={1}>
        <Center h="100%" w="100%">
          <Image
            alt="Leo Achear"
            src="https://pbs.twimg.com/profile_images/1420026730803302411/-GShabO2_400x400.jpg"
            borderRadius="full"
            boxSize="250px"
          />
        </Center>
      </Box>
    </Flex>
  );
}
