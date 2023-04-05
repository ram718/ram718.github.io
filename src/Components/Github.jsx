import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Zoom } from "react-awesome-reveal";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <Zoom>
      <Box p={8}>
        <Text fontSize={"2xl"} fontWeight={"bold"} marginBottom={"1%"}>
          Github Stats
        </Text>
        <Center marginBottom={"3%"}>
          <GitHubCalendar id="react-activity-calendar" username="ram718" />
        </Center>

        <Center>
          <Box gap={"20px"} display={{ lg: "flex" }}>
            <Box>
              <Image
                id="github-stats-card"
                src={
                  "https://github-readme-stats.vercel.app/api?username=ram718&show_icons=true&theme=merko"
                }
                alt="github"
              ></Image>
            </Box>
            <Box>
              <Image
                id="github-streak-stats"
                src={
                  "https://github-readme-streak-stats.herokuapp.com/?user=ram718&theme=merko"
                }
                alt="github"
              ></Image>
            </Box>
            <Box>
              <Image
                id="github-top-langs"
                src={
                  "https://github-readme-stats.vercel.app/api/top-langs/?username=ram718&theme=dark"
                }
                alt="github"
              ></Image>
            </Box>
          </Box>
        </Center>
      </Box>
    </Zoom>
  );
};

export default Github;
