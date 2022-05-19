import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Hide, 
  Icon, 
  IconButton, 
  Link,
  Show,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";


import Head from "next/head";

import { FaCss3Alt, FaEnvelope, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLinkedin, FaReact, FaSass} from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

import { useRef, useState } from "react";
import { Header } from "../components/header";

export default function Home() {

  // For Gmail
  const toast = useToast()
  
  // Scroll functions

  const aboutSection = useRef()
  const projectSection = useRef()
  const contactSection = useRef()

  const scrollToAbout = () =>{
    aboutSection.current.scrollIntoView({behavior: 'smooth'});
  };

  // Dark / Light Mode variables

  const { toggleColorMode } = useColorMode()

  const lightDark = useColorModeValue('whitesmoke', '#202124')
  const Darklight = useColorModeValue('#202124', 'whitesmoke')
  const border = useColorModeValue('4px solid #202124' , '4px solid whitesmoke')
  const borderSlim = useColorModeValue('3px solid #202124' , '3px solid whitesmoke')
  const borderVerySlim = useColorModeValue('2px solid #202124' , '2px solid whitesmoke')

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

  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
      </Head>
      <Container 
        bg={lightDark} 
        fontFamily="'IBM Plex Mono', monospace" 
        maxWidth='100%' 
        minHeight='100vh'
        padding={0} 
        transition='.3s ease-in-out'
      >

        <Box 
          sx={{
            '&::-webkit-scrollbar': {
              width: '10px'
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#CBCBCB',
              border: ".1px solid #B7B7B7",
              outline: '2px solid #FFF',
              outlineOffset: '-2px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#909090',
            },
            '&::-webkit-scrollbar-track-piece': {
              backgroundColor: '#FFF',
            },
          }}
        />

        

        <Header 
          aboutSection={aboutSection}
          contactSection={contactSection}
          Darklight={Darklight}
          lightDark={lightDark}
          projectSection={projectSection}
          toggleColorMode={toggleColorMode}
        />


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
            _hover={{background: `${Darklight}`, boxShadow: `${shadowHover}`, color: `${lightDark}`}} 
            border={border} 
            boxShadow={shadow}
            color={Darklight}
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



        <Stack 
          ref={aboutSection} 
          alignItems='center' 
          bg={lightDark} 
          color={Darklight} 
          height='100vh' 
          href={aboutSection} 
          justifyContent='center'
          paddingX={5}
          spacing={20}
          transition='.3s ease-in-out'
        >
        <Stack alignItems='center' direction={['column', 'column', 'column', 'column']}  
          spacing={20} 
        
        >
          <Stack gap={3}>
            <Heading 
              border={borderSlim} 
              boxShadow={shortShadow} 
              fontFamily="'IBM Plex Mono', monospace" 
              fontWeight={400} 
              margin={['0 auto 2rem !important' ]} 
              maxWidth='fit-content'
              padding={5}
              transition='.2s ease-in-out'
              >ABOUT ME </Heading>
            <Text fontSize='lg' maxWidth='55ch' textAlign={['center']}>
              {`I'm from Buenos Aires, Argentina. Since I discovered my love for programming and developing web applications, I dedicate myself to get a little bit better everyday. `} 
            </Text> 
            <Text fontSize='lg' maxWidth='55ch' textAlign={['center']}>
              {`I build clean, user-friendly websites and applications that look good, so if you need help in your project, don't hesitate to reach out.  `}
            </Text> 
          </Stack>

          <Stack spacing={10}>

            <Text border={borderVerySlim}  fontSize='lg' fontWeight={400} margin='0 auto' maxWidth='fit-content' padding={2} textAlign='center' transition='.3s ease-in-out'>Technologies I use</Text>
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
          bg={lightDark} 
          color={Darklight} 
          justifyContent='center' 
          minHeight='100vh' 
          paddingBottom='8rem' 
          paddingTop='5rem' 
          // paddingY={10}
          paddingX={5}
          spacing={24}
          transition='.3s ease-in-out'
        >
          <Stack>
            <Heading 
              bg={lightDark} 
              border={borderSlim} 
              boxShadow={shortShadow} 
              color={Darklight} 
              fontFamily="'IBM Plex Mono', monospace" 
              fontWeight={400} 
              padding={5} 
              transition='.3s ease-in-out'>
                PROJECTS
            </Heading>

          </Stack>

          

          <Stack direction={['column', 'column', 'column', 'column', 'row']} spacing={[10, 10, 10, 10, 20]}>

            <Stack spacing={5}>
              <Box 
                _hover={{ 
                  bg: `${Darklight}`,
                  boxShadow: `${shortShadow}` ,
                  color: `${lightDark}`
                }} 
                  bg={lightDark} 
                  border={borderSlim} 
                  cursor='pointer' display='flex'
                  height='150px'
                  position='relative'
                  transition='.3s ease-in-out'
                  width='250px'
                  onClick={()=> window.open("https://emiacerbi-aerolab-challenge.vercel.app/")}
                >
                
                <Text alignSelf='center' fontSize='2xl' margin='0 auto' textAlign='center' width='10ch'>Aerolab Challenge</Text>

              </Box>
              <Button 
                _hover={{bg:`${Darklight}`, color: `${lightDark}`}} 
                bg={lightDark} 
                border={borderVerySlim} 
                borderRadius='0' 
                fontWeight={400} 
                transition='.3s background ease-in-out'
                onClick={()=> window.open("https://github.com/emiacerbi/aerolab-challenge")}
              >
                Repositorio
              </Button>
            </Stack>


            <Stack spacing={5}>
              <Box 
              _hover={{ 
                bg: `${Darklight}`,
                boxShadow: `${shortShadow}` ,
                color: `${lightDark}`
              }} 
                bg={lightDark} 
                border={borderSlim} 
                cursor='pointer' display='flex'
                height='150px'
                position='relative'
                transition='.3s ease-in-out'
                width='250px'
                onClick={()=> window.open("https://emiacerbi-countries.vercel.app/", "_blank")}
              >

                <Text alignSelf='center' fontSize='2xl' margin='0 auto' textAlign='center'>Countries API</Text>
              </Box>

              <Button 
                _hover={{bg:`${Darklight}`, color: `${lightDark}`}} 
                bg={lightDark} 
                border={borderVerySlim} 
                borderRadius='0' 
                fontWeight={400} 
                transition='.3s background ease-in-out' 
                onClick={()=> window.open("https://github.com/emiacerbi/countries-api")}>
                  Repositorio
              </Button>
            </Stack>

            <Stack spacing={5}>
            <Box 
                _hover={{ 
                  bg: `${Darklight}`,
                  boxShadow: `${shortShadow}` ,
                  color: `${lightDark}`
                }} 
                  bg={lightDark} 
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
              <Button _hover={{bg:`${Darklight}`, color: `${lightDark}`}} bg={lightDark} border={borderVerySlim} borderRadius='0' fontWeight={400} transition='.3s background ease-in-out' onClick={()=> window.open("https://github.com/emiacerbi/crowdfunding-product-page")}>Repositorio</Button>
            </Stack>

          <Stack spacing={5}>
            <Box 
                _hover={{ 
                  bg: `${Darklight}`,
                  boxShadow: `${shortShadow}` ,
                  color: `${lightDark}`
                }} 
                  bg={lightDark} 
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
              _hover={{bg:`${Darklight}`, color: `${lightDark}`}} 
              bg={lightDark} 
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
          <Button 
              _hover={{bg:`${Darklight}`, color: `${lightDark}`}} 
              bg={lightDark} 
              border={borderVerySlim} 
              borderRadius='0' 
              fontWeight={400} 
              transition='.3s background ease-in-out'
              onClick={()=> window.open("https://github.com/emiacerbi", "_blank")}
            >
              See more
          </Button>
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
                })
              }   
            /> 
          </Stack>
        </Stack>

      </Container>
    </>
  )
}
