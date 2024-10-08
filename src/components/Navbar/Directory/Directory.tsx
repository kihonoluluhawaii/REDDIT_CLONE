import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { User } from "@firebase/auth";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TiHome } from "react-icons/ti";
import Communities from "@/src/components/Navbar/Directory/Communities";

type UserMenuProps = {
  user?: User;
};

const UserMenu: React.FC<UserMenuProps> = () => {
  return (
    <Menu>
      <MenuButton
        cursor={"pointer"}
        padding={"0px 6px"}
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex
          align={"center"}
          justifyContent={"space-between"}
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align={"center"}>
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize={"10pt"}>
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
