import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import Ram_Sahith_Terli_resume from "../Downloads/Ram_Sahith_Terli_resume.pdf";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResume = () => {
    console.log("Hello");
    window.open(
      "https://drive.google.com/file/d/1pbgNVCLSoRtfSM5bWqsVY-izl1VNFtY6/view?usp=share_link",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <>
      <Box
        bg={useColorModeValue("#F5D6BA", "#2E282A")}
        color={"black"}
        px={4}
        id="nav-menu"
        maxW={"100%"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={"center"}>
            <Link to="#contact">
              <Text fontSize={{ md: "md", lg: "2xl" }} fontWeight="bold">
                Jogendra Phani Ram Sahith Terli
              </Text>
            </Link>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to="#home">
                <Button
                  // bg={useColorModeValue("#102542", "#183642")}
                  color={"black"}
                  className="nav-link home"
                  variant={"ghost"}
                >
                  Home
                </Button>
              </Link>
              <Link to="#about">
                <Button
                  // bg={useColorModeValue("#102542", "#183642")}
                  color={"black"}
                  className="nav-link about"
                  variant={"ghost"}
                >
                  About Me
                </Button>
              </Link>
              <Link to="#skills">
                <Button
                  // bg={useColorModeValue("#102542", "#183642")}
                  color={"black"}
                  className="nav-link skills"
                  variant={"ghost"}
                >
                  Skills
                </Button>
              </Link>
              <Link to="#projects">
                <Button
                  // bg={useColorModeValue("#102542", "#183642")}
                  color={"black"}
                  className="nav-link projects"
                  variant={"ghost"}
                >
                  Projects
                </Button>
              </Link>
              <Link to="#contact">
                <Button
                  // bg={useColorModeValue("#102542", "#183642")}
                  color={"black"}
                  className="nav-link contact"
                  variant={"ghost"}
                >
                  Contact
                </Button>
              </Link>

              <Button
                onClick={handleResume}
                id="resume-button-1"
                bg={useColorModeValue("#102542", "#F5D6BA")}
                color={"#fff"}
                _hover={{ color: "#F5D6BA" }}
              >
                <a
                  id="resume-link-1"
                  className="nav-link resume"
                  target={"_blank"}
                  href={Ram_Sahith_Terli_resume}
                  download="Ram_Sahith_Terli_resume.pdf"
                >
                  <DownloadIcon />
                  Resume
                </a>
              </Button>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="#home">
                <Button bg={"#183642"} color={"#fff"} className="nav-link home">
                  Home
                </Button>
              </Link>
              <Link to="#about">
                <Button
                  bg={"#183642"}
                  color={"#fff"}
                  className="nav-link about"
                >
                  About Me
                </Button>
              </Link>
              <Link to="#skills">
                <Button
                  bg={"#183642"}
                  color={"#fff"}
                  className="nav-link skills"
                >
                  Skills
                </Button>
              </Link>
              <Link to="#projects">
                <Button
                  bg={"#183642"}
                  color={"#fff"}
                  className="nav-link projects"
                >
                  Projects
                </Button>
              </Link>
              <Link to="#contact">
                <Button
                  bg={"#183642"}
                  color={"#fff"}
                  className="nav-link contact"
                >
                  Contact
                </Button>
              </Link>

              <Button
                onClick={handleResume}
                bg={"#183642"}
                color={"#F5D6BA"}
                id="resume-button-1"
              >
                <a
                  id="resume-link-1"
                  className="nav-link resume"
                  target={"_blank"}
                  href={Ram_Sahith_Terli_resume}
                  download="Ram_Sahith_Terli_resume.pdf"
                >
                  <DownloadIcon />
                  Resume
                </a>
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
