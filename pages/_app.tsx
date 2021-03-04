import Head from "next/head";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pachecodev - Blog</title>
        <meta
          name="description"
          content="Um blog para falar sobre tecnologia, música, paternidade e muito mais"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
