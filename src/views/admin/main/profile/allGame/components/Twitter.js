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
import { getTwitterList } from '../../../../../../hook/hook'
import { dateDiff } from '../../../../../../hook/untils'

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
  useEffect(() => {
    getTwitterList().then((res) => {
      console.log(res.data.data)
      setTwitterData(res.data.data)
    })
  }, [])
  return (
    <Box
      marginTop="36px"
      width={{
        base: '100%',
        xl: '100%',
        '2xl': '100%',
        md: '334px',
      }}
      pr={{
        sm: '0',
        md: '10px',
      }}
      overflow="hidden"
      className="afterShandow"
    >
      <Box
        style={{
          color: ' rgba(255,255,255,1)',
          fontSize: '24px',
          fontWeight: ' 500',
          textAlign: 'left',
          lineHeight: '32px',
        }}
        marginBottom={{ sm: '50px', md: '28px' }}
        className="font-Inter-SemiBold"
      >
        Twitter
      </Box>

      <Box
        maxH={{ sm: '127vw', md: '45vw' }}
        overflowY="auto"
        ml={{ sm: '3.2vw', md: '0' }}
        pr={{ sm: '1.5vw', md: '0' }}
      >
        {TwitterData.map((item, index) => {
          return (
            <Box
              style={{
                display: 'flex',
                verticalAlign: 'top',
                // marginBottom: '24px',
              }}
              mt={{ sm: '27px', md: '24px' }}
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
                marginRight={{ sm: '3.6vw', md: '0.5vw' }}
              >
                <Image
                  style={{
                    borderRadius: '50%',
                  }}
                  width={{
                    sm: '10.1vw',
                    base: '2vw',
                    xl: '2vw',
                    '2xl': '2vw',
                    md: '38px',
                  }}
                  height={{
                    sm: '10.1vw',
                    base: '2vw',
                    xl: '2vw',
                    '2xl': '2vw',
                    md: '38px',
                  }}
                  maxW={{ sm: '11vw', md: '2vw' }}
                  src={item.profileImageUrlHttps}
                  alt=""
                />
              </Box>
              <Box>
                <Box
                  style={{
                    // marginBottom: '21px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  mb={{ sm: '13px', md: '21px' }}
                >
                  <Text
                    style={{
                      color: 'rgba(255,255,255,1)',
                      fontWeight: ' 700',
                      textAlign: 'left',
                    }}
                    fontSize="0.6vw"
                    maxWidth={{ sm: '44vw', md: '11vw' }}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
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
                    marginLeft={{ sm: '1.3vw', md: '0.3vw' }}
                  >
                    @{item.screenName}
                  </Text>
                  <Text
                    style={{
                      color: 'rgba(178,179,189,1)',
                      fontWeight: '400',
                      textAlign: 'left',
                    }}
                    fontSize="0.6vw"
                  >
                    {dateDiff(item.createdAt, null)}
                  </Text>
                </Box>
                <Box
                  className="chatFrame"
                  style={{
                    // width: ' 349px',
                    // borderRadius: '20px 20px 20px 4px',
                    background: ' rgba(228,228,228,0.1)',
                    boxSizing: 'border-box',
                    //   index === 1 ? {background: "blue"} : { background:'rgba(228,228,228,0.1)'}
                  }}
                  borderRadius={{
                    base: '13.4px 13.4px 13.4px 4px',
                    md: '20px 20px 20px 4px',
                  }}
                  width={{
                    base: '100%',
                    xl: '100%',
                    '2xl': '100%',
                    md: '100%',
                  }}
                  padding={{ sm: '3.6vw 4.3vw', md: '0.8vw 1.1vw' }}
                >
                  <Box
                    className="chatFullText"
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: ' 400',
                      textAlign: ' left',
                      lineHeight: '24px',
                    }}
                    fontSize="0.6w"
                  >
                    {item.fullText}
                    {item?.mediaUrl ? (
                      <Image
                        style={{
                          marginTop: '7px',
                        }}
                        width="14vw"
                        height="14vw"
                        src={item.mediaUrl}
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
