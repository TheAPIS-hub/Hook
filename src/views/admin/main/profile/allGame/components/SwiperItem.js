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
export default function SwiperItem({
  src,
  gameStudio,
  gameUserIcon,
  genres,
  name,
}) {
  const GameData = {
    copyright: 'Game Studio',
    generes: 'Game generes ',
  }
  return (
    <Box
      //   height="720px"
      backgroundColor="rgba(17,28,68,1)"
      borderRadius="21px"
      paddingBottom="32px"
      style={{
        width: '100%',
      }}
      height="34vw"
    >
      <Box borderRadius="22px" overflow="hidden" height="26vw">
        <Players
          borderRadius="32px"
          divht="26vw"
          ht="100%"
          wd="100%"
          src={src}
        ></Players>
      </Box>
      <Box
        fontSize="2vw"
        textAlign="left"
        fontWeight={500}
        color="#fff"
        marginTop="2.6vw"
        padding="0 1vw"
        lineHeight="1.2vw"
        alignItems="center"
      >
        {name}
      </Box>

      <Flex marginTop="1.3vw" padding="0 1vw">
        <img
          style={{
            width: '1.1vw',
            height: '1.1vw',
            borderRadius: '50%',
            marginRight: '0.4vw',
          }}
          src={gameUserIcon}
          alt=""
        />
        <Text
          style={{
            fontWeight: '400',
            fontSize: '0.6vw',
            lineHeight: '1.1vw',
            color: ' #B2B3BD',
          }}
        >
          {gameStudio}®
          <span style={{ color: '#fff', margin: '0 6px', fontSize: '16px' }}>
            ·
          </span>
          {genres}
        </Text>
      </Flex>
    </Box>
  )
}
