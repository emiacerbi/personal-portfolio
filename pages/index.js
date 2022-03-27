import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Icon, 
  IconButton, 
  Image, 
  Link, 
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { Head } from "next/head";

import { FaCss3Alt, FaEnvelope, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLinkedin, FaReact, FaSass} from "react-icons/fa";


import { AddIcon, MoonIcon, PhoneIcon, SunIcon, WarningIcon } from '@chakra-ui/icons'




export default function Home() {

  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('whitesmoke', '#202124')
  const color = useColorModeValue('#202124', 'whitesmoke')
  const border = useColorModeValue('4px solid #202124' , '4px solid whitesmoke')
  const borderSlim = useColorModeValue('2px solid #202124' , '2px solid whitesmoke')
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)

  const shadow = useColorModeValue('rgb(255, 255, 255) 10px -10px 0px -4px, rgb(0, 0, 0) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -4px, rgb(0, 0, 0) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -4px, rgb(0, 0, 0) 30px -30px',
    'rgb(32, 33, 36) 10px -10px 0px -4px, rgb(255, 255, 255) 10px -10px, rgb(32, 33, 36) 20px -20px 0px -4px, rgb(255, 255, 255) 20px -20px, rgb(32, 33, 36) 30px -30px 0px -4px, rgb(255, 255, 255) 30px -30px') 
  const shortShadow = useColorModeValue('rgb(255, 255, 255) 10px -10px 0px -4px, rgb(0, 0, 0) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -4px, rgb(0, 0, 0) 20px -20px',
    'rgb(32, 33, 36) 10px -10px 0px -4px, rgb(255, 255, 255) 10px -10px, rgb(32, 33, 36) 20px -20px 0px -4px, rgb(255, 255, 255) 20px -20px') 
  const veryShortShadow = useColorModeValue('rgb(255, 255, 255) 10px -10px 0px -2px, rgb(0, 0, 0) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -2px',
  'rgb(32, 33, 36) 10px -10px 0px -2px, rgb(255, 255, 255) 10px -10px, rgb(32, 33, 36) 20px -20px 0px -2px') 

  return (
    <Container 
      bg={bg} 
      fontFamily="'Varela', sans-serif" 
      maxWidth='100%' 
      minHeight='100vh'
      padding={0} 
      transition='.3s ease-in-out'
    >
      <Stack 
        alignItems='center' 
        as='header' 
        bg='#121212' 
        color='whitesmoke' 
        direction='row' 
        fontWeight={500} 
        justifyContent='space-between' 
        padding={5} position='fixed'
        shadow='lg'
        width='100%'
        zIndex='3'
      >
        <Text
          _hover={{background: "whitesmoke", color: "#121212"}}
          cursor='pointer'
          padding={1.5}
          transition='.2s ease-in-out'
          
        >Emi Acerbi</Text>
        <Stack alignItems='center' as='nav' direction='row' justifyContent='center' spacing={10}>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Projects</Link>

          <IconButton 
            _hover={{bg: "darkgray"}}
            bg='whitesmoke'
            borderRadius='0'
            color='#121212'
            icon={icon}
            size='md'
            onClick={toggleColorMode}
          />

        </Stack>
      </Stack>

      <Stack 
        display='flex' 
        height='100vh' 
        justifyContent='center'       
        margin='0 auto'
        maxWidth='fit-content'
      >

        <Stack 
          _hover={{background: `#121212`, color: `whitesmoke`}}
          border={border} 
          boxShadow={shadow} 
          color={color} 
          cursor='pointer'
          fontSize='2xl'
          padding={10}
          position='relative'

          transition='.3s ease-in-out'
          zIndex='0'
        >
          <Heading fontFamily="'Varela', sans-serif" fontSize='5xl' fontWeight={400}>
            EMI ACERBI
          </Heading>
          <Heading fontFamily="'Varela', sans-serif" fontSize='5xl' fontWeight={400}>
            FRONTEND DEVELOPER
          </Heading>
        </Stack>

      </Stack>

      <Stack alignItems='center' bg={bg} boxShadow='md' color={color} height='100vh' justifyContent='center' spacing={20} transition='.3s ease-in-out'>

        <Stack spacing={10}>
          <Heading border={border} boxShadow={shortShadow} fontFamily="'Varela', sans-serif" fontWeight={400} margin='0 auto' maxWidth='fit-content' padding={5}>SOBRE MI </Heading>
          <Text fontSize='md' maxWidth='50ch' textAlign='center'>Soy de Buenos Aires, Argentina. Hace un tiempo, descubrí que me apasiona programar y desarrollar aplicaciones. Desde ese entonces, intento mejorar un poco cada día y volverme mejor que el anterior.</Text> 
        </Stack>

        <Stack spacing={10}>

          <Text border={borderSlim} boxShadow={veryShortShadow} fontFamily="'Varela', sans-serif" fontWeight={400} margin='0 auto' maxWidth='fit-content' padding={2} textAlign='center'>Tecnologías que manejo</Text>
          FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt 

          <Stack alignItems='center' direction='row' spacing={8}>
            <Icon 
              as={FaJs}
              h={10}
              w={10}
            />
            <Icon 
              as={FaReact}
              h={10}
              w={10}
              />
            <Icon 
              as={FaHtml5}
              h={10}
              w={10}
            />
            <Icon 
              as={FaCss3Alt}
              h={10}
              w={10}
            />
              <Icon 
                as={FaSass}
                h={10}
                w={10}
              />
            <Icon 
              as={FaGitAlt}
              h={10}
              w={10}
            />

          </Stack>
        </Stack>



      </Stack>

      <Stack 
        alignItems='center' 
        bg={bg} 
        color={color} 
        height='100vh' 
        justifyContent='center' 
        spacing={24} 
        transition='.3s ease-in-out'
      >
        <Heading bg={bg} border={border} boxShadow={shortShadow} color={color} fontFamily="'Varela', sans-serif" fontWeight={400} padding={5} transition='.3s ease-in-out'>PROYECTOS</Heading>
        <Stack direction='row' spacing={20}>
          <Box _hover={{bg: `${bg}`}} bg={bg} border={borderSlim} boxShadow={veryShortShadow} cursor='pointer' height='300px' width='200px'/>
          <Box _hover={{bg: `${bg}`}} bg={bg} border={borderSlim} boxShadow={veryShortShadow} cursor='pointer' height='300px' width='200px'/>
          <Box _hover={{bg: `${bg}`}} bg={bg} border={borderSlim} boxShadow={veryShortShadow} cursor='pointer' height='300px' width='200px'/>
        </Stack>
        <Button bg={bg} border={borderSlim} borderRadius='0' boxShadow={veryShortShadow} fontWeight={400}>Ver más</Button>

        {/* <Icon
          as={FaAirbnb}
        /> */}
      </Stack>

      <Stack alignItems='center' bg='#121212' boxShadow='lg' color='whitesmoke' direction='row' justifyContent='center' padding={8} spacing={8}>
        <Icon 
          _hover={{opacity: '.5'}}
          as={FaGithub}
          cursor='pointer'
          h={9}
          transition='.1s ease-in-out'
          w={9}
        />
        <Icon 
          _hover={{opacity: '.5'}}
          as={FaLinkedin}
          cursor='pointer'   
          h={9}
          w={9}       
        />

        <Icon 
          _hover={{opacity: '.5'}}
          as={FaEnvelope}
          cursor='pointer'   
          h={9}
          w={9}       
        />


      </Stack>

    </Container>
  )
}
