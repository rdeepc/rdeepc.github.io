import '../styles/globals.css'
import '@fontsource/roboto/100.css';
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default App
