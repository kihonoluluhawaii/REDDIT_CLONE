import { Flex } from "@chakra-ui/react";
import AuthButtons from "@/src/components/Navbar/RightContent/AuthButtons";
import AuthModal from "@/src/components/Modal/Auth/AuthModal";
import { User } from "@firebase/auth";
import Icons from "@/src/components/Navbar/RightContent/Icons";
import UserMenu from "@/src/components/Navbar/RightContent/UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent = ({ user }: RightContentProps) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align={"center"}>
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
