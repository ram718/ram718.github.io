import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import Myntra from "../Downloads/Myntra.png";
import Meesho from "../Downloads/Meesho.png";
import Bewakoof from "../Downloads/Bewakoof.png";
import Crate_Barrel from "../Downloads/Crate_Barrel.png";
import { Rotate, Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Box id="projects" p={10}>
      <Text fontWeight={"semibold"} fontSize={"2xl"}>
        My Projects
      </Text>
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        gap={1}
      >
        <Rotate cascade>
          <Box className="project-card" p={3} border="1px solid #F5D6BA">
            <Text p={2} className="project-title" fontWeight={"semibold"}>
              Crate&Barrel.com
            </Text>
            <Box>
              <Image src={Crate_Barrel}></Image>
            </Box>
            <Box>
              <Text className="project-description">
                Crate & Barrel offers a variety of "upmarket" housewares,
                furniture, and related merchandise. These are displayed in the
                "vignette" style, where items are grouped together as they might
                appear in the home. The company was an innovator of this style,
                which has since become more widely used.
              </Text>
              <Text
                className="project-tech-stack"
                fontWeight={"semibold"}
                marginTop={2}
              >
                React JS | HTML | CSS | Javascript | Chakra UI{" "}
              </Text>
              <Box>
                <Button
                  className="project-github-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a
                    href="https://github.com/ram718/crate-barrel"
                    target={"_blank"}
                  >
                    View Code
                  </a>
                </Button>
                <Button
                  className="project-deployed-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a
                    href="https://incandescent-kangaroo-1ba1cc.netlify.app/"
                    target={"_blank"}
                  >
                    Live
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
        </Rotate>

        <Rotate cascade>
          <Box className="project-card" p={3} border="1px solid #F5D6BA">
            <Text p={2} className="project-title" fontWeight={"semibold"}>
              Pacifico.com(Clone of Myntra.com)
            </Text>
            <Box>
              <Image src={Myntra}></Image>
            </Box>
            <Box>
              <Text className="project-description">
                Pacifico an online fashion retail platform inspired by Myntra
                used H&M api to get all clothes data of different category to
                sub-category.Online Shopping Site for Fashion & Lifestyle in
                India. India's Fashion Expert brings you a variety of footwear,
                Clothing, Accessories and lifestyle products
              </Text>
              <Text
                className="project-tech-stack"
                fontWeight={"semibold"}
                marginTop={2}
              >
                HTML | CSS | Javascript | JSON-server{" "}
              </Text>
              <Box>
                <Button
                  className="project-github-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a
                    href="https://github.com/ram718/Pacifico/tree/master"
                    target={"_blank"}
                  >
                    View Code
                  </a>
                </Button>
                <Button
                  className="project-deployed-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a
                    href="https://elaborate-melba-917bf4.netlify.app/"
                    target={"_blank"}
                  >
                    Live
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
        </Rotate>

        <Rotate cascade>
          <Box className="project-card" p={3} border="1px solid #F5D6BA">
            <Text p={2} className="project-title" fontWeight={"semibold"}>
              Boogy.com(Clone of Bewakoof.com)
            </Text>
            <Box>
              <Image src={Bewakoof}></Image>
            </Box>
            <Box>
              <Text className="project-description">
                Boogy is the fashion e-commerce startup that stands out from the
                rest. It offers a trendy collection of apparel based on dazzling
                and upbeat designs that resonate with the millennials.
              </Text>
              <Text
                className="project-tech-stack"
                fontWeight={"semibold"}
                marginTop={2}
              >
                React JS | HTML | CSS | Javascript | Redux | Chakra UI{" "}
              </Text>
              <Box marginTop={"4%"}>
                <Button
                  className="project-github-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a href="https://github.com/ram718/Boogy" target={"_blank"}>
                    View Code
                  </a>
                </Button>
                <Button
                  className="project-deployed-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a href="https://boogy-cw.vercel.app/" target={"_blank"}>
                    Live
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
        </Rotate>

        <Rotate cascade>
          <Box className="project-card" p={3} border="1px solid #F5D6BA">
            <Text p={2} className="project-title" fontWeight={"semibold"}>
              ShopVibes.com(Clone of meesho.com)
            </Text>
            <Box>
              <Image src={Meesho}></Image>
            </Box>
            <Box>
              <Text className="project-description">
                ShopVibes is a shopping and lifestyle brand which is the
                ultimate destination for the latest fashion styles that are
                handpicked and are available at the best price that one can find
                anywhere and also you can do business with shopvibes.com
              </Text>
              <Text
                className="project-tech-stack"
                fontWeight={"semibold"}
                marginTop={2}
              >
                React JS | HTML | CSS | Javascript | Redux | Chakra UI | Express
                JS | MongoDB | Mongoose{" "}
              </Text>
              <Box>
                <Button
                  className="project-github-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a
                    href="https://github.com/ram718/shopVibes"
                    target={"_blank"}
                  >
                    View Code
                  </a>
                </Button>
                <Button
                  className="project-deployed-link"
                  variant={"ghost"}
                  color="#F5D6BA"
                >
                  <a href="https://shopvibes.vercel.app/" target={"_blank"}>
                    Live
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
        </Rotate>
      </Box>
    </Box>
  );
};

export default Projects;
