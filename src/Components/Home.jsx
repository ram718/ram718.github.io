import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

// const pic = "https://drive.google.com/drive/u/0/folders/1NJbTLCejrIFe4_2r991BemsJs6z1SBxz";

const Home = () => {
  return (
    <div id="home">
      <Box>
        <Text
          fontSize={"2xl"}
          fontFamily={"Arial, Helvetica, sans-serif"}
          fontWeight="semibold"
          color={"white"}
          marginTop={"5%"}
        >
          <span>
            {" "}
            <Typewriter
              words={[
                "Hey there,👋 ",
                "I am Ram Sahith Terli",
                "MERN Full Stack Web Developer",
              ]}
              loop={500}
              cursor
              cursorStyle={"_"}
              typeSpeed={100}
              deleteSpeed={100}
            />
          </span>
        </Text>
        {/* <Image
          marginTop={"-7%"}
          w={"100%"}
          backgroundImage
          src="https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png"
        ></Image> */}
      </Box>
    </div>
  );
};

export default Home;
