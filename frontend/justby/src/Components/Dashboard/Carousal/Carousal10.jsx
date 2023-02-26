import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { product11 } from "../products/products"
import { Box, Button, Text } from "@chakra-ui/react"
import Product6 from "../products/Product6"
function Carousal11() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  return (
    <Box
      style={{
        height: "330px",
      }}
      ml={{
        sm: "120px",
        lg: "180px",
      }}
      w={{
        sm: "50%",
        lg: "80%",
      }}
    >
      {" "}
      <Text
        fontSize="25px"
        mr={{
          lg: "800px",
          md: "700px",
        }}
        fontWeight="bold"
        display={{
          sm: "none",
          md: "flex",
          lg: "flex",
        }}
      >
        Relaxing Massages
      </Text>
      <Carousel responsive={responsive}>
        {product11.map((el) => {
          return <Product6 key={Math.random()} img={el.img} text={el.text} />
        })}
      </Carousel>
      <Button
        display={{
          sm: "none",
          lg: "inline-block",
        }}
        mt="60px"
      >
        View All Offers
      </Button>
    </Box>
  )
}

export default Carousal11
