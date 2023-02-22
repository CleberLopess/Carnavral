import "styles/globals.css";
import type { AppProps } from "next/app";

//redux
import { store } from "store";
import { Provider } from "react-redux";

//components
import { Layout } from "sections/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
