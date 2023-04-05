import { Box, Flex, Image, Text, Button, Center } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { DownloadIcon } from "@chakra-ui/icons";
import Ram_Sahith_Terli_resume from "../Downloads/Ram_Sahith_Terli_resume.pdf";
import ProPic from "../Downloads/ProPic.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { AttentionSeeker } from "react-awesome-reveal";

const About = () => {
  AOS.init({
    offset: 100,
    duration: 1000,
  });

  const handleResume = () => {
    // console.log("Hello");
    window.open(
      "https://drive.google.com/file/d/1pbgNVCLSoRtfSM5bWqsVY-izl1VNFtY6/view?usp=share_link",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <div
      id="about"
      className="about section"
      style={{ marginBottom: "3%" }}
      data-aos="flip-left"
    >
      <Box>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          About Me
        </Text>
        <Box
          display={{ lg: "flex" }}
          style={{ marginTop: "5%", justifyContent: "space-evenly" }}
        >
          <Center>
            <Image
              className="home-img"
              src={ProPic}
              alt="Profile pic"
              width={200}
              borderRadius="10%"
            ></Image>
          </Center>
          <Center>
            <Box maxW={{ base: 300, md: 400, lg: 500 }}>
              <AttentionSeeker effect="shake">
                <Text
                  id="user-detail-name"
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  fontWeight={"semibold"}
                  textAlign={{ base: "center", lg: "center" }}
                >
                  I am Jogendra Phani Ram Sahith Terli
                </Text>
                {/* <br />
              <Text>MERN Full Stack Web Developer</Text> */}
                <br />
                <Text
                  id="user-detail-intro"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  An aspiring MERN Full Stack Web Developer,ready to
                  work.Passionate to code and capable of writing
                  production-ready code using React, HTML, CSS for the front end
                  and JS and MongoDB for the back end. Always up for a
                  challenge, interested in learning new languages and
                  frameworks.
                </Text>
                <br />
                <Button
                  onClick={handleResume}
                  id="resume-button-2"
                  fontFamily={"sans-serif"}
                  bg={"#F5D6BA"}
                  color={"black"}
                  my={2}
                  _hover={{
                    transform: "translateY(2px)",
                  }}
                >
                  <a
                    id="resume-link-2"
                    target={"_blank"}
                    href={Ram_Sahith_Terli_resume}
                    download="Ram_Sahith_Terli_resume.pdf"
                  >
                    <DownloadIcon />
                    Resume
                  </a>
                </Button>
              </AttentionSeeker>
              <br />
            </Box>
          </Center>
        </Box>
      </Box>
    </div>
  );
};

export default About;
