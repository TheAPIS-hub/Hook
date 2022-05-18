import React from 'react'

// Chakra imports
import {
  Flex,
  Image,
  Icon,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react'

// Custom components
import Transaction from 'components/dataDisplay/Transaction'
import Card from 'components/card/Card.js'

// Assets
import balanceImg from 'assets/img/dashboards/balanceImg.png'
import fakeGraph from 'assets/img/dashboards/fakeGraph.png'
import { MdOutlineMoreHoriz, MdDomain, MdElectricCar } from 'react-icons/md'

export default function Balance(props) {
  const { total2Usd, ...rest } = props
  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure()

  // Chakra Color Mode
  const blueIcon = useColorModeValue('blue.500', 'white')
  const greenIcon = useColorModeValue('green.500', 'white')
  const balanceBg = useColorModeValue('brand.900', '#1B254B')
  return (
    <Flex
      justify="space-between"
      p="24px"
      mb="20px"
      borderRadius="16px"
      bgColor={balanceBg}
      bgImage={balanceImg}
      bgSize="cover"
    >
      <Flex align="center" justify="space-between" w="100%">
        <Flex flexDirection="column" me="20px">
          <Text
            color="#E9EDF7"
            fontSize="12px"
            fontWeight="500"
            textAlign="left"
          >
            Portfolio
          </Text>
          <Text
            color="white"
            fontSize="34px"
            fontWeight="700"
            lineHeight="100%"
          >
            ${total2Usd}
          </Text>
        </Flex>
        <Flex flexDirection="column" ms="auto" align="flex-end">
          <Image src={fakeGraph} w="59px" h="17px" mt="6px" />
        </Flex>
      </Flex>
    </Flex>
  )
}
