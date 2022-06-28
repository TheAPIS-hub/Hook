import './index.css'
import { Box, color, Flex, Grid, Text, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import backLogo from 'assets/svg/BgImage.svg'
import React, { useEffect, useState } from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'
import hot from '../../../../../assets/img/logo/HotImg.png'
import {
  getSearchDatas,
  setSearchHeats,
  getSearchRank,
} from '../../../../../hook/hook'
export default function Track(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [inputValue, setInputValue] = useState('')
  const [TrendingData, setTrendingData] = useState([
    // {
    //   rank: '0',
    //   heat: '1',
    //   searchName: '0xcb6985e04ab3cacdf8e0a83...',
    // },
    // {
    //   rank: '1',
    //   heat: '1',
    //   searchName: '0xcb6985e04ab3cacdf8e0a83...',
    // },
    // {
    //   rank: '2',
    //   heat: '1',
    //   searchName: '0xcb6985e04ab3cacdf8e0a83...',
    // },
    // {
    //   rank: '3',
    //   heat: '1',
    //   searchName: '0xcb6985e04ab3cacdf8e0a83...',
    // },
    // {
    //   rank: '4',
    //   heat: '1',
    //   searchName: '0xcb6985e04ab3cacdf8e0a83...',
    // },
    // {
    //   rank: '5',
    //   heat: '1',
    //   searchName: '0xcb6985e04ab3cacdf8e0a83...',
    // },
  ])
  const history = useHistory()
  useEffect(() => {
    getSearchRank(6).then((res) => {
      setTrendingData(res.data.data)
    })
  })
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Image src={backLogo} alt="Horizon UI" height="250px" w="100%" />
      <Box className="PortfolioText">Portfolio Track</Box>
      <Box className="VisualizeText">Track any wallets you want.</Box>
      <InputGroup
        w={{ base: '100%', md: '860px' }}
        borderRadius="20px"
        border="1px solid #a3aed059"
        height="60px"
        margin="auto"
        marginTop="50px"
        backgroundColor=" #111C44"
        {...rest}
      >
        <InputLeftElement
          children={
            <IconButton
              bg="inherit"
              borderRadius="inherit"
              _hover="none"
              _active={{
                bg: 'inherit',
                transform: 'none',
                borderColor: 'transparent',
              }}
              _focus={{
                boxShadow: 'none',
              }}
              paddingTop="20px"
              icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
            ></IconButton>
          }
        />
        <Input
          variant="search"
          bg={background ? background : inputBg}
          fontStyle="normal"
          backgroundColor=" #111C44"
          fontWeight="400"
          fontSize="14px"
          lineHeight="20px"
          letterSpacing="-0.28px"
          color="#A3AED0"
          paddingTop="30px"
          _placeholder={{ color: 'gray.400', fontSize: '14px' }}
          borderRadius={borderRadius ? borderRadius : '30px'}
          placeholder={
            placeholder ? placeholder : 'Search by Ens/ Ethereum address '
          }
          onChange={(value) => {
            setInputValue(value.target.value)
          }}
          onKeyDown={(res) => {
            if (res.keyCode === 13) {
              getSearchDatas(inputValue.toLowerCase()).then((searchRes) => {
                if (searchRes.data.code == 200) {
                  if (searchRes.data.data.tokenBalance.code == 1) {
                    localStorage.setItem(
                      'searchData',
                      JSON.stringify(searchRes.data.data)
                    )
                    localStorage.setItem(
                      'searchAddress',
                      inputValue.toLowerCase()
                    )
                    setSearchHeats(inputValue.toLowerCase())
                    history.push({ pathname: '/admin/info' })
                  } else {
                    history.push({ pathname: '/admin/profile/searcherr' })
                  }
                }
              })
            }
          }}
        />
      </InputGroup>

      <Flex
        margin="auto"
        marginTop="22px"
        alignItems="center"
        w={{ base: '100%', md: '860px' }}
      >
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="600"
          fontSize=" 18px"
          lineHeight="24px"
          letterSpacing="-0.36px"
          color="#FFFFFF"
          mr={10}
        >
          Trending Wallet
        </Text>

        <ChevronRightIcon w={6} h={6} color="#ffffff" />
      </Flex>
      <Box
        margin="auto"
        marginTop="22px"
        w={{ base: '100%', md: '860px' }}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {TrendingData.map((item, index) => {
          return (
            <Flex alignItems="center" width="322px" mb="16px">
              <Box
                marginRight="14px"
                textAlign="center"
                width="17px"
                height="24px"
                fontWeight="600"
                fontSize="18px"
                lineHeight="24px"
              >
                {index === 0 ? (
                  //   <Image src={hot} width="17px" height="24px" />
                  <>🔥</>
                ) : index === 1 ? (
                  <Box style={{ color: '#F13016' }}>{index}</Box>
                ) : index === 2 ? (
                  <Box style={{ color: '#FF6A36' }}>{index}</Box>
                ) : index === 3 ? (
                  <Box style={{ color: '#FFD44E' }}>{index}</Box>
                ) : (
                  index
                )}
              </Box>
              <Box>
                <Box
                  fontWeight="400"
                  color="#3899D0"
                  letterSpacing="-0.36px"
                  onClick={(e) => {
                    // console.log()
                    getSearchDatas(e.target.innerText.toLowerCase()).then(
                      (searchRes) => {
                        if (searchRes.data.code == 200) {
                          if (searchRes.data.data.tokenBalance.code == 1) {
                            localStorage.setItem(
                              'searchData',
                              JSON.stringify(searchRes.data.data)
                            )
                            localStorage.setItem(
                              'searchAddress',
                              e.target.innerText.toLowerCase()
                            )
                            setSearchHeats(e.target.innerText.toLowerCase())
                            history.push({ pathname: '/admin/info' })
                          } else {
                            history.push({
                              pathname: '/admin/profile/searcherr',
                            })
                          }
                        }
                      }
                    )
                  }}
                  _hover={{ color: '#4264a1' }}
                  width="271px"
                  overflow="hidden"
                  display="block"
                  wordBreak="keep-all"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  cursor="pointer"
                >
                  {item.searchName}
                </Box>
              </Box>
            </Flex>
          )
        })}
      </Box>
    </Box>
  )
}
