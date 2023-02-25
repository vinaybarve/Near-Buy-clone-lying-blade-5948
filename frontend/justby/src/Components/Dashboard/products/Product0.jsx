import React from "react"
import { Flex, Box, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
function Product0() {
  return (
    <Flex h="130px" border="1px solid rgba(0, 0, 0, 0.116)">
      <Flex w="100%" justifyContent="center">
        <Box _hover={{ bg: "#F1F1F1" }} h="100%" w="140px">
          <Link to={"/products"}>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Restaurant Deals
            </Text>
          </Link >
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/639acd9b8db992000bac8a46.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Buffet Deals
            </Text>
          </Link>
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/636ce2bc22156b000b884c73.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Deals on NightLife
            </Text>
          </Link>
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Salon Deals
            </Text>
          </Link>
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Spa Deals
            </Text>
          </Link>
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/6201ec623b031b000b53e5b6.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Activities Deals
            </Text>
          </Link>
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link to={"/gift"}>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/62d67522edffcc000b060b5c.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Gift Cards
            </Text>
          </Link>
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/62d6747fb3c621000b6fb633.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Health
            </Text>
          </Link>
        </Box>

        <Box _hover={{ bg: "#F1F1F1", color: "black" }} h="100%" w="140px">
          <Link>
            <Image
              p={{
                sm: "30px 0px",
                md: "30px 5px",
                lg: "30px 30px",
              }}
              marginBottom="-20px"
              ml="21px"
              h="69%"
              src="https://img4.nbstatic.in/tr:w-/63d8fb2e8db992000b6250dc.png"
            />
            <Text fonts={"sans-serif"} fontSize="12px" fontWeight="bold">
              Win an iPhone
            </Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Product0
