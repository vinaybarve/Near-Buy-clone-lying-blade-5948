import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,

} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BackendURL from "../../src/Backend"

export const Gift = () => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    try {


      let res = await fetch(`${BackendURL}/gift`)
      let data = await res.json()
      setData(data)

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  console.log(data);
  return (
    <Box bg={"#e1eaea"}>
      <Box
        display={"flex"}
        w="80%"
        m="auto"
        gap="20px"
        justifyContent={"space-between"}
        py={"8"}
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

          <SimpleGrid columns={[1, 2, 3]} spacing="20px">
            {data.map((el) => (
              <Box bg={"white"} p="4">
                <Link to={"/singlegift"}>
                  <Image src={el.image} alt="image" />
                  <Heading size={"sm"} textAlign="left" py="2">
                    {el.name}
                  </Heading>
                  <Text fontSize={"sm"} textAlign="left" color={"gray.800"}>
                    Rs. {el.price}
                  </Text>
                  <Flex justifyContent={"space-between"} py="2">
                    <Text fontSize={"sm"} color={"gray.500"}>
                      {el.order}
                    </Text>
                    <Text fontSize={"sm"} color={"gray.800"}>
                      Rating {el.rating}
                    </Text>
                  </Flex>
                </Link>
                <hr />
                <Text
                  fontSize={"sm"}
                  color={"gray.500"}
                  textAlign="left"
                  pt="6"
                >
                  {el.phoneno} Bought
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
