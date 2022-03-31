import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Hide, 
  Icon, 
  IconButton, 
  Image, 
  Link,
  Show,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import Head from "next/head";

import { FaCss3Alt, FaEnvelope, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLinkedin, FaReact, FaSass} from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { SiChakraui } from "react-icons/si";

import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons'
import { useRef, useState } from "react";

export default function Home() {

  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)
  const mobileMenu = isMobileMenuShown ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)'

  // For Gmail
  const toast = useToast()
  
  // Scroll functions

  const aboutSection = useRef()
  const projectSection = useRef()
  const contactSection = useRef()

  const scrollToTop = () =>{
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  };
  
  const scrollToAbout = () =>{
    aboutSection.current.scrollIntoView({behavior: 'smooth'});
  };
  
  const scrollToProjects = () =>{
    projectSection.current.scrollIntoView({behavior: 'smooth'})
  };

  const scrollToContact = () =>{
    contactSection.current.scrollIntoView({behavior: 'smooth'})
  };

  // Dark / Light Mode variables

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
    'rgb(32, 33, 36) 10px -10px 0px -4px, rgb(245, 245, 245) 10px -10px, rgb(32, 33, 36) 20px -20px 0px -4px, rgb(245, 245, 245) 20px -20px'
  )
  const shortShadow = useColorModeValue(
    'rgb(245, 245, 245) 10px -10px 0px -3px, rgb(0, 0, 0) 10px -10px',
    'rgb(32, 33, 36) 10px -10px 0px -3px, rgb(245, 245, 245) 10px -10px'
  ) 
  const veryShortShadow = useColorModeValue(
    'rgb(245, 245, 245) 10px -10px 0px -2px, rgb(0, 0, 0) 10px -10px, rgb(245, 245, 245) 20px -20px 0px -2px',
    'rgb(32, 33, 36) 10px -10px 0px -2px, rgb(245, 245, 245) 10px -10px, rgb(32, 33, 36) 20px -20px 0px -2px'
  ) 

  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
      </Head>
      <Container 
        bg={bg} 
        fontFamily="'IBM Plex Mono', monospace" 
        maxWidth='100%' 
        minHeight='100vh'
        padding={0} 
        transition='.3s ease-in-out'
      >



        {/* Header */}
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
              padding={1.5}
              transition='.2s ease-in-out'
            >
              Emi Acerbi
            </Text>

            {/* Mobile Menu */}
            <Hide breakpoint="(min-width: 599px)">

              <IconButton 
                _hover={{bg: {bg}, color: {bgHover}}}
                bg={bgHover}
                borderRadius='0'
                bottom='5'
                color={colorHover}
                icon={icon}
                marginLeft='auto !important'
                position='fixed'
                right='5%'
                size='md'
                onClick={toggleColorMode}
              />

              <HamburgerIcon 
                cursor='pointer'
                h={6}
                w={6}
                onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
              />


              <Stack 
                alignItems='center'
                as='nav'
                bg='#121212'
                borderRadius='.5rem' 
                boxShadow='xl' 
                direction='column' 
                display='flex' 
                flexDirection='column'
                justifyContent='center'
                left='50%'
                margin='0 !important'
                minWidth='75%'
                padding={14}
                position='absolute'
                spacing={8}
                top='100px'
                transform={mobileMenu}
                transition='.2s ease-in-out'
              >
                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}}
                  as='a'
                  border= '1px solid whitesmoke' 
                  cursor='pointer'
                  padding={1}
                  textAlign='center'
                  transition='.3s ease-in-out'
                  width='100%'
                  onClick={scrollToTop}
                >
                  Home
                </Link>

                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}} 
                  border= '1px solid whitesmoke' 
                  padding={1}
                  textAlign='center'
                  width='100%'
                  onClick={scrollToAbout}
                >
                  About
                </Link>

                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}}
                  border='1px solid whitesmoke' 
                  padding={1} 
                  textAlign='center'
                  width='100%'
                  onClick={scrollToProjects}
                >
                  Projects
                </Link>

                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}}
                  border='1px solid whitesmoke' 
                  padding={1} 
                  textAlign='center'
                  width='100%'
                  onClick={scrollToContact}
                >
                  Contact
                </Link>



              </Stack>


            </Hide>

            {/* Wide res Menu */}
            <Show breakpoint="(min-width: 600px">
              <Stack alignItems='center' as='nav' direction='row' justifyContent='center'  spacing={10}>
                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}}
                  as='a'
                  bg='transparent' 
                  cursor='pointer'
                  padding={1}
                  transition='.3s ease-in-out'
                  onClick={scrollToTop}
                >
                  Home
                </Link>

                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}} 
                  padding={1} 
                  onClick={scrollToAbout}
                >
                  About
                </Link>

                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}}
                  padding={1} 
                  onClick={scrollToProjects} 
                >
                  Projects
                </Link>

                <Link 
                  _hover={{bg: "whitesmoke", color: "#121212"}}
                  padding={1} 
                  onClick={scrollToContact} 
                >
                  Contact
                </Link>

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

            </Show>
          </Stack>


        {/* Hero */}
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
          >
            <Heading fontFamily="'IBM Plex Mono', monospace" fontSize={['4xl', '4xl', '4xl', '5xl']} fontWeight={400}>
              EMI ACERBI
            </Heading>
            <Heading fontFamily="'IBM Plex Mono', monospace" fontSize={['4xl', '4xl', '4xl', '5xl']} fontWeight={400}>
              FRONTEND DEVELOPER
            </Heading>
          </Stack>

        </Stack>



        <Stack 
          ref={aboutSection} 
          alignItems='center' 
          bg={bg} 
          // bg='red'
          color={color} 
          height='100vh' 
          href={aboutSection} 
          justifyContent='center'
          paddingX={5}
          spacing={20}
          transition='.3s ease-in-out'
        >
        <Stack alignItems='center' direction={['column', 'column', 'column', 'row']}  
          spacing={40} 
        
        >
          <Stack spacing={10}>
            <Heading 
              border={borderSlim} 
              boxShadow={shortShadow} 
              fontFamily="'IBM Plex Mono', monospace" 
              fontWeight={400} 
              margin={['0 auto', '0 auto', '0 auto', '0' ]} 
              maxWidth='fit-content'
              padding={5} 
              transition='.2s ease-in-out'
              >ABOUT ME </Heading>
            <Text fontSize='md' maxWidth='50ch' textAlign={['center', 'center', 'center', 'left']}>
              {`I'm from Buenos Aires, Argentina. Some time ago, I discovered my love for programming and developing web applications. Since then, I try everyday to get a little bit better as a developer than the day before. `}
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
                  cursor='pointer'
                  h={10}
                  w={10}
                  onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")}
                />

                <Icon 
                  _hover={{opacity:'.5'}}
                  as={FaReact}
                  cursor='pointer'
                  h={10}
                  w={10}
                  onClick={()=> window.open("https://reactjs.org/", "_blank")}
                />

                <Icon 
                  _hover={{opacity:'.5'}}
                  as={SiChakraui}
                  cursor='pointer'
                  h={10}
                  w={10}
                  onClick={()=> window.open("https://chakra-ui.com/", "_blank")}
                />

              </Stack>
                <Stack direction='row' spacing={5}>
                  <Icon 
                    _hover={{opacity:'.5'}}
                    as={FaHtml5}
                    cursor='pointer'
                    h={10}
                    w={10}
                    onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank")}
                  />

                  <Icon 
                    _hover={{opacity:'.5'}}
                    as={FaCss3Alt}
                    cursor='pointer'
                    h={10}
                    w={10}
                    onClick={()=> window.open("https://developer.mozilla.org/es/docs/Web/CSS", "_blank")}
                  />

                  <Icon 
                    _hover={{opacity:'.5'}}
                    as={FaSass}
                    cursor='pointer'
                    h={10}
                    w={10}
                    onClick={()=> window.open("https://sass-lang.com/", "_blank")}
                  />

                  <Icon 
                    _hover={{opacity:'.5'}}
                    as={FaGitAlt}
                    cursor='pointer'
                    h={10}
                    w={10}
                    onClick={()=> window.open("https://git-scm.com/", "_blank")}
                  />

                </Stack>

              </Stack>
            </Stack>

          </Stack>

        </Stack>

        {/* Proyectos */}
        <Stack 
          ref={projectSection} 
          alignItems='center' 
          bg={bg} 
          color={color} 
          justifyContent='center' 
          minHeight='100vh' 
          paddingBottom='8rem' 
          paddingTop='5rem' 
          // paddingY={10}
          paddingX={5}
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
            <Button 
              _hover={{bg:`${bgHover}`, color: `${colorHover}`}} 
              bg={bg} 
              border={borderVerySlim} 
              borderRadius='0' 
              fontWeight={400} 
              transition='.3s background ease-in-out'
              onClick={()=> window.open("https://github.com/emiacerbi", "_blank")}
            >
              See more
            </Button>
          </Stack>

          <Stack direction={['column', 'column', 'column', 'row']} spacing={[10, 10, 10, 20]}>
            <Stack spacing={5}>
              <Box 
              _hover={{ 
                bg: `${bgHover}`,
                boxShadow: `${shortShadow}` ,
                color: `${colorHover}`
              }} 
                bg={bg} 
                border={borderSlim} 
                cursor='pointer' display='flex'
                height='150px'
                position='relative'
                transition='.3s ease-in-out'
                width='250px'
                onClick={()=> window.open("https://emiacerbi.github.io/blogr-landing-page/", "_blank")}
              >

                <Text alignSelf='center' fontSize='2xl' textAlign='center'>Blogr landing page</Text>
              </Box>

              <Button 
                _hover={{bg:`${bgHover}`, color: `${colorHover}`}} 
                bg={bg} 
                border={borderVerySlim} 
                borderRadius='0' 
                fontWeight={400} 
                transition='.3s background ease-in-out' 
                onClick={()=> window.open("https://github.com/emiacerbi/blogr-landing-page")}>
                  Repositorio
              </Button>
            </Stack>

            <Stack spacing={5}>
            <Box 
                _hover={{ 
                  bg: `${bgHover}`,
                  boxShadow: `${shortShadow}` ,
                  color: `${colorHover}`
                }} 
                  bg={bg} 
                  border={borderSlim} 
                  cursor='pointer' display='flex'
                  height='150px'
                  position='relative'
                  transition='.3s ease-in-out'
                  width='250px'
                  onClick={()=> window.open("https://emiacerbi.github.io/crowdfunding-product-page/")}
                  >

                  <Text alignSelf='center' fontSize='2xl' textAlign='center'>Crowdfunding product page</Text>
                  
              </Box>
              <Button _hover={{bg:`${bgHover}`, color: `${colorHover}`}} bg={bg} border={borderVerySlim} borderRadius='0' fontWeight={400} transition='.3s background ease-in-out' onClick={()=> window.open("https://github.com/emiacerbi/crowdfunding-product-page")}>Repositorio</Button>
            </Stack>

            <Stack spacing={5}>
            <Box 
                _hover={{ 
                  bg: `${bgHover}`,
                  boxShadow: `${shortShadow}` ,
                  color: `${colorHover}`
                }} 
                  bg={bg} 
                  border={borderSlim} 
                  cursor='pointer' display='flex'
                  height='150px'
                  position='relative'
                  transition='.3s ease-in-out'
                  width='250px'
                  onClick={()=> window.open("https://emiacerbi.github.io/social-media-dashboard/")}
                >
                
                <Text alignSelf='center' fontSize='2xl' margin='0 auto' textAlign='center' width='10ch'>Social Media Dashboard</Text>

              </Box>
              <Button 
                _hover={{bg:`${bgHover}`, color: `${colorHover}`}} 
                bg={bg} 
                border={borderVerySlim} 
                borderRadius='0' 
                fontWeight={400} 
                transition='.3s background ease-in-out'
                onClick={()=> window.open("https://github.com/emiacerbi/social-media-dashboard")}
              >
                Repositorio
              </Button>
            </Stack>

          </Stack>
        </Stack>


        {/* Footer */}
        <Stack 
          ref={contactSection} 
          alignItems='center' 
          bg='#121212' 
          boxShadow='lg' 
          color='whitesmoke' 
          direction='row' 
          justifyContent='center' 
          padding={8}
          spacing={8}
        >
          <Icon 
            _hover={{opacity: '.5'}}
            as={FaGithub}
            cursor='pointer'
            h={9}
            transition='.1s ease-in-out'
            w={9}
            onClick={()=> window.open("https://github.com/emiacerbi", "_blank")}
            />

          <Icon 
            _hover={{opacity: '.5'}}
            as={FaLinkedin}
            cursor='pointer'   
            h={9}
            w={9}       
            onClick={()=> window.open("https://www.linkedin.com/in/emiliano-acerbi-7a7141235/", "_blank")}
          />
          <Stack alignItems='center' direction='row' spacing={3}>
          
            <Icon 
              _hover={{opacity: '.5'}}
              as={FaEnvelope}
              cursor='pointer'
              h={9}   
              justifySelf='flex-end'
              w={9}    
              onClick={() =>
                toast({
                  description: "eacerbip@gmail.com.",
                  duration: 9000,
                  isClosable: true,
                  position: 'bottom-right',
                  status: 'info',
                  variant: 'subtle',
                  // title: 'Account created.',
                })
              }   
            /> 
        
          </Stack>

        </Stack>

      </Container>
    </>
  )
}
