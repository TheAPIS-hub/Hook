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
import GameHeader from '../../../../../../assets/img/logo/Header.png'
import gameThree from '../../../../../../assets/img/logo/gameThree.png'
export default function SwiperItem() {
  const GameData = {
    copyright: 'Game Studio',
    generes: 'Game generes ',
  }
  return (
    <Box
      //   height="720px"
      backgroundColor="rgba(17,28,68,1)"
      borderRadius="32px"
      paddingBottom="32px"
      style={{}}
      width="504px"
      height="492px"
    >
      <Box borderRadius="22px" overflow="hidden">
        <Players
          borderRadius="32px"
          ht="384px"
          wd="504px"
          src="https://www.youtube.com/embed/3OSUpTaiJM8"
        ></Players>
      </Box>
      <Box
        fontSize="22px"
        textAlign="left"
        fontWeight={500}
        color="#fff"
        marginTop="22px"
        padding="0 22px"
        lineHeight="33px"
        alignItems="center"
      >
        Game name
      </Box>

      <Flex marginTop="10px" padding="0 22px">
        <img
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            marginRight: '8px',
          }}
          src={GameHeader}
          alt=""
        />
        <Text
          style={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '24px',
            color: ' #B2B3BD',
          }}
        >
          {GameData.copyright}®{' '}
          <span style={{ color: '#fff', margin: '0 6px', fontSize: '16px' }}>
            ·
          </span>{' '}
          {GameData.generes}
        </Text>
      </Flex>
    </Box>
  )
}
