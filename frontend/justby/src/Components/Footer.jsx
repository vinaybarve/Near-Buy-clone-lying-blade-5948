import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react"
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

import ReactAppStoreBadge from "react-app-store-badge"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Grid mt="147px" w="100%" bg="black">
      <Grid
        templateColumns={{
          sm: "1fr ",
          md: "1fr",
          lg: "1fr 1fr",
        }}
        alignItems="center"
        justifyContent="center"
        bg="#333333"
        h="200px"
      >
        <GridItem h="200px" w="1190px">
          <Text m="50px 0px 10px 170px" fontSize="14px" color="#F2F2F2">
            Amazing offers available on nearbuy nearbuy helps you discover the
            best things to do, eat and buy – wherever you are! Make every day
            awesome with nearbuy. Dine at the finest restaurants, relax at the
            best spas, pamper yourself with exciting wellness and shopping
            offers or just explore your city intimately… you will always find a
            lot more to do with nearbuy. From tattoo parlors to music concerts,
            movie tickets to theme parks, everything you want is now within
            reach. Don't stop yet! Take it wherever you go with the nearbuy
            mobile app. Based on your location and preference, our smart search
            engine will suggest new things to explore every time you open the
            app. What's more, with offers on everything around you... you are
            sure to try something new every time.
          </Text>
        </GridItem>
        <Grid
          ml="60px"
          mt="-50px"
          w="40%"
          templateColumns={{
            sm: "1fr ",
            md: "1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap="5px"
        >
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter color="white" fontSize="24px" />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube color="white" fontSize="25px" />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram color="white" fontSize="25px" />
          </SocialButton>
        </Grid>
      </Grid>
      <Grid
        bg="black"
        color="#FFFFFF"
        h={{
          sm: "439px",
          md: "350px",
          lg: "245px",
        }}
      >
        <Container maxW={"8xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Policy</Link>
              <Link href={"#"}>Universal Fine Print</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Help</ListHeader>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Sitemap</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Install App</ListHeader>
              <Flex gap="30px">
                <Image
                  src="https://res4.nbstatic.in/static/images/google-play-badges.svg"
                  w="120px"
                />
                <Image
                  src="https://res4.nbstatic.in/static/images/app-store.svg"
                  w="120px"
                />
              </Flex>
            </Stack>
          </SimpleGrid>
        </Container>
      </Grid>
    </Grid>
  )
}
