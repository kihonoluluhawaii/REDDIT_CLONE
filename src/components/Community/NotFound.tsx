import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"60vh"}
    >
      Sorry, thats community does not exist or has been banned
      <Link href="/">
        <Button mt={4}>GO HOME</Button>
      </Link>
    </Flex>
  );
};

export default NotFound;
