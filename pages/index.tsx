import React from "react";
import { GetStaticProps } from "next";

import { Project } from "../project/types";
import api from "../project/api";
import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import Hero from "../Hero/hero";

// types
interface Props {
  projects: Project[];
}

const IndexRoute: React.FC<Props> = ({ projects }) => {
  return (
    <>
      {/* //----------- hero section */}
      <Box p={8}>
        <Hero></Hero>
      </Box>
      {/* //----------- end hero section */}
      {/* //----------- projects section */}
      <Box p={8}>
        <Divider
          backgroundColor="primary.500"
          width="64px"
          height="6px"
          borderRadius="10px"
          mt={8}
          mb={4}
        />
        <Heading as="h2">Projects</Heading>
        <Grid
          templateColumns="repeat(auto-fill, minmax(360px, 1fr))"
          gridGap="6"
          p={20}
        >
          {projects.map((project) => {
            return (
              <Stack
                borderRadius="md"
                padding={4}
                key={project.id}
                backgroundColor="gray.100"
                spacing={5}
                boxShadow={"2xl"}
                rounded={"md"}
              >
                <Box bg={"gray.100"} mt={-4} mx={-4} mb={0} pos={"relative"}>
                  <Image src={project.image} alt={project.title} />
                </Box>
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
                <Stack spacing={1}>
                  <Heading as="h4" size="sm">
                    Description:
                  </Heading>
                  <Text>{project.description}</Text>
                  <Heading as="h4" size="sm">
                    Tech stack:
                  </Heading>
                  <Text fontSize="sm" fontWeight="500" color="primary.500">
                    {project.technologies}
                  </Text>
                </Stack>
                <Button colorScheme="primary">See more...</Button>
              </Stack>
            );
          })}
        </Grid>
      </Box>
      {/* //----------- end projects section */}
    </>
  );
};

// using getStaticProps from NextJS
export const getStaticProps: GetStaticProps = async () => {
  const projects = await api.list();

  return {
    props: {
      projects,
    },
  };
};

export default IndexRoute;
