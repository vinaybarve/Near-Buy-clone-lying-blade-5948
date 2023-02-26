import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"

function Product6({ img }) {
  return (
    <Flex position="relative">
      <Image
        style={{ height: "260px", width: "95%" }}
        src={img}
        alt="carousal"
      />
    </Flex>
  )
}

export default Product6
