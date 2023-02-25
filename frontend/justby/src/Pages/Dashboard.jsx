import React from "react"
import { Box, Flex, Grid } from "@chakra-ui/react"
import Carousal1 from "../Components/Dashboard/Carousal/Carousal1"
import Product0 from "../Components/Dashboard/products/Product0"
import Carousal2 from "../Components/Dashboard/Carousal/Carousal2"
import Carousal3 from "../Components/Dashboard/Carousal/Carousal3"

function Dashboard() {
  return (
    <Flex flexDirection="column" gap="30px">
      <Product0 />
      <Carousal1 />
      <Carousal2 />
      <Carousal3 />
    </Flex>
  )
}

export default Dashboard
