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
import checkIcon from 'assets/img/users/check-icon.png'
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
import { isMobile } from './until.js'
import CoreNfts from '../../../../../../assets/img/logo/gameThree.png'
import '../index.css'
export default function Banner(props) {
  const { game } = props
  const uId = localStorage.getItem('uId')
  const moon = game.moon == 0 ? 1 : game.moon
  const ngmi = game.ngmi == 0 ? 1 : game.ngmi
  const [good, setGood] = useState('')
  const [bad, setBad] = useState('')
  const [isLike, setIsLike] = useState(false)
  const [CoreData, setCoreData] = useState([
    {
      CoreNft: CoreNfts,
      BackersNft: CoreNfts,
    },
    {
      CoreNft: CoreNfts,
      BackersNft: CoreNfts,
    },
    {
      CoreNft: CoreNfts,
      BackersNft: CoreNfts,
    },
    {
      CoreNft: CoreNfts,
      BackersNft: CoreNfts,
    },
    {
      CoreNft: CoreNfts,
      BackersNft: CoreNfts,
    },
  ])
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
        fontSize={{ sm: '32px', md: '24px' }}
        fontWeight=" 500"
        textAlign="left"
        lineHeight="32px"
        className="font-Inter-SemiBold"
        marginBottom={{ sm: '7.2vw', md: '26px' }}
      >
        <Text fontSize="16px" display={{ md: 'none' }}>
          Game
        </Text>
        Overview
      </Text>
      <Box bg={{ sm: 'none', md: '#111C44' }} borderRadius="22px">
        <div>
          <Box
            width="100%"
            backgroundColor="rgba(17,28,68,1)"
            borderRadius="22px"
            overflow="hidden"
            height={{ sm: '140vw', base: '385px', xl: '385px', '2xl': '492px' }}
            position="relative"
          >
            <Players
              width="100%"
              bordeRadius="32px"
              src={game.videos[0].url}
            ></Players>
            <Flex
              position="absolute"
              bottom="1px"
              textAlign="center"
              width="100%"
              padding={{ sm: '4vw', md: '0' }}
              display={{ sm: 'block', md: 'none' }}
            >
              <Box
                fontSize={{ sm: '6.4vw', md: '2vw' }}
                textAlign="left"
                fontWeight={500}
                color="#fff"
                marginTop="2.6vw"
                marginBottom="6.4vw"
                padding="0 1vw"
                lineHeight="1.2vw"
                alignItems="center"
                className="font-Inter-SemiBold"
              >
                {game.name}
              </Box>
              <Flex
                marginTop={{ sm: '7.2vw', md: '1.3vw' }}
                padding="0 1vw"
                alignItems="center"
              >
                <Image
                  style={{
                    borderRadius: '50%',
                  }}
                  width={{ sm: '6.4vw', md: '1.1vw' }}
                  height={{ sm: '6.4vw', md: '1.1vw' }}
                  marginRight={{ sm: '2.1vw', md: '0.4vw' }}
                  src={game.gameUserIcon}
                  alt=""
                />
                <Text
                  style={{
                    fontWeight: '400',
                    // fontSize: '0.6vw',
                    lineHeight: '1.1vw',
                    // color: ' #B2B3BD',
                  }}
                  color={{ sm: '#fff', md: '#B2B3BD' }}
                  fontSize={{ sm: '3.7vw', md: '0.6vw' }}
                >
                  <Text as="span" marginRight={{ sm: '3.5vw', md: '0' }}>
                    {game.gameStudio}®
                  </Text>
                  <span
                    style={{ color: '#fff', margin: '0 6px', fontSize: '16px' }}
                  >
                    ·
                  </span>
                  {game.genres}
                </Text>
              </Flex>
              <Button
                variant="brand"
                width="82.9vw"
                bgColor="#6C5DD3"
                height="14.7vw"
                h={{
                  base: '54px',
                  sm: '56px',
                  xl: '54px',
                  '2xl': '72px',
                }}
                fontWeight="500"
                fontSize="14px"
                onClick={() => {
                  window.open(game.gameUrl)
                }}
                _hover={{
                  bgColor: 'rgba(108,93,211 ,0.6)',
                }}
                borderRadius="16px"
                marginTop="6.4vw"
              >
                Play Now
              </Button>
            </Flex>
          </Box>
        </div>
        <Box
          p={{
            base: '24px 10px',
            sm: '0',
            md: '20px 10px',
            xl: '30px 36px 18px 24px ',
            '2xl': '40px 49px 23px 32px',
          }}
          borderBottom={{ sm: '0', md: '1px solid  rgba(228, 228, 228,0.1)' }}
        >
          <Badge
            variant="solid"
            minWidth="92px"
            height="26px"
            textAlign="center"
            fontSize="13px"
            fontWeight="400"
            bg="#7FBA7A"
            display={{ sm: 'none', md: 'inline-block' }}
          >
            {game.version}
          </Badge>
          <Text
            as="p"
            fontWeight="500"
            fontSize="1.6vw"
            m="12px 0 14px 0"
            display={{ sm: 'none', md: 'block' }}
          >
            {game.name}
          </Text>
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: 'column', xl: 'row' }}
            background="#111C44"
            borderRadius="24px"
            padding={{ sm: '7vw 1.4vw 7vw 4.4vw', md: '0' }}
            m={{ sm: '8.5vw 0 12vw', md: '0' }}
            position="relative"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width=" 100%"
            >
              <Flex>
                <Box>
                  <Image
                    src={game.imgs[0].url}
                    width={{ sm: '19.2vw', md: '4.2vw' }}
                    height={{ sm: '19.2vw', md: '4.2vw' }}
                    border={{ sm: '3.55556px solid #0049C6', md: '0' }}
                    borderRadius="50%"
                  ></Image>
                </Box>
                <Box
                  ml="24px"
                  fontSize={{ sm: '6.4vw', md: '0.95vw' }}
                  fontWeight="500"
                >
                  <Flex m="8px 0">
                    <Text
                      mr={{ sm: '17px', md: '9px' }}
                      lineHeight="24px"
                      className="font-Inter-SemiBold"
                    >
                      {game.twtter}
                    </Text>
                    <Image
                      src={isMobile() ? checkIcon : twitter}
                      width={{ sm: '16px', md: '26px' }}
                      height={{ sm: '16px', md: '26px' }}
                    ></Image>
                  </Flex>
                  <Box m="8px 0" fontSize={{ sm: '3.7vw', md: '0.95vw' }}>
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
                  width={{
                    base: '144px',
                    sm: '120px',
                    xl: '144px',
                    '2xl': '194px',
                  }}
                  bgColor="#6C5DD3"
                  height="2.8vw"
                  h={{
                    base: '54px',
                    sm: '50px',
                    xl: '54px',
                    '2xl': '72px',
                  }}
                  fontWeight="500"
                  fontSize={{
                    base: '1.3vw',
                    sm: '20px',
                  }}
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
          </Flex>
        </Box>
        {/* <Flex
          p={{
            sm: '5px 10px',
            md: '14px 34px',
            base: '14px 34px',
            '2xl': '25px 34px',
          }}
          display={{ sm: 'none', md: 'block' }}
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
        {/* </Stack> */}
        {/* </Flex> */}
        <Flex
          justifyContent="space-between"
          w="100%"
          padding="12px 49px 31px 32px"
        >
          <Box>
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="500"
              fontSize="18px"
              lineHeight="24px"
              color="#FFFFFF"
            >
              Core Asset
            </Text>
            <Flex
              width={{
                xl: '300px',
                '2xl': '468px',
              }}
              justifyContent="space-between"
              marginTop="30px"
            >
              {CoreData.map((item, index) => {
                return (
                  <Box
                    position="relative"
                    className="CoreNftImg"
                    cursor="pointer"
                  >
                    <Image
                      src={item.CoreNft}
                      w={{ xl: '47px', '2xl': '72px' }}
                      h={{ xl: '47px', '2xl': '72px' }}
                    />
                    <Box className="CoreNftHover">
                      Each Axie NFT has unique strengths and weaknesses due to
                      its genes and you can even breed Axies to create
                      offspring.
                    </Box>
                  </Box>
                )
              })}
            </Flex>
          </Box>
          <Box>
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="500"
              fontSize="18px"
              lineHeight="24px"
              color="#FFFFFF"
            >
              Backers
            </Text>
            <Flex
              w={{ xl: '260px', '2xl': '300px' }}
              justifyContent="space-between"
              marginTop="34px"
            >
              {CoreData.map((item, index) => {
                return (
                  <Box>
                    <Image
                      src={item.BackersNft}
                      w={{ xl: '38px', '2xl': '47px' }}
                      h={{ xl: '38px', '2xl': '47px' }}
                    />
                  </Box>
                )
              })}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}
