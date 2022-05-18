import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box,
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
import ImageGallery from 'react-image-gallery'
import Players from '../../game/compoment/player'

import gameThree from '../../../../../../assets/img/logo/gameThree.png'
export default function SwiperItem() {
  return (
    <Box
      maxW="730px"
      maxH="720px"
      backgroundColor="rgba(17,28,68,1)"
      borderRadius="32px"
    >
      <Box>
        <Players src="https://www.youtube-nocookie.com/embed/pz1ztvu77FM?controls=0"></Players>
      </Box>
    </Box>
  )
}
