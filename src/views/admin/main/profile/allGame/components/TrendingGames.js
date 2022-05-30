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
    <Box marginTop="74px" width="100%">
      <Box
        style={{
          color: ' rgba(255,255,255,1)',
          fontSize: '24px',
          fontWeight: ' 500',
          textAlign: 'left',
          lineHeight: '32px',
          marginBottom: '32px',
        }}
      >
        Ranking
      </Box>
      <Box overflowY="auto" height="34vw">
        {gameData.map((item, index) => {
          return (
            <Box
              _hover={{ bgColor: 'rgba(228, 228, 228, 0.1)' }}
              style={{
                display: 'flex',
                // alignItems: 'center',
                // width: '491px',
              }}
              height="4.8vw"
              marginBottom="0.9vw"
            >
              <Box>
                <Image
                  style={{
                    borderRadius: '12px',
                  }}
                  width="5.5vw"
                  height="4.7vw"
                  src={item.imgs[0].url}
                  alt=""
                />
              </Box>
              <Box
                style={{
                  pandingTop: '0.6vw',
                  marginLeft: '0.7vw',
                }}
              >
                <Box
                  style={{
                    color: 'rgba(255,255,255,1)',
                    fontWeight: '400',
                    textAlign: ' left',
                    lineHeight: '18px',
                  }}
                  marginBottom="8px"
                  fontSize="0.8vw"
                >
                  {item.gameStudio}®
                </Box>
                <Box
                  style={{
                    color: 'rgba(128,129,145,1)',
                    fontWeight: '400',
                    textAlign: 'left',
                    lineHeight: '16px',
                  }}
                  width="15vw"
                  fontSize="0.6vw"
                  overflow="hidden"
                  maxH="2.3vw"
                  textOverflow="ellipsis"
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
