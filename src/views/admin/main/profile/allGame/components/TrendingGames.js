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
  Grid
} from "@chakra-ui/react";
import '../index.css'
import gameThree from "../../../../../../assets/img/logo/gameThree.png";
export default function TrendingGames() {
  const [TrendingData, setTrendingData] = useState([
    {
      gameName: 'Call of Duty',
      img: gameThree,

      introduce:
        'The massive free-to-playexperience from the world of Modern Warfare.',
    },
    {
      gameName: 'Call of Duty',
      img: gameThree,

      introduce:
        'The massive free-to-playexperience from the world of Modern Warfare.',
    },
    {
      gameName: 'Call of Duty',
      img: gameThree,

      introduce:
        'The massive free-to-playexperience from the world of Modern Warfare.',
    },
    {
      gameName: 'Call of Duty',
      img: gameThree,

      introduce:
        'The massive free-to-playexperience from the world of Modern Warfare.',
    },
    {
      gameName: 'Call of Duty',
      img: gameThree,

      introduce:
        'The massive free-to-playexperience from the world of Modern Warfare.',
    },
  ])
  return (
    <Box>
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
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          '2xl': '1fr',
          md: '1fr 1fr',
          sm: '1fr',
        }}
      >
        {TrendingData.map((item, index) => {
          return (
            <Box
            _hover={{bgColor:'rgba(228, 228, 228, 0.1)'}}
             style={{
                display:'flex',
                alignItems:'center',
                width: '491px',
      height: '100px',
      marginBottom:'24px',
      
            }}>
              <Box  >
                <img style={{
                    width: '115.05px',
                    height: '100px',
                    borderRadius: '12px',
                  }}
                  src={item.img}
                  alt=""
                />
              </Box>
              <Box
                style={{
                  pandingTop: '13px',
                  marginLeft: '34.92px',
                }}
              >
                <Box
                  style={{
                    color: 'rgba(255,255,255,1)',
                    fontSize: '13px',
                    fontWeight: '400',
                    textAlign: ' left',
                    lineHeight: '18px',
                  }}
                >
                  {item.gameName}®
                </Box>
                <Box
                  style={{
                    width: '173px',
                    color: 'rgba(128,129,145,1)',
                    fontSize: '12px',
                    fontWeight: '400',
                    textAlign: 'left',
                    lineHeight: '16px',
                  }}
                >
                  {item.introduce}
                </Box>
              </Box>
            </Box>
          )
        })}
      </Grid>
      <Box
       className="DiscoverBtn" style={{
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
      </Box>
    </Box>
  )
}
