import { Flex } from "@chakra-ui/react";
import AuthButtons from "@/src/components/Navbar/RightContent/AuthButtons";
import AuthModal from "@/src/components/Modal/Auth/AuthModal";

const RightContent = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align={"center"}>
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
