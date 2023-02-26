import { Flex, Image } from "@chakra-ui/react"
import React from "react"

function Product3() {
  return (
    <Flex w="100%" ml="40px" h="200px">
      <Flex
        justifyContent="center"
        w={{
          lg: "800px",
          sm: "200px",
        }}
        m={{
          sm: "10px",
          lg: "68px",
        }}
        gap={{
          sm: "5px",
          lg: "20px",
        }}
      >
        <Image
          width="150px"
          h="120px"
          src="https://img4.nbstatic.in/tr:w-350/63285c0bc10843000be89e58.jpg"
        />
        <Image
          width="150px"
          h="120px"
          src="https://img4.nbstatic.in/tr:w-350/63285c1d54f372000bdf5ea4.jpg"
        />
        <Image
          width="150px"
          h="120px"
          src="https://img4.nbstatic.in/tr:w-350/63285c2fc10843000be89e59.jpg"
        />
        <Image
          width="150px"
          h="120px"
          src="https://img4.nbstatic.in/tr:w-350/63285c40c10843000be89e5a.jpg"
        />
      </Flex>
    </Flex>
  )
}

export default Product3
