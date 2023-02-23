import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Products from "./Products-Cat/Products"

const AdminMenu = () => {
  return (
    <Box>
      <Heading as='h2'>Admin Page</Heading>
      <Products />
    </Box>
  )
}

export default AdminMenu