import React, { useEffect, useState } from 'react'

// Chakra imports
import {
  Flex,
  Image,
  Icon,
  Text,
  Box,
  Badge,
  Stack,
  Button,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import Transfer from 'components/dataDisplay/Transfer'
import Card from 'components/card/Card.js'
// Assets
import avatar1 from 'assets/img/avatars/avatar1.png'
import saleIcon from 'assets/img/users/saleIcon.png'
import volumeIcon from 'assets/img/users/volumeIcon.png'
import soldIcon from 'assets/img/users/soldIcon.png'
import twitter from 'assets/img/users/twitter.png'
import { MdMoreHoriz } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import { CgAdd } from 'react-icons/cg'
import Players from './player'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { toThousands } from './until.js'
import { FcLike } from 'react-icons/fc'
import { formatNumber, abc } from '../../../../../../hook/untils'
import likedIcon from 'assets/img/users/liked.png'
import { likedStatus } from '../../../../../../hook/hook'
import BigNumber from 'bignumber.js'

export default function Banner(props) {
  const { game } = props
  const uId = localStorage.getItem('uId')
  const moon = game.moon == 0 ? 1 : game.moon
  const ngmi = game.ngmi == 0 ? 1 : game.ngmi
  const [good, setGood] = useState('')
  const [bad, setBad] = useState('')
  const [isLike, setIsLike] = useState(false)
  useEffect(() => {
    setGood(((moon / (moon + ngmi)) * 100).toFixed(0) + '%')
    setBad(((ngmi / (moon + ngmi)) * 100).toFixed(0) + '%')
  }, [])
  const [isVote, voteFun] = useState(false)
  const toast = useToast()
  return (
    <div>
      <Text
        color=" rgba(255,255,255,1)"
        fontSize="24px"
        fontWeight=" 500"
        textAlign="left"
        lineHeight="32px"
        marginBottom="20px"
      >
        Overview
      </Text>
      <Box bg="#111C44" borderRadius="22px">
        <div>
          <Box
            width="100%"
            backgroundColor="rgba(17,28,68,1)"
            borderRadius="22px"
            overflow="hidden"
            height={{ base: '400px', xl: '400px', '2xl': '492px' }}
            position="relative"
          >
            <Players
              width="100%"
              bordeRadius="32px"
              src={game.videos[0].url}
            ></Players>
          </Box>
        </div>
        <Box
          p={{
            base: '24px auto',
            md: '20px 10px',
            xl: '30px 36px 18px 24px ',
            '2xl': '40px 49px 23px 32px',
          }}
          borderBottom="1px solid  rgba(228, 228, 228,0.1)"
        >
          <Badge
            variant="solid"
            minWidth="92px"
            height="26px"
            textAlign="center"
            fontSize="13px"
            fontWeight="400"
            bg="#7FBA7A"
          >
            {game.version}
          </Badge>
          <Text as="p" fontWeight="500" fontSize="1.6vw" m="12px 0 14px 0">
            {game.name}
          </Text>
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: 'column', xl: 'row' }}
          >
            <Flex alignItems="center">
              <Box>
                <Image
                  src={game.imgs[0].url}
                  width="4.2vw"
                  height="4.2vw"
                  borderRadius="50%"
                ></Image>
              </Box>
              <Box ml="24px" fontSize="0.95vw" fontWeight="500">
                <Flex m="8px 0">
                  <Text mr="9px" lineHeight="24px">
                    {game.twtter}
                  </Text>
                  <Image
                    src={twitter}
                    width="26px"
                    height="26px"
                    mr="35px"
                  ></Image>
                </Flex>
                <Box m="8px 0">
                  <Text as="span">
                    {formatNumber(game.twitterFollower)} followers
                  </Text>
                  <Text as="span" ml="24px">
                    {formatNumber(game.activeUsers)} players
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Box>
              <Button
                variant="brand"
                width={{
                  base: '144px',
                  xl: '144px',
                  '2xl': '194px',
                }}
                bgColor="#6C5DD3"
                height="2.8vw"
                h={{
                  base: '54px',
                  xl: '54px',
                  '2xl': '72px',
                }}
                fontWeight="500"
                fontSize="1.3vw"
                onClick={() => {
                  window.open(game.gameUrl)
                }}
                _hover={{
                  bgColor: 'rgba(108,93,211 ,0.6)',
                }}
              >
                Play Now!
              </Button>
            </Box>
          </Flex>
        </Box>
        <Flex
          p={{
            base: '14px 34px',
            '2xl': '25px 34px',
          }}
        >
          <Stack direction="row" wrap="wrap" spacing={4} align-items="center">
            {isLike ? (
              <Flex
                width="22px"
                height="22px"
                cursor="pointer"
                onClick={() => {
                  likedStatus(game.gpId, uId, 0).then((res) => {
                    if (res.data.code == 200) {
                      setIsLike(false)
                    } else {
                    }
                  })
                }}
              >
                <Image src={likedIcon} />
                <Text color="#808191" fontSize="14px" ml="6px" fontWeight="600">
                  {' '}
                  Like
                </Text>
              </Flex>
            ) : (
              <Button
                width="100px"
                height="50px"
                bgColor="transparent"
                leftIcon={<AiOutlineLike />}
                variant="brand"
                color="#808191"
                _hover={{
                  color: '#fff',
                  bgColor: '#6C5DD3',
                }}
                onClick={() => {
                  if (!uId) {
                    toast({
                      title: `please sign in`,
                      position: 'top',
                      status: 'warning',
                      isClosable: true,
                      duration: 1000,
                    })
                    return
                  }
                  likedStatus(game.gpId, uId, 1).then((res) => {
                    if (res.data.code == 200) {
                      setIsLike(true)
                    } else {
                    }
                  })
                }}
              >
                <Text> Like</Text>
              </Button>
            )}
            {/* <Button width="100px" height="50px" bgColor="transparent" leftIcon={<RiShareForwardLine />} variant="brand">
              <Text color="#808191;"> Share</Text>
            </Button>
            <Button width="170px" justifyContent="space-around" height="50px" bgColor="transparent" leftIcon={<CgAdd />} variant="brand">
              <Text color="#808191;"> Add to</Text>
            </Button>
            <IconButton
              borderRadius="10px"
              aria-label="Search database"
              fontWeight="500"
              w="37px"
              h="37px"
              fontSize="20px"
              icon={<MdMoreHoriz />}
            /> */}
          </Stack>
        </Flex>
      </Box>
      <Flex
        bg="rgba(228, 228, 228, 0.1)"
        margin="62px 0"
        borderRadius="16px"
        flexDirection={{ base: 'inherit;', xl: 'inherit', sm: 'column' }}
      >
        <Box
          width={{
            base: '100%',
            xl: '25%',
          }}
          p={{
            base: '10px 0 10px 10px',
            xl: '25px 0 25px 20px',
            '2xl': '30px 0 20px 60px',
          }}
          borderRight="1px solid rgba(228, 228, 228, 0.1)"
        >
          <Flex>
            <Image width="16px" height="16px" mr="8px" src={saleIcon}></Image>
            <Text fontSize="12px" color="#808191">
              Price
            </Text>
          </Flex>
          <Text
            fontSize={{
              base: 'xl',
              xl: 'xl',
              '2xl': '32px',
            }}
            mt="10px"
            fontWeight="600"
            fontFamily="Poppins"
            letterSpacing="-1px"
          >
            {toThousands(game.price)}
          </Text>
        </Box>
        <Box
          width={{
            base: '100%',
            xl: '40%',
          }}
          p={{
            base: '10px 0 10px 10px',
            xl: '25px 0 25px 20px',
            '2xl': '30px 0 20px 60px',
          }}
          borderRight="1px solid rgba(228, 228, 228, 0.1)"
        >
          <Flex>
            <Image width="16px" height="16px" mr="8px" src={volumeIcon}></Image>
            <Text fontSize="12px" color="#808191">
              Volume
            </Text>
          </Flex>
          <Text
            fontSize={{
              base: 'xl',
              xl: 'xl',
              '2xl': '32px',
            }}
            mt="10px"
            fontWeight="600"
            letterSpacing="-1px"
            fontFamily="Poppins"
          >
            Ξ {toThousands(new BigNumber(game.volume).toFixed(2))}
            <Text
              as="span"
              fontSize="18px"
              fontWeight="600"
              color="#808191"
              ml="18px"
            >
              ${toThousands((game.volume / 1000).toFixed(2))}K
            </Text>
          </Text>
        </Box>
        <Box
          width={{
            base: '100%',
            xl: '25%',
          }}
          p={{
            base: '10px 0 10px  10px',
            xl: '25px 0 25px 11%',
            '2xl': '30px 0 20px 11%',
          }}
        >
          <Flex>
            <Image width="16px" height="16px" mr="8px" src={soldIcon}></Image>
            <Text fontSize="12px" color="#808191">
              CirculatingSupply
            </Text>
          </Flex>
          <Text
            fontSize={{
              base: 'xl',
              xl: 'xl',
              '2xl': '32px',
            }}
            mt="10px"
            fontWeight="600"
            letterSpacing="-1px"
            fontFamily="Poppins"
          >
            {toThousands(new BigNumber(game.circulatingSupply).toFixed(2))}
          </Text>
        </Box>
      </Flex>
      <Flex
        border="1px solid rgba(228, 228, 228, 0.1)"
        borderRight="0px"
        borderLeft="0px"
        padding="40px 0"
        justifyContent="space-between"
      >
        {isVote ? (
          <Box width="48%">
            <Text fontSize="18px">Your‘ve voted-👍To da moon</Text>
            <Text fontSize="13px" color="#B2B3BD" width="80%" lineHeight="25px">
              Your vote for 24 hours. In order to update how you feel about{' '}
              {game.name},come back tomorrow!
            </Text>
          </Box>
        ) : (
          <Box width="48%" margin="14px 0">
            <Text fontSize="18px">
              How do you feel about {game.name} today？
            </Text>
            <Text fontSize="13px" color="#B2B3BD" width="80%">
              Vote to see community result
            </Text>
          </Box>
        )}
        {isVote ? (
          <Box width="48%" fontSize="13px" color="#B2B3BD" pt="10px">
            <Flex mb="20px">
              <Box
                height="1px"
                width={good}
                borderRight="1px"
                bgColor="#FF9A7B"
              ></Box>
              <Box
                height="1px"
                width={bad}
                borderRight="1px"
                bgColor="#6C5DD3"
              ></Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              fontSize="13px"
              color="#B2B3BD"
            >
              <Text> {good} To da moon&nbsp;👍 </Text>
              <Text>
                <Text
                  as="span"
                  transform="matrix(1, 0, 0, -1, 0, 0)"
                  display="inline-block"
                >
                  {' '}
                  👍
                </Text>
                &nbsp;{bad} Ngmi
              </Text>
            </Flex>
          </Box>
        ) : (
          <Box width="48%" fontSize="13px" color="#B2B3BD" pt="10px">
            <Flex
              justifyContent="end"
              fontSize="14px"
              fontWeight="700"
              color="#B2B3BD"
              margin="15px 0"
            >
              <Button
                width="140px"
                height="41px"
                border="1px solid rgba(225 225 225 / 0.5)"
                borderRadius="12px"
                background="transparent"
                mr="11px"
                onClick={(e) => {
                  if (!uId) {
                    toast({
                      title: `please sign in`,
                      position: 'top',
                      status: 'warning',
                      isClosable: true,
                      duration: 1000,
                    })
                    return
                  }
                  likedStatus(game.gpId, uId, 1).then((res) => {
                    if (res.data.code == 200) {
                    } else {
                    }
                  })
                  voteFun(!isVote)
                }}
              >
                👍 &nbsp;&nbsp;To da moon
              </Button>
              <Button
                width="109px"
                height="41px"
                border="1px solid rgba(225 225 225 / 0.5)"
                borderRadius="12px"
                background="transparent"
                onClick={(e) => {
                  if (!uId) {
                    toast({
                      title: `please sign in`,
                      position: 'top',
                      status: 'warning',
                      isClosable: true,
                      duration: 1000,
                    })
                    return
                  }
                  voteFun(!isVote)
                  likedStatus(game.gpId, uId, 1).then((res) => {})
                }}
              >
                <Text
                  as="span"
                  transform="matrix(1, 0, 0, -1, 0, 0)"
                  display="inline-block"
                >
                  👍&nbsp;&nbsp;
                </Text>
                Ngmi
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>
    </div>
  )
}
