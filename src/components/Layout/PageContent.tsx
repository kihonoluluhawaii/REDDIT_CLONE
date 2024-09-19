import React from "react";
import { Flex } from "@chakra-ui/react";

const PageContent: React.FC = ({ children }) => {
  return (
    <Flex justify={"center"} p="16px 0px" border={"1px solid red"}>
      <Flex
        width={"95%"}
        justify={"center"}
        maxWidth={"860px"}
        border={"1px solid green"}
      >
        <Flex
          direction={"column"}
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
          border={"1px solid blue"}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        <Flex
          direction={"column"}
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          border={"1px solid lime"}
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
