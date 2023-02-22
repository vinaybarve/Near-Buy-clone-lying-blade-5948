import React from 'react'
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";


export const Signup = () => {
    return <Box  w="30%" m={"auto"} mt="10%" border={"1px solid black"} p="3%">
    <Heading size={"md"} mb="30px">Signup</Heading>
    <Input bg="gray.100"  placeholder='Enter Name' size='md' _placeholder={{ opacity: 1, color: 'gray.500', fontWeight:"semibold"}}/>
    <Input bg="gray.100"  my="30px" placeholder='Enter Email Address' size='md' _placeholder={{ opacity: 1, color: 'gray.500', fontWeight:"semibold"}}/>
    <Input bg="gray.100" placeholder='Enter Password ' size='md' _placeholder={{ opacity: 1, color: 'gray.500', fontWeight:"semibold" }} />
    <Button colorScheme='red' w="100%"  my="30px">Register</Button>
    <Text>If don't have Account with us <span style={{color:"red"}} >Click Here</span></Text>
</Box>;
}
