import React from 'react'

// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'

// Custom components
import IconBox from 'components/icons/IconBox'

export default function Transaction(props) {
  const { date, sum, nameNum, icon, avatar, name, ...rest } = props

  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const iconBoxBg = useColorModeValue('secondaryGray.300', 'navy.700')
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" {...rest}>
      {/* <Avatar h="34px" w="34px" src={avatar} me="14px" /> */}
      <Flex direction="column" align="start" me="auto">
        <Text color={textColor} fontSize="md" me="6px" fontWeight="700">
          {name}
        </Text>
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
          {date}
        </Text>
      </Flex>
      <Box>
        <Text ms="auto" color={textColor} fontSize="sm" fontWeight="700">
          {sum}
        </Text>
        <Text
          ms="auto"
          color="#A3AED0"
          fontSize="14px"
          textAlign="right"
          fontWeight="500"
        >
          {nameNum}
        </Text>
      </Box>
    </Flex>
  )
}
