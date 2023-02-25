import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Customers from './Customers'
import Orders from './Orders/Orders'
import Products from "./Products-Cat/Products"

const AdminMenu = () => {
  return (
    <Box>
      <Heading as='h2'>Admin Page</Heading>
        <Tabs isFitted size='md' align='center' variant='enclosed' textAlign={"center"}>
          <TabList alignItems={"center"}>
            <Tab>Products</Tab>
            <Tab>Customers</Tab>
            <Tab>Orders</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Products />
            </TabPanel>
            <TabPanel>
              <Customers />
              {/* <h1>Customers</h1> */}
            </TabPanel>
            <TabPanel>
              <Orders />
            </TabPanel>
          </TabPanels>
        </Tabs>

      
    </Box>
  )
}

export default AdminMenu