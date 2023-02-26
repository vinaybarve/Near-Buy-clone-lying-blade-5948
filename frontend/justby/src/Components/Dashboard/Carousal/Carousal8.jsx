import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { product9 } from "../products/products"
import Product6 from "../products/Product6"
function Carousal8() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.7,
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
        height: "250px",
        backgroundColor: "#F1F1F1",
      }}
    >
      <Carousel responsive={responsive}>
        {product9.map((el) => {
          return <Product6 img={el.img} />
        })}
      </Carousel>
    </div>
  )
}

export default Carousal8
