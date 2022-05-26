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
      width="34vw"
      height="34vw"
    >
      <Box borderRadius="22px" overflow="hidden" height="26vw">
        <Players
          borderRadius="32px"
          divht="26vw"
          ht="100%"
          wd="100%"
          src="https://www.youtube.com/embed/3OSUpTaiJM8"
        ></Players>
      </Box>
      <Box
        fontSize="1vw"
        textAlign="left"
        fontWeight={500}
        color="#fff"
        marginTop="1vw"
        padding="0 1vw"
        lineHeight="1.2vw"
        alignItems="center"
      >
        Game name
      </Box>

      <Flex marginTop="10px" padding="0 22px">
        <img
          style={{
            width: '1.1vw',
            height: '1.1vw',
            borderRadius: '50%',
            marginRight: '0.4vw',
          }}
          src={GameHeader}
          alt=""
        />
        <Text
          style={{
            fontWeight: '400',
            fontSize: '0.4vw',
            lineHeight: '1.1vw',
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
