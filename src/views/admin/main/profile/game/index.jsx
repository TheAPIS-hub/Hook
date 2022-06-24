import './index.css'
import { Box, Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
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
import { SearchIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'
import { getSearchDatas, setSearchHeats } from '../../../../../hook/hook'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import gameThree from '../../../../../assets/img/logo/gameThree.png'
import AllGamePage from '../allGame/index'
import { getGameItemsDatas } from '../../../../../hook/hook'
import { formatNumber } from '../../../../../hook/untils'
import { isMobile } from '../gameDetail/compoments/until.js'

export default function Track(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()

  const [swiperData, setSwiperData] = useState([
    {
      gpId: '07dc32c1d5564f8cb4e59c7916ed41e0',
      name: 'Town star',
      genres: 'Simulation',
      version: 'Beta',
      tokenHash: '0x3Dd98C8A089dBCFF7e8FC8d4f532BD493501Ab7F',
      initialReleaseDate: 1582905600000,
      twitterFollower: 361843,
      activeUsers: 42884,
      gameStudio: 'Gala Games',
      volume: '160107',
      gameIntroduction:
        'Farming with a Competitive Twist!\r\nTown Star is a competitive farming game from one of the co-founders of Zynga, the company behind Farmville. Each week, the top players on the leaderboard win big prizes, and every day, players complete challenges to unlock and collect TownCoin play-to-earn rewards! The goal is to grow, gather and craft your way to building the most efficient and productive town imaginable. Will you be a Town Star?\r\n\r\nThe Power of Blockchain\r\nTown Star is the flagship game of Gala Games, built on Gala’s decentralized network and utilizing the Ethereum blockchain. Player-owned NFTs offering in-game advantages can be purchased and traded on secondary markets!',
      totalNFT: 0,
      gameUrl: 'https://townstar.com/',
      dataUrl: '',
      liked: 0,
      ngmi: 0,
      moon: 0,
      twtter: 'GoGalaGames',
      backPeriod: 8,
      openseaName: 'town-star',
      videos: [
        {
          gfId: '38de21951f2549988bd88fc4d4b88d7e',
          url: 'https://static.gala.games/images/town-star/videos/ts_P2E_vid.mp4',
          type: 1,
          name: 'Town Star',
        },
      ],
      imgs: [
        {
          gfId: '18945661741446e5a7c41e9545bca434',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/TownStar4.webp',
          type: 2,
          name: 'Town Star',
        },
        {
          gfId: 'c0172c971b3d404bb2209cbf3033e13c',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/TownStar1.jpeg.lin.jpeg',
          type: 2,
          name: 'Town Star',
        },
        {
          gfId: '1e75292aa1f943c9983a86b72cba6bbf',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/TownStar3.jpeg.lin.jpeg',
          type: 2,
          name: 'Town Star',
        },
        {
          gfId: '92412b55af584392bea47a5072e3f08a',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/TownStar2.jpeg.lin.jpeg',
          type: 2,
          name: 'Town Star',
        },
      ],
    },
    {
      gpId: '1acf6c9c34a7427f83a84ef34a4e3c02',
      name: 'Decentral land',
      genres: 'Sandbox',
      version: '3.10.3',
      tokenHash: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
      initialReleaseDate: 1582128000000,
      twitterFollower: 629546,
      activeUsers: 245767,
      gameStudio: 'Decentraland Foundation',
      volume: '353602828',
      gameIntroduction:
        'Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members.',
      totalNFT: 90601,
      gameUrl: 'https://decentraland.org/',
      dataUrl: 'https://dappradar.com/ethereum/marketplaces/decentraland',
      liked: 0,
      ngmi: 0,
      moon: 0,
      twtter: 'decentraland',
      backPeriod: 6,
      openseaName: 'decentraland',
      videos: [
        {
          gfId: '29534c5e582e4e8d8174b0d7b078d3ce',
          url: 'https://www.youtube.com/embed/Vut_tqyw_2U',
          type: 1,
          name: 'Decentral land',
        },
      ],
      imgs: [
        {
          gfId: '93729aca515b4e0aa26badf66887e0f6',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/Decentraland4.png.lin.png',
          type: 2,
          name: 'Decentral land',
        },
        {
          gfId: 'c1d0ac92ebd74f37b853b699a9148aa4',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/decentraland%203.png.lin.png',
          type: 2,
          name: 'Decentral land',
        },
        {
          gfId: '9fd0c23b31d64a4098a5d9cf9e49a41d',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/Decentraland2.png.lin.png',
          type: 2,
          name: 'Decentral land',
        },
        {
          gfId: '24d8ad1cc8dc433f9dd2f772ed1d8dcf',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/decentraland%201.jpeg.lin.jpeg',
          type: 2,
          name: 'Decentral land',
        },
        {
          gfId: 'd468856df69e448ba4b73d4ef3390618',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/decentraland4.jpeg.lin.jpeg',
          type: 2,
          name: 'Decentral land',
        },
      ],
    },
    {
      gpId: '49a058ab1e184ddfa723e9050e7ed84f',
      name: 'Thetan arena',
      genres: 'MOBA',
      version: '320',
      tokenHash: '0x9fd87aefe02441b123c3c32466cd9db4c578618f',
      initialReleaseDate: 1601395200000,
      twitterFollower: 350545,
      activeUsers: 8991,
      gameStudio: 'Wolffun',
      volume: '907636',
      gameIntroduction:
        'Earn your NFTs item by playing the game and sell it on the marketplace to make money',
      totalNFT: 0,
      gameUrl: 'https://thetanarena.com/',
      dataUrl: '',
      liked: 0,
      ngmi: 0,
      moon: 0,
      twtter: 'ThetanArena',
      backPeriod: 9,
      openseaName: 'thetan-arena',
      videos: [
        {
          gfId: '93ffcdf58a854fc2b55d1c35e5f678fb',
          url: 'https://www.youtube.com/embed/YlP8C390SsQ',
          type: 1,
          name: 'Thetan arena',
        },
      ],
      imgs: [
        {
          gfId: 'df99e2432a4448cda810d9b946eaaa28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/Thetan%20arena4.png.lin.png',
          type: 2,
          name: 'Thetan arena',
        },
        {
          gfId: '046342ec8ff54b59b13c1edca8aa3628',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/Thetan%20arena2.jpeg.lin.jpeg',
          type: 2,
          name: 'Thetan arena',
        },
        {
          gfId: '958b1a4bd1d94db9b5a802d0e7b6be0f',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/Thetan%20arena3.png.lin.png',
          type: 2,
          name: 'Thetan arena',
        },
        {
          gfId: 'b210bbf4c3294071b4909d85c7e63f91',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/Thetan%20arena1.png.lin.png',
          type: 2,
          name: 'Thetan arena',
        },
      ],
    },
    {
      gpId: '6eabe3204a8b4da69bbe04eacf023309',
      name: 'illuvium',
      genres: 'Sandbox',
      version: 'Beta',
      tokenHash: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
      initialReleaseDate: 0,
      twitterFollower: 302638,
      activeUsers: 18652,
      gameStudio: 'Illuvium',
      volume: '21909050',
      gameIntroduction:
        'Join the fight for ETH\r\nWelcome to the world of Illuvium.',
      totalNFT: 0,
      gameUrl: 'https://www.illuvium.io/',
      dataUrl: '',
      liked: 0,
      ngmi: 0,
      moon: 0,
      twtter: 'illuviumio',
      backPeriod: 12,
      openseaName: 'illuvium',
      videos: [
        {
          gfId: '975aa07dc84245a680132af5c903b2fd',
          url: 'https://www.youtube.com/embed/mzT88eN4gts',
          type: 1,
          name: 'illuvium',
        },
      ],
      imgs: [
        {
          gfId: '1fcc186139704278af270189d914dd28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/illuvium1.webp',
          type: 2,
          name: 'illuvium',
        },
        {
          gfId: 'cdfe5e8dcf1640e797544ffe80be170f',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/illuvium2.jpeg.lin.jpeg',
          type: 2,
          name: 'illuvium',
        },
        {
          gfId: '8700882a27184cd289ee4c9b9c1e7a89',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/image.webp',
          type: 2,
          name: 'illuvium',
        },
      ],
    },
    {
      gpId: 'a623b83b72b245e7ad02ef36225a56a4',
      name: 'Axie Infinity',
      genres: 'Strategy',
      version: '1.2.3',
      tokenHash: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      initialReleaseDate: 1521475200000,
      twitterFollower: 956470,
      activeUsers: 51963,
      gameStudio: 'Sky Mavis',
      volume: '169383579',
      gameIntroduction:
        'Build unstoppable teams of Axies and conquer your enemies!\r\nEach Axie has unique strengths and weaknesses based on its genes. With billions of possible genetic combinations, the possibilities are truly infinite!',
      totalNFT: 695862,
      gameUrl: 'https://axieinfinity.com/ ',
      dataUrl: 'https://marketplace.axieinfinity.com/',
      liked: 0,
      ngmi: 0,
      moon: 0,
      twtter: 'AxieInfinity',
      backPeriod: 18,
      openseaName: 'sky-mavis',
      videos: [
        {
          gfId: '85c8fa283394406c858a870b6f23fa23',
          url: 'https://www.youtube.com/embed/X2z_YIeettE',
          type: 1,
          name: 'Axie infinity',
        },
      ],
      imgs: [
        {
          gfId: '042ad0b923624749b29f8ed0a2d64cd2',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/axie%20infinity%203.png.lin.png',
          type: 2,
          name: 'Axie infinity',
        },
        {
          gfId: 'b26a2049ae6641e9a2226cf660c6a280',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/Axie%20infinity%201.png.lin.png',
          type: 2,
          name: 'Axie infinity',
        },
        {
          gfId: '721a8511d17044b7b7d05d22e821e5e8',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/axie%20infinity%202.png.lin.png',
          type: 2,
          name: 'Axie infinity',
        },
      ],
    },
  ])
  const swiper = () => {
    // new Swiper('.swiper-container1', {
    //   effect: 'coverflow',
    //   loop: true,

    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: 2,
    //   spaceBetween: -200,
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 500,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   breakpoints: {
    //     1024: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     768: {
    //       slidesPerView: 1,
    //       spaceBetween: 30,
    //     },
    //     640: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //     },
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //     },
    //   },
    // })
    new Swiper('.swiper-container1', {
      loop: true,
      //   speed: 1000,
      //   autoplay: {
      //     delay: 3000,
      //   },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    if (isMobile()) {
      new Swiper('.swiper-container2', {
        loop: true,
        // speed: 1000,
        // autoplay: {
        //   delay: 3000,
        // },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
  const [isShowCreate, setIsShowCreate] = useState(false)

  useEffect(() => {
    swiper()
    getGameItemsDatas(1, 5).then((res) => {
      console.log(res)
      localStorage.setItem('gameListData', JSON.stringify(res.data.data))
      setSwiperData(res.data.data.records)
    })
  }, [])
  return (
    <>
      {isMobile() ? (
        <Box className="MGames">
          <Box className="MGameTitle">Game</Box>
          <Box className="MGaming">Games and Beyond</Box>
          <Flex justifyContent="center">
            <Box
              className="swiper-container2"
              style={{
                width: '1000px',
                display: 'flex',
                // marginLeft: ' 212px',
                overflow: 'hidden',
                position: 'relative',
                // left: '3vw',
              }}
            >
              <Box className="swiper-wrapper">
                {swiperData.length &&
                  swiperData.map((item, index) => {
                    return (
                      <Box className="swiper-slide">
                        <Box
                          style={{
                            height: '467px',
                            width: '266px',
                            borderRadius: '26px',
                            backgroundColor: '#111C44',
                            padding: '12px',
                            boxSizing: 'border-box',
                          }}
                        >
                          <Box>
                            <Image
                              //   width="249px"
                              borderRadius="26px"
                              height="238px"
                              src={item.imgs[0].url}
                              alt=""
                            />
                          </Box>

                          <Box
                            style={{ padding: '35px', boxSizing: 'border-box' }}
                          >
                            <Box
                              style={{
                                width: '96px',
                                height: '26px',
                                borderRadius: '8px',
                                background: '#6C5DD3',
                                color: '#beb9ff',
                                fontSize: '14px',
                                textAlign: ' center',
                                lineHeight: ' 26px',
                                fontWeight: ' 400',
                              }}
                            >
                              {item.genres}
                            </Box>
                            <Box
                              style={{
                                color: '#FFFFFF',
                                fontSize: '20px',
                                fontWeight: '500',
                                textAlign: 'left',
                                marginTop: '12px',
                              }}
                            >
                              {item.name}
                            </Box>
                            <Box
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '12px',
                              }}
                            >
                              <Box
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  background: '#5CF54F',
                                  borderRadius: '50%',
                                  marginRight: '8px',
                                }}
                              ></Box>
                              <Box
                                style={{
                                  color: '#808191',
                                  fontWeight: '400',
                                  fontSize: '12px',
                                }}
                              >
                                {formatNumber(item.twitterFollower)} followers
                              </Box>
                            </Box>
                            <Flex className="ViewAndMaCreateBtn">
                              <Box
                                className="VIewBtn"
                                style={{
                                  width: '130px',
                                  height: '52px',
                                  borderRadius: ' 18px',
                                  background: '#7551FF',
                                  color: 'rgba(255,255,255,1)',
                                  fontSize: '16px',
                                  fontWeight: '900',
                                  textAlign: ' center',
                                  lineHeight: '52px',
                                  cursor: 'pointer',
                                }}
                                onClick={() => {
                                  localStorage.setItem(
                                    'game',
                                    JSON.stringify(item)
                                  )

                                  history.push({
                                    pathname: '/admin/profile/gameDetail',
                                  })
                                }}
                              >
                                View
                              </Box>
                              <Box
                                className="MaCreateBtn"
                                onClick={() => {
                                  setIsShowCreate(true)
                                }}
                              >
                                <Box className="iconfont MCreateBtn">
                                  &#xe726;
                                </Box>
                              </Box>
                            </Flex>
                          </Box>
                        </Box>
                      </Box>
                    )
                  })}
              </Box>
              {isShowCreate ? (
                <Box className="MShowCreate">
                  <Flex justifyContent="flex-end" p="5px 10px">
                    <Box
                      className="iconfont"
                      onClick={() => {
                        setIsShowCreate(false)
                      }}
                      color="#F0F3F6"
                      textAlign="right"
                      fontSize="28px"
                      w="32px"
                      h="32px"
                    >
                      &#xe61a;
                    </Box>
                  </Flex>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#000',
                      fontSize: '17px',
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      lineHeight: '23px',
                    }}
                  >
                    Create Project
                  </Text>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdGpIutxIjaaC3i_wnli1B3_wY5rU91o7UpNqpeISbz2AHnrg/viewform"
                    marginRight="35px"
                  >
                    <Box
                      className="VIewBtn"
                      style={{
                        width: '84px',
                        height: '53px',
                        lineHeight: '53px',
                        borderRadius: '24px',
                        fontWeight: '600',
                        textAlign: 'center',
                        background: 'rgba(117,81,255,1)',
                        margin: '0 auto',
                        marginTop: '22px',
                      }}
                    >
                      Yes
                    </Box>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Flex>
          <Link href="#/admin/profile/allGame" marginRight="35px">
            <Box
              className="VIewBtn"
              style={{
                width: '244px',
                height: '71.76px',
                borderRadius: '24.959999084472656px',
                background: 'rgba(117,81,255,1)',
                margin: 'auto',
                color: ' rgba(255,255,255,1)',
                fontSize: ' 21.84px',
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '71.76px',
                marginTop: '113.24px',
              }}
            >
              Explore all games
            </Box>
          </Link>
        </Box>
      ) : (
        <Box
          className="swipperBox"
          transform={{ sm: 'scale(0.9)', md: 'scale(0.8)' }}
          marginTop={{ sm: '44px', md: '-20px' }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              position: 'relative',
              width: '100%',
            }}
          >
            <Box className="Gaming">GAMES and Beyond</Box>
            <Box
              className="CreateBtn"
              style={{
                width: '114px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(207,200,255,1)',
                color: 'rgba(95,117,238,1)',
                fontSize: '13px',
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: '48px',
                // marginBottom: '48px',
                position: 'absolute',
                right: '10px',
              }}
              top={{ sm: '-27%', md: 'initial' }}
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGpIutxIjaaC3i_wnli1B3_wY5rU91o7UpNqpeISbz2AHnrg/viewform">
                Create Project
              </a>
            </Box>
          </Box>

          <Box className=" challenge">From GAME to GAMES and beyond.</Box>
          <Box className=" challengeText">
            Takes you on a journey to explore bigger crypto game worlds, all in
            one.
          </Box>
          <Flex justifyContent="center">
            <Box
              className="swiper-container1"
              style={{
                width: '1000px',
                display: 'flex',
                // marginLeft: ' 212px',
                overflow: 'hidden',
                position: 'relative',
                // left: '3vw',
              }}
            >
              <Box className="swiper-wrapper">
                {swiperData.length &&
                  swiperData.map((item, index) => {
                    return (
                      <Box className="swiper-slide">
                        <Box
                          style={{
                            height: '467px',
                            width: '266px',
                            borderRadius: '26px',
                            backgroundColor: '#111C44',
                            padding: '12px',
                            boxSizing: 'border-box',
                          }}
                        >
                          <Box>
                            <Image
                              width="249px"
                              borderRadius="26px"
                              height="238px"
                              src={item.imgs[0].url}
                              alt=""
                            />
                          </Box>

                          <Box
                            style={{ padding: '35px', boxSizing: 'border-box' }}
                          >
                            <Box
                              style={{
                                width: '96px',
                                height: '26px',
                                borderRadius: '8px',
                                background: '#6C5DD3',
                                color: '#beb9ff',
                                fontSize: '14px',
                                textAlign: ' center',
                                lineHeight: ' 26px',
                                fontWeight: ' 400',
                              }}
                            >
                              {item.genres}
                            </Box>
                            <Box
                              style={{
                                color: '#FFFFFF',
                                fontSize: '20px',
                                fontWeight: '500',
                                textAlign: 'left',
                                marginTop: '12px',
                              }}
                            >
                              {item.name}
                            </Box>
                            <Box
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '12px',
                              }}
                            >
                              <Box
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  background: '#5CF54F',
                                  borderRadius: '50%',
                                  marginRight: '8px',
                                }}
                              ></Box>
                              <Box
                                style={{
                                  color: '#808191',
                                  fontWeight: '400',
                                  fontSize: '12px',
                                }}
                              >
                                {formatNumber(item.twitterFollower)} followers
                              </Box>
                            </Box>
                            <Box
                              className="VIewBtn"
                              style={{
                                width: '130px',
                                height: '52px',
                                borderRadius: ' 18px',
                                background: '#7551FF',
                                color: 'rgba(255,255,255,1)',
                                fontSize: '16px',
                                fontWeight: '900',
                                textAlign: ' center',
                                lineHeight: '52px',
                                marginTop: '13px',
                                cursor: 'pointer',
                              }}
                              onClick={() => {
                                localStorage.setItem(
                                  'game',
                                  JSON.stringify(item)
                                )

                                history.push({
                                  pathname: '/admin/profile/gameDetail',
                                })
                              }}
                            >
                              View
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    )
                  })}
              </Box>
            </Box>
          </Flex>
          <Link href="#/admin/profile/allGame" marginRight="35px">
            <Box
              className="VIewBtn"
              style={{
                width: '244px',
                height: '71.76px',
                borderRadius: '24.959999084472656px',
                background: 'rgba(117,81,255,1)',
                margin: 'auto',
                color: ' rgba(255,255,255,1)',
                fontSize: ' 21.84px',
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '71.76px',
                marginTop: '113.24px',
              }}
            >
              Explore all games
            </Box>
          </Link>
        </Box>
      )}
    </>
  )
}
