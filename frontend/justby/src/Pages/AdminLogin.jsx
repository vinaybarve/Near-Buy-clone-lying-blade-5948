import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Toast,
  } from "@chakra-ui/react";
  import { useState } from "react";
import { useNavigate } from "react-router-dom";
//   import { useHistory } from "react-router-dom";

  export default function AdminLogin() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  let navigate = useNavigate(); 
  
  
  const handleSubmit=()=>{
    const payload={
       email, password
    }
    //console.log(payload)
    fetch("http://localhost:8080/admin/login",{
      method:"POST",
      body: JSON.stringify(payload),
      headers:{
        "Content-Type": "application/json"
      }
    }).then((res)=>res.json())
    .then((res)=>{
        // console.log(res.msg) 
        Toast({
            title: "Logged in Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate(`/admin`)
    })
    .catch((err)=>{
        // console.log(err.msg);
        Toast({
            title: "Invalid Request",
            status: "Error",
            duration: 3000,
            isClosable: true,
          });
    
    })
  }
  
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to Admin Account!</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              To access Admin page 👨‍💻
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"red.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                  onClick={handleSubmit}
                >
                  Proceed
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  