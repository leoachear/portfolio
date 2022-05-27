import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { AppProps } from "next/app";

import theme from "../theme";
import Navbar from "../navbar/navbar";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Container
        backgroundColor="white"
        boxShadow="md"
        marginY={4}
        maxWidth="container.xl"
        padding={4}
      >
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
};

export default App;
