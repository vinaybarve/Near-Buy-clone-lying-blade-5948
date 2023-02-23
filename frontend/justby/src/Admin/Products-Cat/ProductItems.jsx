import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductItems = ({
  _id,
  name,
  price,
  image,
  active,
  location,
  handleToggleStatus,
  handleOpenDetails
}) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
      cursor={"pointer"}
    >
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        textAlign={"left"}
        padding={"10px"}
      >
        <Box
          width={{ base: "10%", md: "15%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text >{_id}</Text>
          {/* color={"white"} */}
        </Box>
        <Box
          width={{ base: "5%", md: "13%", lg: "10%" }}
          onClick={() => {
            handleOpenDetails(_id, image, price, name);
          }}
        >
          <Image width={"80%"} src={image} alt={name}></Image>
        </Box>
        <Box
          width={{ base: "10%", md: "27%", lg: "25%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(_id, image, price, name);
          }}
        >
          <Text>{name}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "10%", lg: "8%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(_id, image, price, name);
          }}
        >
          <Text>₹ {price}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "10%", lg: "8%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(_id, image, price, name);
          }}
        >
          <Text>{location}</Text>
        </Box>
        {/* <Box
          width={{ base: "5%", md: "15%", lg: "15%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{category === "WheyProtien" ? "WheyProtein" : category}</Text>
        </Box> */}
        <Box w={{ base: "5%", md: "15%", lg: "10%" }}>
          <Button
            onClick={() => {
              handleToggleStatus(_id, active);
            }}
            size={{ base: "sm", md: "sm", lg: "md" }}
            colorScheme={active ? "green" : "red"}
          >
            {active ? "Active" : "Inactive"}
          </Button>
        </Box>
      </Box>
      {/* ```````````````````````````````small screen ``````````````````````````````````*/}

      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        p={"10px"}
      >
        {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
        <Box
          width={{ base: "50%", sm: "40%" }}
          onClick={() => {
            handleOpenDetails(_id, image, price, name);
          }}
        >
          <Box
            h="25px"
            width={"58px"}
            border={active ? "1px solid Green" : "1px solid red"}
            bg={active ? "green.300" : "red.300"}
            mb={"10px"}
            color="black"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {active ? (
              <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                Active
              </Text>
            ) : (
              <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                Inactive
              </Text>
            )}
          </Box>
          <Image
            width={{ base: "60%", sm: "40%" }}
            src={image}
            alt={name}
          ></Image>
          <Text fontWeight={"bold"} fontSize={"lg"} mt={"20px"}>
            ₹ {price}
          </Text>
        </Box>
        {/* ```````````````````````````````````right Div````````````````````````````` */}
        <Box
          w={{ base: "50%", sm: "60%" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
        >
          <Box>
            <Text as="b" fontSize={{ base: "13px", sm: "14px" }}>
              {name}
            </Text>
            {/* <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              {category === "WheyProtien" ? "WheyProtein" : category}
            </Text> */}
            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              ID- {_id}
            </Text>
          </Box>

          <Button
            mt={"10px"}
            onClick={() => {
              handleToggleStatus(_id, active);
            }}
            size={"sm"}
            colorScheme={active ? "green" : "red"}
          >
            {active ? "Active" : "Inactive"}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductItems