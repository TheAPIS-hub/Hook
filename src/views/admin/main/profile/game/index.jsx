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
      name: 'Town Star',
      genres: 'Simulation',
      version: 'Beta',
      tokenHash: '0x3Dd98C8A089dBCFF7e8FC8d4f532BD493501Ab7F',
      initialReleaseDate: 1582905600000,
      twitterFollower: 373556,
      activeUsers: 14548,
      gameStudio: 'Gala Games',
      volume: '160107',
      gameIntroduction:
        'Farming with a Competitive Twist!\r\nTown Star is a competitive farming game from one of the co-founders of Zynga, the company behind Farmville. Each week, the top players on the leaderboard win big prizes, and every day, players complete challenges to unlock and collect TownCoin play-to-earn rewards! The goal is to grow, gather and craft your way to building the most efficient and productive town imaginable. Will you be a Town Star?\r\n\r\nThe Power of Blockchain\r\nTown Star is the flagship game of Gala Games, built on Gala’s decentralized network and utilizing the Ethereum blockchain. Player-owned NFTs offering in-game advantages can be purchased and traded on secondary markets!',
      totalNFT: '0',
      gameUrl: 'https://townstar.com/',
      imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13503.png',
      liked: 19,
      ngmi: 0,
      moon: 19,
      twtter: 'GoGalaGames',
      backPeriod: 8,
      openseaName: 'town-star',
      type: 'ERC20',
      species: 'defi',
      gameUserIcon:
        'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      price: '0.0354',
      circulatingSupply: '0',
      videos: [
        {
          gfId: '38de21951f2549988bd88fc4d4b88d7e',
          url: 'https://www.youtube.com/embed/ewtbKY7ltqg',
          type: 1,
          name: 'Town Star',
        },
      ],
      imgs: [
        {
          gfId: '1e75292aa1f943c9983a86b72cba6bbf',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/1cd15289a27c7c4c28ff1c9c3309624.png',
          type: 2,
          name: 'Town Star',
        },
      ],
      icon: [
        {
          gfId: '18945661741446e5a7c41e9545bca434',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/bdc0cd1cb414ae99a62d4e30ae53a2c.png',
          type: 3,
          name: 'Town Star',
        },
      ],
    },
    {
      gpId: '1acf6c9c34a7427f83a84ef34a4e3c02',
      name: 'Decentral Land',
      genres: 'Sandbox',
      version: '3.10.3',
      tokenHash: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
      initialReleaseDate: 1582128000000,
      twitterFollower: 632655,
      activeUsers: 252637,
      gameStudio: 'Decentraland Foundation',
      volume: '532654237',
      gameIntroduction:
        'Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members.',
      totalNFT: '90601',
      gameUrl: 'https://decentraland.org/',
      imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png',
      liked: 8,
      ngmi: 0,
      moon: 8,
      twtter: 'decentraland',
      backPeriod: 6,
      openseaName: 'decentraland',
      type: 'ERC20',
      species: 'defi',
      gameUserIcon:
        'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      price: '0.523',
      circulatingSupply: '0',
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
          gfId: '24d8ad1cc8dc433f9dd2f772ed1d8dcf',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/da9d5bedd586e47d08a7dc67e0adf04.png',
          type: 2,
          name: 'Decentral land',
        },
      ],
      icon: [
        {
          gfId: '93729aca515b4e0aa26badf66887e0f6',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/c3d204ee530429c1dfac81830ab0b1b.png',
          type: 3,
          name: 'Decentral land',
        },
      ],
    },
    {
      gpId: '6eabe3204a8b4da69bbe04eacf023309',
      name: 'Illuvium',
      genres: 'Sandbox',
      version: 'Beta',
      tokenHash: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
      initialReleaseDate: 0,
      twitterFollower: 336081,
      activeUsers: 18894,
      gameStudio: 'Illuvium',
      volume: '7100776.93771469',
      gameIntroduction:
        'Join the fight for ETH\r\nWelcome to the world of Illuvium.',
      totalNFT: '7000000.0',
      gameUrl: 'https://www.illuvium.io/',
      imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8719.png',
      liked: 3,
      ngmi: 0,
      moon: 3,
      twtter: 'illuviumio',
      backPeriod: 12,
      openseaName: 'illuvium',
      type: 'ERC20',
      species: 'defi',
      gameUserIcon:
        'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      price: '306.67',
      circulatingSupply: '650861.11822608',
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
          gfId: '8700882a27184cd289ee4c9b9c1e7a89',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/da2a785609e2af3fe3021b9f6ee8a05.png',
          type: 2,
          name: 'illuvium',
        },
      ],
      icon: [
        {
          gfId: '1fcc186139704278af270189d914dd28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/0d62ef908167a76f2dcd3f6d2ddf150.png',
          type: 3,
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
      twitterFollower: 949375,
      activeUsers: 53644,
      gameStudio: 'Sky Mavis',
      volume: '1.6128213941319478E8',
      gameIntroduction:
        'Build unstoppable teams of Axies and conquer your enemies!\r\nEach Axie has unique strengths and weaknesses based on its genes. With billions of possible genetic combinations, the possibilities are truly infinite!',
      totalNFT: '2.7E8',
      gameUrl: 'https://axieinfinity.com/ ',
      imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png',
      liked: 0,
      ngmi: 0,
      moon: 0,
      twtter: 'AxieInfinity',
      backPeriod: 18,
      openseaName: 'sky-mavis',
      type: 'ERC20',
      species: 'defi',
      gameUserIcon:
        'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      price: '24.82',
      circulatingSupply: '8.209307742659941E7',
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
          gfId: '721a8511d17044b7b7d05d22e821e5e8',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/65bbec23e04313514e8c26f6ce8ae5c.png',
          type: 2,
          name: 'Axie infinity',
        },
      ],
      icon: [
        {
          gfId: '042ad0b923624749b29f8ed0a2d64cd2',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/9e7f4fe14ba04a13b74f4ac3230e729.png',
          type: 3,
          name: 'Axie infinity',
        },
      ],
    },
    {
      gpId: 'dlf5183b72b245e7ad02ef36225a56a4',
      name: 'Evaverse',
      genres: 'Simulation',
      version: 'Beta',
      tokenHash: '',
      initialReleaseDate: 1629475200000,
      twitterFollower: 32126,
      activeUsers: 0,
      gameStudio: 'BATTLEBOUND',
      volume: '0',
      gameIntroduction:
        'The Evaverse video game is a multiplayer social platform built for the NFT Community. The game is currently available for all players on PC through the Steam store. Players can create servers, meet other collectors, and show off their Opensea NFTs while playing mini-games and hanging out with other community members in an immersive 3d environment. The long-term vision is to expand the Evaverse game alongside the NFT community. Evaverse NFT holders will propose game updates and future design mechanics as we build out the Evaverse into a massive play-to-earn world.',
      totalNFT: '0',
      gameUrl: 'https://www.evaverse.com/',
      imgUrl: 'https://storage.googleapis.com/bimboss/hook_game_img/Eva3.jpeg',
      liked: 2,
      ngmi: 0,
      moon: 2,
      twtter: 'Evaverse_NFT',
      backPeriod: 18,
      openseaName: 'evaverse',
      type: 'ERC20',
      species: 'nft',
      gameUserIcon:
        'https://img0.baidu.com/it/u=686928946,1069813836&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      price: '0',
      circulatingSupply: '0',
      videos: [
        {
          gfId: '4f52e2432a4448cda810d9b946eaaa28',
          url: 'https://www.youtube.com/embed/l3o_aSQZ9ts',
          type: 1,
          name: 'Evaverse',
        },
      ],
      imgs: [
        {
          gfId: '5555e2432a4448cda810d9b946eaaa28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/f00a7cad2b6f82e75b083b3c11c855c.png',
          type: 2,
          name: 'Evaverse',
        },
      ],
      icon: [
        {
          gfId: '4444e2432a4448cda810d9b946eaaa28',
          url: 'https://storage.googleapis.com/bimboss/hook_game_img/dc212554bbe700708950e110f856642.png',
          type: 3,
          name: 'Evaverse',
        },
      ],
    },
  ])
  const swiper = () => {
    if (swiperData.length <= 0) {
      return
    }
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
        // loop: true,
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
                              src={item.icon[0].url}
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
                width: '240px',
                height: '60px',
                borderRadius: '24.959999084472656px',
                background: 'rgba(117,81,255,1)',
                margin: 'auto',
                color: ' rgba(255,255,255,1)',
                fontSize: ' 21.84px',
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '60px',
                marginTop: '38px',
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
