import React from "react"
import { Link } from "react-router-dom"
import {
  Grid,
  Image,
  Text,
  Select,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react"

import { SearchIcon } from "@chakra-ui/icons"

export default function Navbar() {
  return (
    <Grid pos="sticky" top="0" zIndex="100">
      <Grid
        templateColumns={{
          sm: "1fr ",
          md: "1fr",
          lg: "1fr 1fr",
        }}
        w="100%"
        h="35px"
        alignItems="center"
        bg={{
          sm: "white",
          md: "white",
          lg: "#F1F1F1",
        }}
        justifyContent="space-between"
      >
        <Flex w="30%" ml="170px">
          <Flex
            width={"55%"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
            }}
            alignItems="center"
          >
            <Image
              mt={"8px"}
              boxSize="12px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNnpqtu8YKWUfwM7jKmu7B1E0TCxY8pgA4g&usqp=CAU"
              alt=""
            />
            <Text
              ml={"5px"}
              padding={"6px 6px 0px 0px"}
              fontSize={"12px"}
              fontFamily={"sans-serif"}
            >
              Select Location
            </Text>
          </Flex>
          <Select
            width={{
              lg: "100px",
            }}
            minW="100px"
            alignItems="center"
            bg="white"
            borderColor="black"
            borderRadius={15}
            size="xs"
          >
            <option value="option1">New Delhi</option>
            <option value="option1">Gurgaon</option>
            <option value="option1">Jaipur</option>
            <option value="option1">Mumbai</option>
          </Select>
        </Flex>

        <Grid
          templateColumns={{
            lg: "repeat(4,1fr)",
          }}
          w="70%"
          ml="80px"
          display={{ base: "none", sm: "none", md: "none", lg: "grid" }}
        >
          <Link to={"/"}>Home</Link>
          <Link>How it Works</Link>
          <Link>List your Bussiness</Link>
          <Link to={"/login"}>Login</Link>
        </Grid>
      </Grid>
      <Grid
        bg="white"
        border="1px solid rgba(0, 0, 0, 0.116)"
        h="70px"
        templateColumns={{
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr",
        }}
        display={{
          sm: "grid",
          md: "grid",
          lg: "grid",
        }}
        alignItems="center"
      >
        <Image
          marginRight={{
            sm: "110px",
            md: "60px",
          }}
          width={{
            sm: "100px",
            md: "100px",
            lg: "20%",
          }}
          ml="200px"
          h="70px"
          src="https://www.nearbuy.com/static/images/nearbuy_red_with_subtitle.svg"
        />
        <Flex
          w={{
            sm: "100px",
            lg: "79%",
          }}
        >
          <InputGroup>
            <InputLeftElement
              children={<SearchIcon color="gray.500" fontSize="0.7em" />}
              pointerEvents="none"
            />
            <Input
              placeholder="Search restaurants,spa,events"
              width={{
                sm: "100px",
                md: "200px",
                lg: "500px",
              }}
            />
          </InputGroup>
          <Button
            fontSize={{
              lg: "13px",
              md: "10px",
              sm: "9px",
            }}
            colorScheme="red"
            borderRadius="0px"
            h="40px"
          >
            Search
          </Button>
        </Flex>
      </Grid>
    </Grid>
  )
}
