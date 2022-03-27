import { extendTheme } from '@chakra-ui/react'

// const styles = {
//     global: {
//       body: {
        
//       },
//     },
// }

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

const theme = extendTheme({ config })

export default theme
