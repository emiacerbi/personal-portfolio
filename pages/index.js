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
import { BsSunFill } from "react-icons/bs";
import { SiChakraui } from "react-icons/si";

import { MoonIcon } from '@chakra-ui/icons'

export default function Home() {

  
  const scrollToTop = () =>{
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  };
  
  const scrollToAbout = () =>{
    window.scrollTo({
      behavior: 'smooth',
      top: 929
    });
  };
  
  const scrollToProjects = () =>{
    window.scrollTo({
      behavior: 'smooth',
      top: 1922
    });
  };

  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('whitesmoke', '#202124')
  const color = useColorModeValue('#202124', 'whitesmoke')
  const bgHover = useColorModeValue('#202124', 'whitesmoke')
  const colorHover = useColorModeValue('whitesmoke', '#202124')
  const border = useColorModeValue('4px solid #202124' , '4px solid whitesmoke')
  const borderSlim = useColorModeValue('3px solid #202124' , '3px solid whitesmoke')
  const borderVerySlim = useColorModeValue('2px solid #202124' , '2px solid whitesmoke')
  const icon = useColorModeValue(<MoonIcon />, <BsSunFill />)

  const shadow = useColorModeValue(
    'rgb(245, 245, 245) 10px -10px 0px -4px, rgb(0, 0, 0) 10px -10px',
    'rgb(32, 33, 36) 10px -10px 0px -4px, rgb(245, 245, 245) 10px -10px'
  ) 
  const shadowHover = useColorModeValue(
    'rgb(245, 245, 245) 10px -10px 0px -4px, rgb(0, 0, 0) 10px -10px , rgb(245, 245, 245) 20px -20px 0px -4px, rgb(0, 0, 0) 20px -20px',
  'rgb(32, 33, 36) 10px -10px 0px -4px, rgb(245, 245, 245) 10px -10px, rgb(32, 33, 36) 20px -20px 0px -4px, rgb(245, 245, 245) 20px -20px')
  const shortShadow = useColorModeValue(
    'rgb(245, 245, 245) 10px -10px 0px -3px, rgb(0, 0, 0) 10px -10px',
    'rgb(32, 33, 36) 10px -10px 0px -3px, rgb(245, 245, 245) 10px -10px') 
  const veryShortShadow = useColorModeValue(
    'rgb(245, 245, 245) 10px -10px 0px -2px, rgb(0, 0, 0) 10px -10px, rgb(245, 245, 245) 20px -20px 0px -2px',
  'rgb(32, 33, 36) 10px -10px 0px -2px, rgb(245, 245, 245) 10px -10px, rgb(32, 33, 36) 20px -20px 0px -2px') 

  return (
    <Container 
      bg={bg} 
      fontFamily="'IBM Plex Mono', monospace" 
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
        padding={5} paddingX={9}
        position='fixed'
        shadow='lg'
        width='100%'
        zIndex='3'
        
      >
        <Text
          _hover={{background: "whitesmoke", color: "#121212"}}
          cursor='pointer'
          padding={1.5}
          transition='.2s ease-in-out'
        >
          Emi Acerbi
        </Text>

        <Stack alignItems='center' as='nav' direction='row' justifyContent='center'  spacing={10}>
          <Link 
            _hover={{bg: "whitesmoke", color: "#121212"}}
            as='a' 
            padding={1}
            transition='.3s ease-in-out'
            onClick={scrollToTop}
          >
            Home</Link>
          <Link 
            _hover={{bg: "whitesmoke", color: "#121212"}} 
            padding={1} 
            onClick={scrollToAbout}
          >About</Link>
          <Link 
            _hover={{bg: "whitesmoke", color: "#121212"}}
            padding={1} 
            onClick={scrollToProjects} 
          >Projects</Link>

          <IconButton 
            _hover={{bg: "whitesmoke", color: "#121212"}}
            bg='transparent'
            borderRadius='0'
            // color='#121212'
            color='whitesmoke'
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
        paddingX={5}
      >

        <Stack 
          _hover={{background: `${bgHover}`, boxShadow: `${shadowHover}`, color: `${colorHover}`}}
          border={border} 
          boxShadow={shadow} 
          color={color}
          cursor='pointer'
          fontSize='2xl'
          padding={10}
          position='relative'
          transition='.3s ease-in-out'
          zIndex='0'
          onClick={scrollToAbout}
        >
          <Heading fontFamily="'IBM Plex Mono', monospace" fontSize={['4xl', '4xl', '4xl', '5xl']} fontWeight={400}>
            EMI ACERBI
          </Heading>
          <Heading fontFamily="'IBM Plex Mono', monospace" fontSize={['4xl', '4xl', '4xl', '5xl']} fontWeight={400}>
            FRONTEND DEVELOPER
          </Heading>
        </Stack>

      </Stack>

      {/* Sobre mi */}
      <Stack alignItems='center' bg={bg} color={color} height='100vh' justifyContent='center' paddingX={5} spacing={20} transition='.3s ease-in-out'>


      <Stack alignItems='center' direction={['column', 'column', 'column', 'row']} spacing={40} >
        <Stack spacing={10}>
          <Heading 
            border={borderSlim} 
            boxShadow={shortShadow} 
            fontFamily="'IBM Plex Mono', monospace" 
            fontWeight={400} 
            margin={['0 auto', '0 auto', '0 auto', '0' ]} 
            maxWidth='fit-content'
            padding={5} 
            transition='.3s ease-in-out'
            >ABOUT ME </Heading>
          <Text fontSize='md' maxWidth='50ch' textAlign={['center', 'center', 'center', 'left']}>
            Soy de Buenos Aires, Argentina. Hace un tiempo, descubrí que me apasiona programar y desarrollar aplicaciones. Desde ese entonces, intento mejorar un poco cada día y volverme mejor que el anterior.
          </Text> 
        </Stack>

        <Stack spacing={10}>

          <Text border={borderVerySlim} boxShadow={veryShortShadow} fontWeight={500} margin='0 auto' maxWidth='fit-content' padding={2} textAlign='center' transition='.3s ease-in-out'>Technologies I use</Text>
          FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt 

          <Stack alignItems='center'  direction='column' minWidth='300px' spacing={8}>
            <Stack direction='row' spacing={5}>
              <Icon 
                _hover={{opacity:'.5'}}
                as={FaJs}
                h={10}
                w={10}
              />
              <Icon 
                _hover={{opacity:'.5'}}
                as={FaReact}
                h={10}
                w={10}
              />

              <Icon 
                _hover={{opacity:'.5'}}
                as={SiChakraui}
                h={10}
                w={10}
              />
            </Stack>
            <Stack direction='row' spacing={5}>
              <Icon 
                _hover={{opacity:'.5'}}
                as={FaHtml5}
                h={10}
                w={10}
              />
              <Icon 
                _hover={{opacity:'.5'}}
                as={FaCss3Alt}
                h={10}
                w={10}
              />
                <Icon 
                _hover={{opacity:'.5'}}
                  as={FaSass}
                  h={10}
                  w={10}
                />
              <Icon 
                _hover={{opacity:'.5'}}
                as={FaGitAlt}
                h={10}
                w={10}
              />

            </Stack>

          </Stack>
        </Stack>


      </Stack>

      </Stack>

      {/* Proyectos */}
      <Stack 
        alignItems='center' 
        bg={bg} 
        color={color} 
        justifyContent='center' 
        minHeight='100vh' 
        paddingX={5} 
        paddingY={10} 
        spacing={24}
        transition='.3s ease-in-out'
      >
        <Stack alignItems='center' direction={['column', 'column', 'column', 'row']} spacing={[10, 10, 10, 20]}>
          <Heading 
            bg={bg} 
            border={borderSlim} 
            boxShadow={shortShadow} 
            color={color} 
            fontFamily="'IBM Plex Mono', monospace" 
            fontWeight={400} 
            padding={5} 
            transition='.3s ease-in-out'>
              PROJECTS
          </Heading>
          <Button _hover={{bg:`${bgHover}`, color: `${colorHover}`}} bg={bg} border={borderVerySlim} borderRadius='0' fontWeight={400} transition='.3s background ease-in-out'>See more</Button>
        </Stack>

        <Stack direction={['column', 'column', 'column', 'row']} spacing={[10, 10, 10, 20]}>
          <Stack spacing={5}>
              <Box 
                _hover={{ bg: `${bg}`, boxShadow: `${shortShadow}` }} 
                bg={bg} 
                border={borderSlim} 
                cursor='pointer' height='350px'
                transition='.3s ease-in-out'
                width='250px'
              >
                <Image 
                  // _hover={{src: "screenshotMobile2.png"}}
                  alt="mountain"
                  height='100%'
                  objectFit='cover'
                  src="screenshotMobile2.png"
                />
              </Box>
              <Button _hover={{bg:`${bgHover}`, color: `${colorHover}`}} bg={bg} border={borderVerySlim} borderRadius='0' fontWeight={400} transition='.3s background ease-in-out'>Repositorio</Button>
          </Stack>

          <Stack spacing={5}>
            <Box 
              _hover={{ bg: `${bg}`, boxShadow: `${shortShadow}` }} 
              bg={bg} 
              border={borderSlim} 
              cursor='pointer' height='350px'
              transition='.3s ease-in-out'
              width='250px'
            >
              <Image 
                alt="mountain"
                height='100%'
                objectFit='contain'
                src="screenshotMobile.png"
              />
            </Box>
            <Button _hover={{bg:`${bgHover}`, color: `${colorHover}`}} bg={bg} border={borderVerySlim} borderRadius='0' fontWeight={400} transition='.3s background ease-in-out'>Repositorio</Button>
          </Stack>

          <Stack spacing={5}>
            <Box 
              _hover={{ bg: `${bg}`, boxShadow: `${shortShadow}` }} 
              bg={bg} 
              border={borderSlim} 
              cursor='pointer' height='350px'
              transition='.3s ease-in-out'
              width='250px'
            >
              <Image 
                alt="mountain"
                height='100%'
                objectFit='cover'
                src="screenshotMobile3.png"
              />
            </Box>
            <Button _hover={{bg:`${bgHover}`, color: `${colorHover}`}} bg={bg} border={borderVerySlim} borderRadius='0' fontWeight={400} transition='.3s background ease-in-out'>Repositorio</Button>
          </Stack>

        </Stack>
      </Stack>


      {/* Footer */}
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
