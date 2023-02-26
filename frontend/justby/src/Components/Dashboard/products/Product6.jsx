import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"

function Product6({ img, text }) {
  return (
    <Flex position="relative">
      <Box>
        <Image
          style={{ height: "130px", width: "95%" }}
          src={img}
          alt="carousal"
        />
        <Text fontWeight="medium">{text}</Text>
      </Box>
    </Flex>
  )
}

export default Product6
