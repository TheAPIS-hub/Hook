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
import '../index.css'
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
    <Box
      marginTop="36px"
      width={{
        base: '100%',
        xl: '100%',
        '2xl': '100%',
        md: '334px',
      }}
    >
      <Box
        style={{
          color: ' rgba(255,255,255,1)',
          fontSize: '24px',
          fontWeight: ' 500',
          textAlign: 'left',
          lineHeight: '32px',
        }}
        marginBottom="28px"
      >
        Twitter
      </Box>

      <Box height="20vw">
        {TwitterData.map((item, index) => {
          return (
            <Box
              style={{
                display: 'flex',
                verticalAlign: 'top',
                marginBottom: '24px',
              }}
            >
              <Box
                width={{
                  base: '10%',
                  xl: '10%',
                  '2xl': '10%',
                  md: '38px',
                }}
                height={{
                  base: '20%',
                  xl: '20%',
                  '2xl': '20%',
                  md: '38px',
                }}
                marginRight="0.5vw"
              >
                <Image
                  style={{
                    borderRadius: '50%',
                  }}
                  width={{
                    base: '100%',
                    xl: '100%',
                    '2xl': '100%',
                    md: '38px',
                  }}
                  height={{
                    base: '100%',
                    xl: '100%',
                    '2xl': '100%',
                    md: '38px',
                  }}
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
                      fontWeight: ' 700',
                      textAlign: 'left',
                    }}
                    fontSize="0.6vw"
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: 'rgba(178,179,189,1)',
                      fontWeight: '400',
                      textAlign: 'left',
                    }}
                    fontSize="0.6vw"
                    marginRight="0.3vw"
                  >
                    @{item.TwitterName}
                  </Text>
                  <Text
                    style={{
                      color: 'rgba(178,179,189,1)',
                      fontWeight: '400',
                      textAlign: 'left',
                    }}
                    fontSize="0.6vw"
                  >
                    .{item.Time}ago
                  </Text>
                </Box>
                <Box
                  className="chatFrame"
                  style={{
                    // width: ' 349px',
                    borderRadius: '20px 20px 20px 4px',
                    background: ' rgba(228,228,228,0.1)',
                    boxSizing: 'border-box',
                    //   index === 1 ? {background: "blue"} : { background:'rgba(228,228,228,0.1)'}
                  }}
                  width={{
                    base: '100%',
                    xl: '100%',
                    '2xl': '100%',
                    md: '100%',
                  }}
                  padding="0.8vw 1.1vw"
                >
                  <Box
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: ' 400',
                      textAlign: ' left',
                      lineHeight: '24px',
                    }}
                    fontSize="0.7w"
                  >
                    {item.content}
                    {item?.contentImg ? (
                      <Image
                        style={{
                          marginTop: '7px',
                        }}
                        width="14vw"
                        height="14vw"
                        src={item.contentImg}
                        alt=""
                      />
                    ) : (
                      ''
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
