import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import Product1 from "../products/Product1"
import { product3 } from "../products/products"
import Product2 from "../products/Product2"
function Carousal3() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1,
    },
  }
  return (
    <div
      style={{
        height: "220px",
        justifyContent: "center",
      }}
    >
      <Carousel responsive={responsive} showDots>
        {product3.map((el) => {
          return <Product2 img={el.img} />
        })}
      </Carousel>
    </div>
  )
}

export default Carousal3
