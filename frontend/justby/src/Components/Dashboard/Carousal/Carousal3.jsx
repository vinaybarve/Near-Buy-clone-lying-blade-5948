import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { product3 } from "../products/products"
import Product2 from "../products/Product2"
import { Text } from "@chakra-ui/react"
function Carousal3() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
    <div
      style={{
        height: "120px",
        width: "80%",
        marginLeft: "180px",
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
        Top Brands
      </Text>
      <Carousel responsive={responsive}>
        {product3.map((el) => {
          return <Product2 key={Math.random()} img={el.img} />
        })}
      </Carousel>
    </div>
  )
}

export default Carousal3
