import React, { useEffect, useState } from 'react'
import {
  Menu,
  MenuButton,
  Flex,
  Box,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Image,
  Text,
  Grid,
  Icon,
} from '@chakra-ui/react'
import {
  VSeparator,
  HSeparator,
} from '../../../../../../components/separator/Separator'
import DateUploaded from '../components/MainMenu'
import Headers from '../../../../../../assets/img/logo/Header.png'
import gameThree from '../../../../../../assets/img/logo/gameThree.png'
import { useHistory } from 'react-router-dom'
import { getGameItemsDatas } from '../../../../../../hook/hook'
import { formatNumber } from '../../../../../../hook/untils'
import { MdHelpOutline, MdKeyboardArrowDown } from 'react-icons/md'
import Masonry from 'react-masonry-css'
export default function GameCard({ gameData }) {
  const [GameCardData, setGameCardData] = useState(gameData)
  const [isShow, setIsshow] = useState(false)
  const history = useHistory()
  const [idx, setIdx] = useState('')
  useEffect(() => {
    //   const gameListDataStr = localStorage.getItem('gameListData')
    //   const gameListDataJson = JSON.parse(gameListDataStr).records
    getGameItemsDatas(1, 10).then((res) => {
      localStorage.setItem('gameListData', JSON.stringify(res.data.data))
      setGameCardData(res.data.data.records)
    })
  }, [gameData])
  const chooseSort = (type) => {
    getGameItemsDatas(1, 10, type).then((res) => {
      localStorage.setItem('gameListData', JSON.stringify(res.data.data))
      setGameCardData(res.data.data.records)
    })
  }
  return (
    <Box
      marginTop="36px"
      width={{
        base: '100%',
        xl: '100%',
        '2xl': '100%',
        md: '688px',
      }}
    >
      <Flex
        alignItems="start"
        justifyContent="space-between"
        marginBottom="32px"
        flexDirection={{sm:"column-reverse",md:"initial"}}
      >
        <Text
          style={{
            color: ' rgba(255,255,255,1)',
            fontSize: '24px',
            fontWeight: ' 500',
            textAlign: 'left',
          }}
          className="font-Inter-SemiBold"
        >
          Trending games
        </Text>

        <DateUploaded chooseSort={chooseSort} ml={{sm:"57%",md:"0"}} mb={{sm:"26px",md:"0"}}></DateUploaded>
      </Flex>
      {/* <Box
        style={{
          textAlign: 'right',
          marginBottom: '32px',
          marginRight: '2px',
        }}
      > */}
      {/* </Box> */}
      <Box>
        {/* <Grid
          templateColumns={{
            base: '1fr',
            lg: '1fr 1fr 1fr',
          }}
          templateRows={{
            base: 'repeat(3, 1fr)',
            lg: '1fr',
          }}
          gap={{ base: '43px', xl: '43px' }}
          //   onChangeUlMaxH={(h) => console.log('ul容器高度-->', h)}
        > */}
        <Masonry
          breakpointCols={{
            default: 3,
            1400: 3,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="note-masonry-grid"
          columnClassName="note-masonry-grid_column"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {GameCardData.length > 0 &&
            GameCardData.map((item, index) => {
              return (
                <Box
                  style={{
                    borderRadius: '24px',
                    background: 'rgba(17,28,68,1)',
                  }}
                  key={`item+${index}`}
                  w='100%'
                  marginBottom={{
                    base: '40px',
                    md: '20px',
                    sm: '24px',
                  }}
                  // width={{
                  //   base: '90%',
                  //   xl: '90%',
                  //   '2xl': '90%',
                  //   md: '210px',
                  // }}
                >
                  <Box
                    cursor="pointer"
                    onClick={() => {
                      localStorage.setItem('game', JSON.stringify(item))

                      history.push({
                        pathname: '/admin/profile/gameDetail',
                      })
                    }}
                  >
                    <Image
                      borderRadius="24px 24px 0px 0px"
                      src={item?.imgs[0].url}
                      alt=""
                      width="100%"
                      height={{sm:"45.3vw",md:"8vw"}}
                    />
                  </Box>
                  <Box
                    style={{
                      // padding: '16px',
                      boxSizing: ' border-box',
                    }}
                    padding={{sm:'24px',md:'16px'}}
                  >
                    <Box
                      style={{
                        color: 'rgba(255,255,255,1)',
                        //   fontSize: '18px',
                        fontWeight: ' 500',
                        textAlign: 'left',
                        lineHeight: '24px',
                      }}
                      fontSize={{sm:'4.8vw',md:"0.8vw"}}
                    >
                      {item.name}
                    </Box>

                    <Box
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                      marginTop={{
                        base: '18px',
                        md: '12px',
                        sm: '12px',
                      }}
                    >
                      <Box
                        style={{
                          width: '8px',
                          height: ' 8px',
                          background: ' #0049C6',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      ></Box>
                      <Box
                        style={{
                          color: 'rgba(128,129,145,1)',
                          fontWeight: '400',
                          textAlign: 'right',
                          lineHeight: ' 16px',
                          marginRight: '10px',
                        }}
                        fontSize={{sm:"3.2vw",md:"0.3vw"}}
                      >
                        {formatNumber(item.twitterFollower)} followers
                      </Box>
                      <Box
                        style={{
                          width: '8px',
                          height: ' 8px',
                          background: ' #7FBA7A',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      ></Box>
                      <Box
                        style={{
                          color: 'rgba(128,129,145,1)',
                          fontWeight: '400',
                          textAlign: 'right',
                          lineHeight: ' 16px',
                        }}
                        fontSize={{sm:"3.2vw",md:"0.6vw"}}
                      >
                        {formatNumber(item.activeUsers)} players
                      </Box>
                    </Box>
                    <Box
                      style={{
                        marginTop: '12px',
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Box
                        width={{
                          base: '10%',
                          md: '12px',
                          xl: '10%',
                          '2xl': '10%',
                          sm: '24px',
                        }}
                        marginRight={{
                          base: '2%',
                          md: '6px',
                          xl: '2%',
                          '2xl': '2%',
                          sm: '8px',
                        }}
                      >
                        <Image
                          style={{
                            borderRadius: '50%',
                          }}
                          src={item.gameUserIcon}
                          alt=""
                          width={{
                            base: '10%',
                            md: '12px',
                            xl: '100%',
                            '2xl': '100%',
                            sm: '24px',
                          }}
                          maxW={{
                            base: '10%',
                            md: '12px',
                            xl: '100%',
                            '2xl': '100%',
                            sm: '24px',
                          }}
                          height={{
                            base: '10%',
                            md: '12px',
                            xl: '100%',
                            '2xl': '100%',
                            sm: '24px',
                          }}
                        />
                      </Box>
                      <Box
                        style={{
                          color: 'rgba(255,255,255,1)',
                          fontWeight: ' 400',
                          textAlign: ' left',
                          lineHeight: '20px',
                        }}
                        fontSize={{sm:"3.4vw",md:"0.6vw"}}
                      >
                        {item.gameStudio}®
                      </Box>
                    </Box>
                  </Box>
                  <HSeparator background="#fff5f514"></HSeparator>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      // padding: ' 13px 21px 11px 21px',
                      boxSizing: ' border-box',
                    }}
                    padding={{sm:'12px 32px 11px 32px',md:' 13px 21px 11px 21px'}}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: ' center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box
                        style={{
                          borderRadius: '8px',
                          background: 'rgba(228,228,228,0.1)',
                          color: ' rgba(95,117,238,1)',
                          fontWeight: ' 400',
                          textAlign: ' center',
                          marginRight: '8px',
                        }}
                        width={{
                          base: '72px',
                          md: '60px',
                          xl: '72px',
                          '2xl': '80px',
                          sm:'90px'
                        }}
                        height={{
                          base: '20px',
                          md: '16px',
                          xl: '20px',
                          '2xl': '24px',
                          sm:'27px'
                        }}
                        fontSize={{sm:"3.47vw",md:"0.6vw"}}
                        lineHeight={{
                          base: '20px',
                          md: '16px',
                          xl: '20px',
                          '2xl': '24px',
                          sm:'27px'
                        }}
                      >
                        Alpha
                      </Box>
                      <Menu>
                        <MenuButton p="0px">
                          <Icon
                            as={MdHelpOutline}
                            color="#808191"
                            w={{
                              base: '16px',
                              md: '14px',
                              xl: '16px',
                              '2xl': '20px',
                            }}
                            h={{
                              base: '16px',
                              md: '14px',
                              xl: '16px',
                              '2xl': '20px',
                            }}
                          />
                        </MenuButton>
                        <MenuList
                          p="0px"
                          background="var(--chakra-colors-navy-900)"
                          borderRadius="20px"
                          border="none"
                        >
                          <Flex w="100%" mb="0px">
                            <Text
                              p="10px 20px"
                              w="100%"
                              fontSize="sm"
                              fontWeight="700"
                            >
                              Initial release date：March 2018
                            </Text>
                          </Flex>
                        </MenuList>
                      </Menu>
                    </Box>
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        userSelect: 'none',
                      }}
                      cursor="pointer"
                      onClick={(e) => {
                        setIsshow(!isShow)
                        setIdx(e.target.getAttribute('data-idx'))
                      }}
                      color="rgba(128,129,145,1)"
                      _hover={{
                        color: '#fff',
                      }}
                      data-idx={`${index}`}
                    >
                      <Text
                        type="primary"
                        fontSize={{sm:"3.2vw",md:"0.6vw"}}
                        fontWeight="400"
                        mr="7px"
                        data-idx={`${index}`}
                      >
                        {idx == index
                          ? isShow
                            ? 'Hide'
                            : 'Details'
                          : 'Details'}
                      </Text>
                      <Icon
                        as={MdKeyboardArrowDown}
                        data-idx={`${index}`}
                        transform={
                          idx == index
                            ? isShow
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)'
                            : 'rotate(0deg)'
                        }
                        w={{
                          base: '16px',
                          md: '14px',
                          xl: '16px',
                          '2xl': '20px',
                        }}
                        h={{
                          base: '16px',
                          md: '14px',
                          xl: '16px',
                          '2xl': '20px',
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    //   hidden={idx == index ? isShow : ''}
                    height={idx == index ? (isShow ? '160px' : '0px') : '0px'}
                    transition="1s"
                    overflow="hidden"
                    padding={
                      idx == index
                        ? isShow
                          ? '13px 21px 21px 20px'
                          : '0px 20px '
                        : '0px'
                    }
                    style={{
                      boxSizing: ' border-box',
                    }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: ' center',
                        marginBottom: '16px',
                      }}
                    >
                      <Box
                        style={{
                          color: ' rgba(128,129,145,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                        width={{sm:"26vw",md:"5.6vw","2xl":"5vw"}}
                        // marginRight="50px"
                      >
                        RIO
                      </Box>
                      <Box
                        style={{
                          color: 'rgba(255,255,255,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                      >
                        {item.backPeriod}%
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: ' center',
                        marginBottom: '16px',
                      }}
                    >
                      <Box
                        style={{
                          color: ' rgba(128,129,145,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                        width={{sm:"26vw",md:"5.6vw","2xl":"5vw"}}
                      >
                        Volume
                      </Box>
                      <Box
                        style={{
                          color: 'rgba(255,255,255,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                      >
                        {item.volume}
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: ' center',
                        marginBottom: '16px',
                      }}
                    >
                      <Box
                        style={{
                          color: ' rgba(128,129,145,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                        width={{sm:"26vw",md:"5.6vw","2xl":"5vw"}}

                      >
                        Total NFTs
                      </Box>
                      <Box
                        style={{
                          color: 'rgba(255,255,255,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                      >
                        {item.totalNFT}
                      </Box>
                    </Box>
                    <Flex justifyContent="flex-end">
                      <Box
                        style={{
                          borderRadius: ' 8px',
                          background: 'rgba(108,93,211,1)',
                        }}
                        width={{sm:'108px',md:'70px'}}
                        height={{sm:'28px',md:'20px'}}
                      >
                        <Text
                          style={{
                            color: 'rgba(255,255,255,1)',
                            fontWeight: ' 400',
                            textAlign: ' center',
                            // lineHeight: ' 20px',
                          }}
                          lineHeight={{sm:'28px',md:'20px'}}
                          fontSize="12px"
                        >
                          swap
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              )
            })}
        </Masonry>
        {/* </Grid> */}
      </Box>
    </Box>
  )
}
