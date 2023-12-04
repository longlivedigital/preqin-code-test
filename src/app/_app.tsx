import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";

function BaseApp({ Component, pageProps }: { Component: FC; pageProps: any }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default BaseApp;
