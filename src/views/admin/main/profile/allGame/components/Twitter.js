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
  Grid,
} from '@chakra-ui/react'
import TwitterHeader from '../../../../../../assets/img/logo/Header.png'
import contentImg from '../../../../../../assets/img/logo/gameThree.png'

export default function Twitter() {
  const [TwitterData, setTwitterData] = useState([
    {
      name: 'Bridgerew',
      TwitterName: 'DaBaby problem',
      img: TwitterHeader,
      Time: '3m',
      content:
        'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s',
    },
    {
      name: 'Bridgerew',
      TwitterName: 'DaBaby problem',
      img: TwitterHeader,
      Time: '3m',
      content:
        'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s',
    },
    {
      name: 'Bridgerew',
      TwitterName: 'DaBaby problem',
      img: TwitterHeader,
      Time: '3m',
      contentImg: contentImg,
      content:
        'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s',
    },
    {
      name: 'Bridgerew',
      TwitterName: 'DaBaby problem',
      img: TwitterHeader,
      Time: '3m',
      content:
        'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s',
    },
    {
      name: 'Bridgerew',
      TwitterName: 'DaBaby problem',
      img: TwitterHeader,
      Time: '3m',
      content:
        'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s',
    },
    {
      name: 'Bridgerew',
      TwitterName: 'DaBaby problem',
      img: TwitterHeader,
      Time: '3m',
      content:
        'on a long enough time horizon bitcoin’smechanism design is just as flawed as terra’s',
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
          marginBottom: '61px',
        }}
      >
        Twitter
      </Box>
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          '2xl': '1fr',
          md: '1fr 1fr',
          sm: '1fr',
        }}
      >
        {TwitterData.map((item, index) => {
          return (
            <Box
              style={{
                display: 'flex',
                verticalAlign: 'top',
                marginBottom: '37px',
              }}
            >
              <Box>
                <Image
                  //   style={{
                  //     width: '56px',
                  //     height: '56px',
                  //     borderRadius: '50%',
                  //   }}
                  width={{ md: '56px', sm: '36px' }}
                  maxW={{ md: '56px', sm: '36px' }}
                  maxH={{ md: '56px', sm: '36px' }}
                  height={{ md: '56px', sm: '36px' }}
                  borderRadius="50%"
                  src={item.img}
                  alt=""
                />
              </Box>
              <Box>
                <Box
                  style={{
                    marginBottom: '21px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: 'rgba(255,255,255,1)',
                      fontSize: '14px',
                      fontWeight: ' 700',
                      textAlign: 'left',
                      marginRight: '6px',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: 'rgba(178,179,189,1)',
                      fontSize: '13px',
                      fontWeight: '400',
                      textAlign: 'left',
                      marginRight: '6px',
                    }}
                  >
                    @{item.TwitterName}
                  </Text>
                  <Text
                    style={{
                      color: 'rgba(178,179,189,1)',
                      fontSize: '13px',
                      fontWeight: '400',
                      textAlign: 'left',
                    }}
                  >
                    .{item.Time}ago
                  </Text>
                </Box>
                <Box
                  style={{
                    borderRadius: '20px 20px 20px 4px',
                    background: ' rgba(228,228,228,0.1)',
                    padding: '16px 24px',
                    boxSizing: 'border-box',
                    //   index === 1 ? {background: "blue"} : { background:'rgba(228,228,228,0.1)'}
                  }}
                  width={{ md: '352px', base: '309px', sm: 'auto' }}
                >
                  <Box
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '14px',
                      fontWeight: ' 400',
                      textAlign: ' left',
                      lineHeight: '24px',
                    }}
                  >
                    {item.content}
                    <img
                      style={{
                        marginTop: '7px',
                      }}
                      src={item.contentImg}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}
