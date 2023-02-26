import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { product10 } from "../products/products"
import { Box, Text } from "@chakra-ui/react"
import Product6 from "../products/Product6"
function Carousal9() {
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
        height: "200px",
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
        Next Thing On Your Mind
      </Text>
      <Carousel responsive={responsive}>
        {product10.map((el) => {
          return <Product6 key={Math.random()} img={el.img} text={el.text} />
        })}
      </Carousel>
    </Box>
  )
}

export default Carousal9
