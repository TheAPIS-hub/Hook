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
        style={{
          color: ' rgba(255,255,255,1)',
          fontSize: '24px',
          fontWeight: ' 500',
          textAlign: 'left',
          lineHeight: '32px',
          marginBottom: '32px',
        }}
        alignItems="center"
        justifyContent="space-between"
        marginBottom="28px"
      >
        Trending games
        <DateUploaded chooseSort={chooseSort}></DateUploaded>
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
                  marginBottom={{
                    base: '40px',
                    md: '20px',
                    sm: '18px',
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
                      history.push({
                        pathname: '/admin/profile/gameDetail',
                      })
                    }}
                  >
                    <Image
                      borderRadius="24px"
                      src={item?.imgs[0].url}
                      alt=""
                      width={{
                        base: '100%',
                        xl: '100%',
                        '2xl': '100%',
                        md: '210px',
                      }}
                      height={{
                        base: '100%',
                        xl: '100%',
                        '2xl': '100%',
                        md: '116px',
                      }}
                    />
                  </Box>
                  <Box
                    style={{
                      padding: '16px',
                      boxSizing: ' border-box',
                    }}
                  >
                    <Box
                      style={{
                        color: 'rgba(255,255,255,1)',
                        //   fontSize: '18px',
                        fontWeight: ' 500',
                        textAlign: 'left',
                        lineHeight: '24px',
                      }}
                      fontSize="0.8vw"
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
                      {/* <Box
                      style={{
                        width: '8px',
                        height: ' 8px',
                        background: ' #0049C6',
                        borderRadius: '50%',
                        marginRight: '9px',
                      }}
                    ></Box> */}
                      <Box
                        style={{
                          color: 'rgba(128,129,145,1)',
                          fontWeight: '400',
                          textAlign: 'right',
                          lineHeight: ' 16px',
                          marginRight: '14px',
                        }}
                        fontSize="0.3vw"
                      >
                        {item.twitterFollower} followers
                      </Box>
                      {/* <Box
                      style={{
                        width: '8px',
                        height: ' 8px',
                        background: ' #7FBA7A',
                        borderRadius: '50%',
                        marginRight: '9px',
                      }}
                    ></Box> */}
                      <Box
                        style={{
                          color: 'rgba(128,129,145,1)',
                          fontWeight: '400',
                          textAlign: 'right',
                          lineHeight: ' 16px',
                        }}
                        fontSize="0.6vw"
                      >
                        {item.activeUsers} players
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
                          sm: '12px',
                        }}
                        marginRight={{
                          base: '2%',
                          md: '6px',
                          xl: '2%',
                          '2xl': '2%',
                          sm: '6px',
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
                            sm: '12px',
                          }}
                          maxW={{
                            base: '10%',
                            md: '12px',
                            xl: '100%',
                            '2xl': '100%',
                            sm: '12px',
                          }}
                          height={{
                            base: '10%',
                            md: '12px',
                            xl: '100%',
                            '2xl': '100%',
                            sm: '12px',
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
                        fontSize="0.6vw"
                      >
                        {item.gameStudio}®
                      </Box>
                    </Box>
                  </Box>
                  <HSeparator></HSeparator>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: ' 13px 21px 11px 21px',
                      boxSizing: ' border-box',
                    }}
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
                        }}
                        height={{
                          base: '20px',
                          md: '16px',
                          xl: '20px',
                          '2xl': '24px',
                        }}
                        fontSize="0.6vw"
                        lineHeight={{
                          base: '20px',
                          md: '16px',
                          xl: '20px',
                          '2xl': '24px',
                        }}
                      >
                        Alpha
                      </Box>
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
                        fontSize="0.6vw"
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
                        justifyContent: 'space-between',
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
                        justifyContent: 'space-between',
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
                      >
                        volume
                      </Box>
                      <Box
                        style={{
                          color: 'rgba(255,255,255,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                      >
                        {item.volume}%
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
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
                      >
                        totalNFT
                      </Box>
                      <Box
                        style={{
                          color: 'rgba(255,255,255,1)',
                          fontWeight: '400',
                          textAlign: 'left',
                        }}
                        fontSize="12px"
                      >
                        {item.totalNFT}%
                      </Box>
                    </Box>
                    <Flex justifyContent="flex-end">
                      <Box
                        style={{
                          borderRadius: ' 8px',
                          background: 'rgba(108,93,211,1)',
                        }}
                        width="70px"
                        height="20px"
                      >
                        <Text
                          style={{
                            color: 'rgba(255,255,255,1)',

                            fontWeight: ' 400',
                            textAlign: ' center',
                            lineHeight: ' 20px',
                          }}
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
