import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, DownloadIcon } from '@chakra-ui/icons';



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  

  

  return (
    <>
      <Box bg={useColorModeValue('#102542', '#2E282A')} color={"whiteAlpha.900"} px={4} id="nav-menu" maxW={"100%"}>
        
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={'center'}>
            <Text fontSize={'2xl'} fontWeight="bold">Jogendra Phani Ram Sahith Terli</Text>
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button bg={useColorModeValue('#102542', '#183642')} id='home'>Home</Button>
              <Button bg={useColorModeValue('#102542', '#183642')} id='about' className='about section'>About Me</Button>
              <Button bg={useColorModeValue('#102542', '#183642')} id='skills'>Skills</Button>
              <Button bg={useColorModeValue('#102542', '#183642')} id='projects'>Projects</Button>
              <Button bg={useColorModeValue('#102542', '#183642')} id='contact'>Contact</Button>
              <a href="https://drive.google.com/file/d/11Rlp5ItKoUGhekEUzfDMKbSRukIE_ESL/view?usp=share_link"><Button
                bgColor={"#F5D6BA"}
                color={"black"}
                variant={'solid'}
                size={'sm'}
                mr={4}
                
                leftIcon={<DownloadIcon />}>
                Resume
              </Button></a>
            </HStack>
          </HStack>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Button bg={"#183642"} id='home'>Home</Button>
              <Button bg={"#183642"} id='about' className='about section'>About Me</Button>
              <Button bg={"#183642"} id='skills'>Skills</Button>
              <Button bg={"#183642"} id='projects'>Projects</Button>
              <Button bg={"#183642"} id='contact'>Contact</Button>
              <a href="https://drive.google.com/file/d/11Rlp5ItKoUGhekEUzfDMKbSRukIE_ESL/view?usp=share_link"><Button
                variant={'solid'}
                bgColor={'#F5D6BA'}
                color={"black"}
                size={'sm'}
                mr={4}
                
                leftIcon={<DownloadIcon />}>
                Resume
              </Button></a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}