import React from "react";
import { GetStaticProps } from "next";

import { Project } from "../project/types";
import api from "../project/api";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

// types
interface Props {
  projects: Project[];
}

const IndexRoute: React.FC<Props> = ({ projects }) => {
  return (
    <Box p="6">
      <Heading as="h2">Projects</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(360px, 1fr))" gridGap="6">
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
