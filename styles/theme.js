import { extendTheme } from '@chakra-ui/react'

const styles = {
    global: {
      body: {
        fontFamily: "'IBM Plex Mono', monospace"
      },
    },
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

const theme = extendTheme({ config, styles })

export default theme
