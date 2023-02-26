import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Gift = () => {
  const [data, setData] = useState([]);
  const getdata = () => {};

  return (
    <Box bg={"#e1eaea"}>
      <Box
        display={"flex"}
        w="80%"
        m="auto"
        gap="20px"
        justifyContent={"space-between"}
        pt={"6"}
      >
        <Box w="30%">
          <Box bg={"white"} rounded="base" textAlign={"left"} p="6">
            <Heading size="md">Win Rs 500 instant off code</Heading>
            <Text fontSize={"sm"} pt="10" color="gray.500">
              Valid on all prepaid deals | No minimum purchase
            </Text>
            <Box display={"flex"} w="50%" py="10px">
              <Box
                border={"1px dashed gray"}
                color="blue.200"
                p={2}
                fontSize="sm"
              >
                NBLUCKY
              </Box>
              <Box
                border={"1px solid gray"}
                borderLeft="none"
                p={2}
                bg={"#e1eaea"}
                fontSize="sm"
              >
                Copy
              </Box>
            </Box>
            <Text fontSize={"sm"} pt="2" color="gray.500">
              Valid till 03 Mar 2023
            </Text>
          </Box>
          <Box bg={"white"} rounded="base" textAlign={"left"} p="6" mt={"5"}>
            <Text fontSize={"lg"}>Categories</Text>
            <Heading size={"sm"} py="4" color="gray.500">
              In store
            </Heading>
            <hr />
            <Text fontSize={"lg"} py="4">
              Location
            </Text>
            <Box>
              <FormControl id="">
                <FormLabel></FormLabel>
                <Input type="text" placeholder={"Search for a location"} />
              </FormControl>
            </Box>
            <Text fontSize={"md"} pt="2" color="gray.700">
              New Delhi
            </Text>
            <Checkbox size={"sm"}>Checkbox</Checkbox>
            <Text fontSize={"md"} pt="2" color="gray.700">
              Gjaziabad
            </Text>
            <Checkbox size={"sm"}>Checkbox</Checkbox>
          </Box>
        </Box>
        <Box>
          <SimpleGrid columns={[1, 2, 3]} spacing="20px"></SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
