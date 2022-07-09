import '../styles/globals.css'
import type { AppProps } from 'next/app'
import createEmotionCache from '../styles/createEmotionCache';
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

// emotion
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
