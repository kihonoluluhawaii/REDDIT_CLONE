import { Flex } from "@chakra-ui/react";
import React from "react";
import { authModalState } from "@/src/atoms/authModalAtom";
import { useRecoilValue } from "recoil";
import Login from "@/src/components/Modal/Auth/Login";
import SignUp from "@/src/components/Modal/Auth/SignUp";

const AuthInputs: React.FC = () => {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex direction={"column"} align={"center"} width={"100%"} mt={4}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;
