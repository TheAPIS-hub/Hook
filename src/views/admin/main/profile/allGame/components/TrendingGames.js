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
  Button,
  Grid,
} from '@chakra-ui/react'
import '../index.css'
import gameThree from '../../../../../../assets/img/logo/gameThree.png'

export default function TrendingGames({ gameData }) {
  //   const [TrendingData, setTrendingData] = useState(gameData)
  //   console.log(gameData)
  return (
    <Box marginTop="74px" width="100%" className="afterShandow">
      <Box
        style={{
          color: ' rgba(255,255,255,1)',
          fontSize: '24px',
          fontWeight: ' 500',
          textAlign: 'left',
          lineHeight: '32px',
          // marginBottom: '32px',
        }}
        marginBottom={{ sm: '28px', md: '32px' }}
        className="font-Inter-SemiBold"
      >
        Ranking
      </Box>
      <Box overflowY="auto" height={{ sm: '127vw', md: '34vw' }}>
        {gameData.map((item, index) => {
          return (
            <Box
              _hover={{ bgColor: 'rgba(228, 228, 228, 0.1)' }}
              style={{
                display: 'flex',
                // alignItems: 'center',
                // width: '491px',
              }}
              height={{ sm: '26.6vw', md: '4.8vw' }}
              marginBottom={{ sm: '6.4vw', md: '0.9vw' }}
            >
              <Box>
                <Image
                  style={{
                    borderRadius: '12px',
                  }}
                  width={{ sm: '28.8vw', md: '5.5vw' }}
                  height={{ sm: '26.6vw', md: '4.7vw' }}
                  src={item.imgs[0].url}
                  alt=""
                />
              </Box>
              <Box
                style={{
                  pandingTop: '0.6vw',
                  // marginLeft: '0.7vw',
                }}
                ml={{ sm: '6.95vw', md: '0.7vw' }}
              >
                <Box
                  style={{
                    color: 'rgba(255,255,255,1)',
                    fontWeight: '400',
                    textAlign: ' left',
                    lineHeight: '18px',
                  }}
                  marginBottom="8px"
                  fontSize={{ sm: '3.47vw', md: '0.8vw' }}
                >
                  {item.gameStudio}®
                </Box>
                <Box
                  style={{
                    color: 'rgba(128,129,145,1)',
                    fontWeight: '400',
                    textAlign: 'left',
                    lineHeight: '16px',
                    lineClamp: 3,
                    overflow: 'hidden',
                  }}
                  width={{ sm: '42vw', md: '15vw', xl: '18vw' }}
                  fontSize={{ sm: '3.2vw', md: '0.6vw' }}
                  //   overflow="hidden"
                  //   //   maxH="2.3vw"
                  //   textOverflow="ellipsis"
                  className="rankText"
                >
                  {item.gameIntroduction}
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
      {/* <Box
        className="DiscoverBtn"
        style={{
          height: '56px',
          borderRadius: '16px',
          background: 'rgba(108,93,211,1)',
          color: 'rgba(255,255,255,1)',
          fontSize: '14px',
          fontWeight: '400',
          textAlign: ' center',
          lineHeight: '56px',
          marginTop: '65px',
        }}
      >
        Discover More
      </Box> */}
    </Box>
  )
}
