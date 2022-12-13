import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import "antd/dist/antd.css";
import "../styles/globals.scss";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    
  } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
