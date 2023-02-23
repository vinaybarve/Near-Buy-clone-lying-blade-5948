import { Avatar, Box, Button, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, SimpleGrid, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductItems from './ProductItems';

const Products = () => {
  const toast = useToast();
  const [datas, setDatas] = useState([]);
  // const [category, setCategory] = useState("restaurant");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [mid, msetId] = useState("");
  const [sort, setSort] = useState("asc");
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleKeyDown = (e) => {
    let data_input = e.target.value.split("");
    let convert = data_input[0]?.toUpperCase();
    data_input[0] = convert;
    let searchedData = data_input.join("");
    if (e.key === "Enter") {
      searchTheData(searchedData);
    }
  };
  const searchTheData = async (searchedData) => {
    let res = await axios.get(`http://localhost:8080/restaurant`);
    let data = await res.data;
    data = data.filter((el) => {
      return el.name.match(searchedData);
    });
    setDatas(data);
    // console.log(data);
  };


  const handleToggleStatus = (_id, active) => {
    axios.patch(`http://localhost:8080/restaurant/update/${_id}`, {
      active: !active
    })
    .then((res)=>{
      handleGetData();
      active 
        ? toast({
          title: "Deactivated Successfully",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
        : toast({
            title: "Activated Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
    })
    .catch((err)=> console.log(err));
  };


  const handleOpenDetails = (_id, image, price, name) => {
    setName(name);
    setPrice(price);
    setImage(image);
    msetId(_id);
    onOpen();
  }

  const handleGetData = () => {
    axios.get(`http://localhost:8080/restaurant/?sort=${sort}`)
    .then((res)=>{
      setDatas(res.data)
      // console.log(res.data)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(() =>{
    handleGetData();
  },[sort])


  const handleSubmitModalDetails = () => {
    let dataToSend = {
      name: name,
      price: price,
      image: image
    };

    axios.patch(`http://localhost:8080/restaurant/update/${mid}`, dataToSend)
    .then((res)=> {
      handleGetData();
      console.log(res);
      toast({
        title: "Updated Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    })
    .catch((res) => {
      toast({
        title: "Invalid Request",
        status: "Error",
        duration: 3000,
        isClosable: true,
      });
    });
  }

  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading as={"h5"} color={"#00b5b8"}>Products</Heading>
      <Text color={"#00b5b8"}>List of Products</Text>
      <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
          {/* input search */}
          <Input
            type={"text"}
            placeholder="Search Listings.."
            w={{ base: "40%", md: "35%", lg: "25%" }}
            onKeyDown={handleKeyDown}
          ></Input>
          {/* Sorting by Price */}
          <Box display={"flex"} justifyContent={"space-around"} mb={"20px"}>
            <Select
              bg="#0c0e1f"
              w={{ base: "80%", md: "75%", lg: "65%" }}
              cursor={"pointer"}
              onChange={(e) => setSort(e.target.value)}
            >
              <option style={{ backgroundColor: "#0c0e1f" }} value="asc">
                Sort by: Low to High
              </option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="desc">
                Sort by: High to Low
              </option>
            </Select>
            {/* select option */}
            <Select
              bg="#0c0e1f"
              w={{ base: "85%", md: "75%", lg: "65%" }}
              cursor={"pointer"}
              // onChange={(e) => setCategory(e.target.value)}
            >
              <option style={{ backgroundColor: "#0c0e1f" }} value="restaurant">
                Restaurants
              </option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="giftcard">
                Gift Card
              </option>
            </Select>
          </Box>
        </Box>
        <Box>
          <SimpleGrid gap={5}>
          <Box
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"left"}
              boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
              padding={"10px"}
              mt={"20px"}
            >
                <Box
                  width={{ base: "10%", md: "15%" }}
                  fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                  <Text>ID</Text>
                </Box>
                <Box
                  width={{ base: "5%", md: "13%", lg: "10%" }}
                  fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                  <Text>IMAGE</Text>
                </Box>
                <Box
                  width={{ base: "10%", md: "27%", lg: "25%" }}
                  fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                  <Text>PRODUCTS</Text>
                </Box>
                <Box
                  width={{ base: "5%", md: "7%", lg: "8%" }}
                  fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                  <Text>PRICE</Text>
                </Box>
                <Box
                  width={{ base: "5%", md: "7%", lg: "8%" }}
                  fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                  <Text>LOCATION</Text>
                </Box>
                {/* <Box
                  width={{ base: "5%", md: "15%", lg: "15%" }}
                  fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                  <Text>CATEGORY</Text>
                </Box> */}
                <Box
                  w={{ base: "5%", md: "13%", lg: "10%" }}
                  fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                  <Text>STATUS</Text>
                </Box>
            </Box>
            <Box>
              {datas.map((el)=>(
                <ProductItems
                  key={el._id}
                  {...el}
                  handleOpenDetails={handleOpenDetails}
                  handleToggleStatus={handleToggleStatus}
                />
              ))}
            </Box>
          </SimpleGrid>
        </Box>
        <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent bg={"#0c0e1f"} color={"white"}>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Title:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Price:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  console.log(e.target.value);
                }}
              >
                {/* Price- Rs {Math.floor(Number(modalDetail.product_price) * 60)} */}
              </Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmitModalDetails();
                onClose();
              }}
            >
              Save
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Products