import React from "react"
import { Flex } from "@chakra-ui/react"
import Carousal1 from "../Components/Dashboard/Carousal/Carousal1"
import Product0 from "../Components/Dashboard/products/Product0"
import Carousal2 from "../Components/Dashboard/Carousal/Carousal2"
import Carousal3 from "../Components/Dashboard/Carousal/Carousal3"
import Product3 from "../Components/Dashboard/products/Product3"
import Carousal4 from "../Components/Dashboard/Carousal/Carousal4"
import Carousal5 from "../Components/Dashboard/Carousal/Carousal5"
import Carousal6 from "../Components/Dashboard/Carousal/Carousal6"
import Carousal7 from "../Components/Dashboard/Carousal/Carousal7"
import Carousal8 from "../Components/Dashboard/Carousal/Carousal8"
import Carousal9 from "../Components/Dashboard/Carousal/Carousal9"
import Carousal11 from "../Components/Dashboard/Carousal/Carousal10"

function Dashboard() {
  return (
    <Flex flexDirection="column" gap="30px">
      <Product0 />
      <Carousal1 />
      <Carousal2 />
      <Carousal3 />
      <Product3 />
      <Carousal4 />
      <Carousal5 />
      <Carousal6 />
      <Carousal7 />
      <Carousal8 />
      <Carousal9 />
      <Carousal2 />
      <Carousal4 />
      <Carousal11 />
    </Flex>
  )
}

export default Dashboard
