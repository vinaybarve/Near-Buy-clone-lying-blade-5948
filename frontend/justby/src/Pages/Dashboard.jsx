import React from "react"
import { Box, Flex, Grid } from "@chakra-ui/react"
import Carousal1 from "../Components/Dashboard/Carousal"
import Product0 from "../Components/Dashboard/products/Product0"

function Dashboard() {
  return (
    <Flex flexDirection="column" gap="30px">
      <Product0 />
      <Carousal1 />
    </Flex>
  )
}

export default Dashboard
