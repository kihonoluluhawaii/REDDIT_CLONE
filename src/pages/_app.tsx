import type { AppProps } from "next/app";
import { theme } from "../chakra/theme";
import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "@/src/components/Layout/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
