import { ChakraProvider } from '@chakra-ui/react'

import '../styles/scrollbar.css'
import theme from '../styles/theme'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp