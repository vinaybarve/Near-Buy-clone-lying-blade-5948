import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { product6 } from "../products/products"
import { Box, Text } from "@chakra-ui/react"
import Product4 from "../products/Product4"
function Carousal5() {
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
        height: "360px",
      }}
      h={{
        sm: "50px",
        lg: "360px",
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
      >
        Popular Hangouts
      </Text>
      <Carousel responsive={responsive}>
        {product6.map((el) => {
          return (
            <Product4
              key={Math.random()}
              img={el.img}
              text={el.text}
              price={el.price}
            />
          )
        })}
      </Carousel>
    </Box>
  )
}

export default Carousal5
