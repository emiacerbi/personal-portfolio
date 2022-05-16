import { Hide, IconButton, Link, Show, Stack, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

export const Header = () => {
  return (
    <>
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
    </>
  )
}
