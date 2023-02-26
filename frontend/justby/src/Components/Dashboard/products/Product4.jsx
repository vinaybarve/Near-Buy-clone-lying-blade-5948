import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"

function Product4({ img, text, price }) {
  return (
    <Flex position="relative">
      <Image
        filter=" brightness(50%)"
        style={{ height: "270px", width: "90%", borderRadius: "10px" }}
        src={img}
        alt="carousal"
      />
      <Box
        position="absolute"
        background-color="black"
        bottom="40px"
        right="90px"
        color="#FFFFFF"
      >
        <Text fontFamily="sans-serif" fontSize="16px" fontWeight="bold">
          {text}
        </Text>
        <Text fontFamily="sans-serif" fontSize="12px">
          {price}
        </Text>
      </Box>
    </Flex>
  )
}

export default Product4
