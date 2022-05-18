import React from 'react'

// Chakra imports
import { Flex, Grid, SimpleGrid } from '@chakra-ui/react'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Box,
} from '@chakra-ui/react'
export default function SkeletonBox() {
  return (
    <Box padding="6" width="100%">
      {/* <Flex justifyContent="space-between">
        <Skeleton borderRadius="26px" width="30%" height="126px" />
        <Skeleton borderRadius="26px" width="30%" height="126px" />
        <Skeleton borderRadius="26px" width="30%" height="126px" />
      </Flex> */}
      <Grid
       mb="20px"
        templateColumns={{
          base: '1fr',
          lg: '1fr 1fr 1fr',
        }}
        templateRows={{
          base: 'repeat(3, 1fr)',
          lg: '1fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', lg: 'grid' }}
      >
        <Flex  gridArea="1 / 1 / 2 / 2">
          <Skeleton borderRadius="26px" width="100%" height="621px" />
        </Flex>
        <Flex gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }}>
          <Skeleton borderRadius="26px" width="100%" height="621px" />
        </Flex>
        <Flex gridArea={{
            base: '3 / 1 / 4 / 2',
            lg: '1 / 3 / 2 / 4',
          }}>
          <Skeleton borderRadius="26px" width="100%" height="621px" />
        </Flex>
      </Grid>
      <Grid
         mb="20px"
         templateColumns={{
           base: '1fr',
           lg: 'repeat(1, 1fr)',
           '2xl': '1',
         }}
         templateRows={{
           base: '1fr',
           lg: 'repeat(1, 1fr)',
           '2xl': '1fr',
         }}
         gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', lg: 'grid' }}
      >
        <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
          <Skeleton borderRadius="26px" width="100%" height="345px" />
        </Flex>
        
      </Grid>
    </Box>
  )
}
