import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import theme from '../styles/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html>
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet"></link>
      </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument