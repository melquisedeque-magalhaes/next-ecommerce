import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  )
}

export default MyApp
