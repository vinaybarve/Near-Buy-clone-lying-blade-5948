import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function ProductCard({ product }) {
  return (
    <Flex
      columns={3}
      spacing={10}
      p={6}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="300px"
        h={"350px"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {product.active && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          margin={"auto"}
          src={product.image}
          padding={2}
          width={"100%"}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
        />

        <Box p="8">
          <Box d="flex" alignItems="baseline">
            {product.active && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New Arrival
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h5"
              margin={"auto"}
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"0.8em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={6} w={5} alignSelf={"center"} />
              </chakra.a>
            </Tooltip> */}
          </Flex>
          <Box
            fontSize="md"
            fontWeight="semibold"
            as="h5"
            lineHeight="tight"
            isTruncated
          >
            {product.location}
          </Box>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹
              </Box>
              {product.price.toFixed(2)}
            </Box>
            <Flex
              d="flex"
              flexDirection={"row"}
              alignItems="center"
              alignContent="center"
            >
              <BsStarFill color={"teal.500"} />
              <BsStarFill color={"teal.500"} />
              <BsStarFill color={"teal.500"} />
              <BsStarHalf color={"teal.500"} />

              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.rating} review{6 > 1 && "s"}
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductCard
