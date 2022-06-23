import React, { useEffect, useState } from 'react'

// Chakra imports

import { Box, Icon, Text, useColorModeValue, Image } from '@chakra-ui/react'
import avatar1 from 'assets/img/logo/Header.png'
// Custom components
import Card from 'components/card/Card.js'
import Transaction from 'components/dataDisplay/Transaction'
// import { HSeparator } from "components/Separator/Separator";
// Assets
import {
  MdOutlineShoppingBasket,
  MdOutlineDirectionsBus,
  MdOutlineSubscriptions,
  MdLocalBar,
  MdOutlineWeekend,
} from 'react-icons/md'
import { RiNetflixFill } from 'react-icons/ri'

export default function YourTransactions(props) {
  const { searchData, ...rest } = props
  const [defiToken, setDefiToken] = useState([])
  //   useEffect(() => {
  //     const defiToken = searchToken.filter((res) => res.tokenInfo.c == null)
  //     setDefiToken(defiToken)
  //   }, [])
  // Chakra Color Mode
  useEffect(() => {
    if (searchData?.tokenBalance?.data) {
      const defiToken = searchData.tokenBalance.data.filter(
        (res) => res.tokenInfo.c == null
      )
      setDefiToken(defiToken)
    }
  }, [searchData])

  const iconColor = useColorModeValue('brand.500', 'white')
  const greenIcon = useColorModeValue('green.500', 'white')
  const redIcon = useColorModeValue('red.500', 'white')
  const blueIcon = useColorModeValue('blue.500', 'white')
  const yellowIcon = useColorModeValue('yellow.500', 'white')
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  return (
    <Box
      background="var(--chakra-colors-navy-800)"
      marginBottom="20px"
      borderRadius="30px"
      {...rest}
    >
      <Text
        p="34px"
        pb="0"
        fontSize="xl"
        color={textColor}
        fontWeight="700"
        mb="34px"
      >
        DeFi Token
      </Text>
      <Box p="34px" pt="0" maxHeight="520px" overflowY="auto">
        {defiToken.map((item, index) => {
          return (
            <Transaction
              key={index + 1}
              mb="26px"
              name={item.tokenInfo.s}
              date={item.tokenInfo.f}
              sum={`$${Number(item.totalPrice).toFixed(2)}`}
              // avatar={avatar1}
              nameNum={`@${Number(item.price).toFixed(2)}`}
            />
          )
        })}
      </Box>
    </Box>
  )
}
