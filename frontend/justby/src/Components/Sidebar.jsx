import React, { ReactNode, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import {
//   Checkbox,
//   // CheckboxGroup,
//   Heading,
//   Radio,
//   RadioGroup,
//   Stack,
// } from "@chakra-ui/react";
// import {
//   // IconButton,
//   Box,
//   // CloseButton,
//   Flex,
//   // Icon,
//   useColorModeValue,
//   // Link,
//   // Drawer,
//   // DrawerContent,
//   Text,
//   // useDisclosure,
//   // BoxProps,
//   // FlexProps,
// } from "@chakra-ui/react";

// // import {
// //   FiHome,
// //   FiTrendingUp,
// //   FiCompass,
// //   FiStar,
// //   FiSettings,
// //   FiMenu,
// // } from "react-icons/fi";
// // import { IconType } from "react-icons";
// // import { ReactText } from "react";

// export default function Sidebar({ children }) {

//   return (
//     <Box minH="100vh" bg={useColorModeValue("white", "white")}>
//       <Box
//         bg={useColorModeValue("white", "gray.900")}
//         borderRight="1px"
//         borderRightColor={useColorModeValue("gray.200", "gray.700")}
//         w={{ base: "full", md: 60 }}
//         pos="fixed"
//         h="full"
//       >
//
//
//       </Box>
//       {/* mobilenav */}
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {children}
//       </Box>
//     </Box>
//   );
// }
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Sidebar({ children }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const initialState = searchParam.getAll("location");
  const initialSort = searchParam.get("sort");
  const [location, setLocation] = useState(initialState || []);
  const [sort, setSort] = useState(initialSort || "");

  const handleFilter = (e) => {
    let newlocation = [...location];

    if (newlocation.includes(e.target.value)) {
      newlocation.splice(newlocation.indexOf(e.target.value), 1);
    } else {
      newlocation.push(e.target.value);
    }

    setLocation(newlocation);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const params = {
      location,
    };
    sort && (params.sort = sort);
    setSearchParam(params);
  }, [location, sort]);

  return (
    <Box bg={"#e1eaea"}>
      <Box
        display={"flex"}
        w="100%"
        m="auto"
        // gap="10px"
        justifyContent={"space-between"}
      >
        <Box w="100%">
          <Box bg={"white"} rounded="base" textAlign={"left"} p="6">
            <Flex
              display={"flex"}
              h="70"
              alignItems="center"
              mx="8"
              justifyContent="space-between"
            >
              <Heading m={"auto"} as="h4" size="md">
                Filter Items
              </Heading>
            </Flex>
            <Heading m={"auto"} as="h5" size="md">
              Location
            </Heading>
            <Box display={"flex"} w="50%" py="10px">
              <Stack
                padding={4}
                spacing={[1, 5]}
                direction={["column", "column"]}
              >
                <Checkbox
                  onChange={handleFilter}
                  value={"Mumbai"}
                  size="lg"
                  colorScheme="pink"
                  checked={location.includes("Mumbai")}
                >
                  Mumbai
                </Checkbox>
                <Checkbox
                  onChange={handleFilter}
                  value={"Navi Mumbai"}
                  size="lg"
                  colorScheme="pink"
                  checked={location.includes("Navi Mumbai")}
                >
                  Navi Mumbai
                </Checkbox>
                <Heading as="h4" size="md">
                  Price
                </Heading>
                <RadioGroup>
                  <Stack onChange={handleSort} size="lg" direction="column">
                    <Radio
                      name="sort_by"
                      size="lg"
                      value={"asc"}
                      defaultChecked={sort === "asc"}
                    >
                      Low To High
                    </Radio>
                    <Radio
                      name="sort_by"
                      size="lg"
                      value={"desc"}
                      defaultChecked={sort === "desc"}
                    >
                      High To Low
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
