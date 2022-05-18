import './index.css'
import { Box, Flex, Grid, Link } from '@chakra-ui/react'
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
      Shooter: 'Shooter',
      gameName: 'Axie Infinity',
      img: gameThree,
      Viewers: '4.9k',
    },
    {
      Shooter: 'Shooter',
      gameName: 'Axie Infinity',
      img: gameThree,
      Viewers: '4.9k',
    },
    {
      Shooter: 'Shooter',
      gameName: 'Axie Infinity',
      img: gameThree,
      Viewers: '4.9k',
    },
    {
      Shooter: 'Shooter',
      gameName: 'Axie Infinity',
      img: gameThree,
      Viewers: '4.9k',
    },
    {
      Shooter: 'Shooter',
      gameName: 'Axie Infinity',
      img: gameThree,
      Viewers: '4.9k',
    },
  ])
  const swiper = () => {
    new Swiper('.swiper-container1', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: -100,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    })
  }

  useEffect(() => {
    swiper()
  }, [])
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Box style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin:'auto'
      }}>
         <Box className="Gaming">Crypto gaming for all</Box>
         <Box      className='CreateBtn' style={{
           width: '159px',
           height: '73px',
           borderRadius: '20.799999237060547px',
           background: 'rgba(207,200,255,1)',
           color: 'rgba(95,117,238,1)',
           fontSize: '18.2px',
           fontWeight: '700',
           textAlign: 'center',
           lineHeight: '73px',
           marginBottom: '47.8px',
      
         }}>
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGpIutxIjaaC3i_wnli1B3_wY5rU91o7UpNqpeISbz2AHnrg/viewform">Create Project</a>
           </Box>
      </Box>
     
      <Box className=" challenge">
        challenge your gaming skills through a fun and rewarding experience
      </Box>
      <Flex justifyContent="center">
        <Box
          className="swiper-container1"
          style={{
            width: '670px',
            height: '660px',
            display: 'flex',
          }}
        >
          <Box className="swiper-wrapper">
            {swiperData.map((item, index) => {
              return (
                <Box className="swiper-slide">
                  <Box
                    style={{
                      height: '651px',
                      width: '369px',
                      borderRadius: '38px',
                      backgroundColor: '#111C44',
                      padding: '12px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Box>
                      <img
                        width="345px"
                        height="330px"
                        src={item.img}
                        alt=""

                      />
                    </Box>

                    <Box style={{ marginTop: "48px", marginLeft: "39px" }}>
                      <Box
                        style={{
                          width: '135px',
                          height: '36px',
                          borderRadius: '12px',
                          opacity: '0.5',
                          background: 'rgba(108,93,211,1)',
                          color: ' rgb(210 217 255)',
                          fontSize: '19.5px',
                          textAlign: ' center',
                          lineHeight: ' 38px',
                          fontWeight: ' 400',
                        }}
                      >
                        {item.Shooter}
                      </Box>
                      <Box style={{ color: 'rgba(255,255,255,1)',
 fontSize: '27px',
 fontWeight: '500',
 textAlign: 'left',
 marginTop:'12px',
 lineHeight: '36px',}}>{item.gameName}</Box>
 <Box style={{
       display: 'flex',
       alignItems: 'center',  
 marginTop:'12px',

 }}>
   <Box style={{width: '12px',
height: '12px',
background:' #69F85D',
borderRadius:'50%',
marginRight:'12px'
}}></Box>
   <Box>{item.Viewers} Viewers</Box>
 </Box>
 <Box className="VIewBtn" style={{
   width: '180px',
   height: '72px',
   borderRadius:' 24px',
   background: 'rgba(117,81,255,1)',
   color: 'rgba(255,255,255,1)',
   fontSize: '21px',
   fontWeight: '400',
   textAlign:' center',
   lineHeight: '72px',
   marginTop:'18px'
 }}>VIew</Box>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        
      </Flex>
        <Link href="#/admin/profile/allGame">
      <Box className="ExploreBtn" style={ {     width: '244px',
        height: '71.76px',
        borderRadius: '24.959999084472656px',
        background: 'rgba(117,81,255,1)',
      margin:'auto',
      color:' rgba(255,255,255,1)',
      fontSize:' 21.84px',
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: '71.76px',
      marginTop:'113.24px'
      }
      }>
         Explore all games
      </Box>
          </Link>
    </Box>
  )
}
