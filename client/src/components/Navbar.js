// import React from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   useColorModeValue,
//   useBreakpointValue,
//   Container,
//   Heading,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";
// import DarkModeSwitch from "./DarkModeSwitch";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// import { useProfile } from "../hooks/useProfile";

// const Navbar = () => {
//   const { profile } = useProfile();
//   return (
//     <Box>
//       <Flex
//         color={useColorModeValue("gray.600", "white")}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         align={"center"}
//         pos="fixed"
//         top="0"
//         w={"full"}
//         minH={"60px"}
//         boxShadow={"sm"}
//         zIndex="999"
//         justify={"center"}
//         css={{
//           backdropFilter: "saturate(180%) blur(5px)",
//           backgroundColor: useColorModeValue(
//             "rgba(255, 255, 255, 0.8)",
//             "rgba(26, 32, 44, 0.8)"
//           ),
//         }}
//       >
//         <Container as={Flex} maxW={"7xl"} align={"center"}>
//           <Flex flex={{ base: 1 }} justify="start" ml={{ base: -2, md: 0 }}>
//             <Heading
//               textAlign="left"
//               fontFamily={"heading"}
//               color={useColorModeValue("teal.800", "white")}
//               as="h2"
//               size="lg"
//             >
//               {/* <Box
//                 as={"span"}
//                 color={useColorModeValue("teal.400", "teal.300")}
//                 position={"relative"}
//                 zIndex={10}
//                 _after={{
//                   content: '""',
//                   position: "absolute",
//                   left: 0,
//                   bottom: 0,
//                   w: "full",
//                   h: "30%",
//                   bg: useColorModeValue("teal.100", "teal.900"),
//                   zIndex: -1,
//                 }}
//               > */}
//                 {/* react royter <Link> will come here */}
//                 <Link to="/">Home </Link>
//               {/* </Box> */}
//             </Heading>
          
//           </Flex>
//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={"flex-end"}
//             direction={"row"}
//             spacing={6}
//             display={{ base: "none", md: "flex" }}
//           >
//             {profile &&  profile.name != "NA" && <p>{profile.name}</p>}
//             {/* <DarkModeSwitch /> */}
//           </Stack>
//           <Flex display={{ base: "flex", md: "none" }}>
//             {/* <DarkModeSwitch /> */}
//           </Flex>
//         </Container>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;





import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Container,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProfile } from "../hooks/useProfile";

const Navbar = () => {
  const { profile } = useProfile();

  return (
    <Box>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        pos="fixed"
        top="0"
        w={"full"}
        minH={"60px"}
        boxShadow={"sm"}
        zIndex="999"
        justify={"center"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(26, 32, 44, 0.8)"
          ),
        }}
      >
        <Container as={Flex} maxW={"7xl"} align={"center"}>
          {/* Left Side - Home and Additional Links */}
          <Flex flex={{ base: 1 }} justify="start" align="center">
            <Heading
              textAlign="left"
              fontFamily={"heading"}
              color={useColorModeValue("teal.800", "white")}
              as="h2"
              size="lg"
              mr={6} // Adds spacing between Home and the next links
            >
              <Link to="/">Home</Link>
            </Heading>

            <Text
              fontSize="lg"
              fontFamily={"heading"}
              fontWeight="medium" // Less thick than Home
              color={useColorModeValue("teal.600", "teal.300")}
              _hover={{ color: useColorModeValue("teal.800", "teal.400") }}
              transition="0.3s ease-in-out"
              mt="3px" // Aligns with Home button
              mr={4} // Adds spacing between links
            >
              <Link to="/is-not-registered">Register</Link>
            </Text>

            <Text
              fontSize="lg"
              fontFamily={"heading"}
              fontWeight="medium" // Less thick than Home
              color={useColorModeValue("teal.600", "teal.300")}
              _hover={{ color: useColorModeValue("teal.800", "teal.400") }}
              transition="0.3s ease-in-out"
              mt="3px" // Aligns with Home button
            >
              <Link to="/is-not-registered/verify">Verify</Link>
            </Text>
          </Flex>

          {/* Right Side - Profile Name */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
          >
            {profile && profile.name !== "NA" && <Text>{profile.name}</Text>}
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
};

export default Navbar;
