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
      <Flex justifyContent="space-between">
        <Skeleton borderRadius="26px" width="30%" height="126px" />
        <Skeleton borderRadius="26px" width="30%" height="126px" />
        <Skeleton borderRadius="26px" width="30%" height="126px" />
      </Flex>
      <Grid
        mb="20px"
        mt="20px"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          '2xl': '720fr 350fr',
        }}
        gap="20px"
        display={{ base: 'block', lg: 'grid' }}
      >
        <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
          <Skeleton borderRadius="26px" width="100%" height="345px" />
        </Flex>
        <Flex gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}>
          <Skeleton borderRadius="26px" width="100%" height="345px" />
        </Flex>
      </Grid>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', '2xl': '1fr 1fr' }}
        gap="20px"
        display={{ base: 'block', lg: 'grid' }}
      >
        <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
          <Skeleton borderRadius="26px" width="100%" height="345px" />
        </Flex>
        <Flex gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}>
          <Skeleton borderRadius="26px" width="100%" height="345px" />
        </Flex>
      </Grid>
    </Box>
  )
}
