import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Head>
        <title>Wongames</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="shortcut icon"
          href="/img/icon/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon/icon-512.png"
          type="image/x-icon"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
