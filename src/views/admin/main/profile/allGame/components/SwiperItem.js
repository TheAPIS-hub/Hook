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
  Button
} from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery'
import Players from '../../game/compoment/player'
import { useHistory } from 'react-router-dom'
import GameHeader from '../../../../../../assets/img/logo/Header.png'
import gameThree from '../../../../../../assets/img/logo/gameThree.png'
export default function SwiperItem({
  src,
  gameStudio,
  gameUserIcon,
  genres,
  name,
  game,
}) {
  const GameData = {
    copyright: 'Game Studio',
    generes: 'Game generes ',
  }
  const history = useHistory()
  return (
    <Box
      //   height="720px"
      backgroundColor="rgba(17,28,68,1)"
      borderRadius="21px"
      paddingBottom="32px"
      style={{
        width: '100%',
      }}
      height={{sm:"140vw",md:"34vw"}}
    >
      <Box borderRadius="22px" overflow="hidden" height={{sm:"140vw",md:"26vw"}}>
        <Players
          borderRadius="32px"
          divht={{sm:"140vw",md:"26vw"}}
          ht="100%"
          wd="100%"
          src={src}
        ></Players>
      </Box>
      <Box 
        position={{sm:"absolute",md:"relative"}}
        bottom="1px"
        padding={{sm:"4vw",md:"0"}}
        >
        <Box
          fontSize={{sm:"6.4vw",md:"2vw"}}
          textAlign="left"
          fontWeight={500}
          color="#fff"
          marginTop="2.6vw"
          padding="0 1vw"
          lineHeight="1.2vw"
          alignItems="center"
          className="font-Inter-SemiBold"
        >
          {name}
        </Box>

        <Flex marginTop={{sm:"7.2vw",md:"1.3vw"}} padding="0 1vw" alignItems="center">
          <Image
            style={{
              borderRadius: '50%',
            }}
            width={{sm:"6.4vw",md:"1.1vw"}}
            height={{sm:"6.4vw",md:"1.1vw"}}
            marginRight={{sm:"2.1vw",md:"0.4vw"}}
            src={gameUserIcon}
            alt=""
          />
          <Text
            style={{
              fontWeight: '400',
              // fontSize: '0.6vw',
              lineHeight: '1.1vw',
              // color: ' #B2B3BD',
            }}
            color={{sm:"#fff",md:"#B2B3BD"}}
            fontSize={{sm:"3.7vw",md:"0.6vw"}}
          >
            <Text as="span" marginRight={{sm:"3.5vw",md:"0"}}>
              {gameStudio}®
            </Text>
            <span style={{ color: '#fff', margin: '0 6px', fontSize: '16px' }}>
              ·
            </span>
            {genres}
          </Text>
        </Flex>
        <Button
                variant="brand"
                width="82.9vw"
                bgColor="#6C5DD3"
                height="14.7vw"
                h={{
                  base: '54px',
                  sm: '50px',
                  xl: '54px',
                  '2xl': '72px',
                }}
                fontWeight="500"
                fontSize="3.73vw"
                onClick={() => {
                  localStorage.setItem('game', JSON.stringify(game))
                  history.push({
                    pathname: '/admin/profile/gameDetail',
                  })
                }}
                _hover={{
                  bgColor: 'rgba(108,93,211 ,0.6)',
                }}
                borderRadius="16px"
                marginTop="5.4vw"
                display={{sm:"block",md:"none"}}
              >
                Watch
              </Button>
      </Box>
    </Box>
  )
}
