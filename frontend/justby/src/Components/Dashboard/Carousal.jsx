import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import Product1 from "./products/Product1"

function Carousal1() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.7,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  const product1 = [
    {
      img: "https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg",
    },
    { img: "https://img4.nbstatic.in/tr:w-2800/63f462ee8db992000be12ca4.jpg" },
    {
      img: "https://img4.nbstatic.in/tr:w-2800/63f797b58db992000baa1797.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-2800/63f462ee8db992000be12ca4.jpg",
    },
  ]

  const product2 = [
    {
      img: "https://img4.nbstatic.in/tr:w-2800/63f0ce1f22b317000bfcf6f6.jpg",
    },
    { img: "https://img4.nbstatic.in/tr:w-2800/63ea2cbe22b317000bc83fa6.jpg" },
    { img: "https://img4.nbstatic.in/tr:w-2800/637dac5222b317000b774c8b.jpg" },
    {
      img: "https://img4.nbstatic.in/tr:w-2800/637b4c8a22156b000b18f311.jpg",
    },
    { img: "" },
  ]

  return (
    <div
      style={{
        height: "220px",
        backgroundColor: "#F1F1F1",
      }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        rewind={true}
        showDots
      >
        {product1.map((el) => {
          return <Product1 img={el.img} />
        })}
      </Carousel>
    </div>
  )
}

export default Carousal1
