import { Box, Image } from '@chakra-ui/react'
// import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import MImageGallery from 'react-image-gallery'
import './index.css'
import Slide1 from '../../../../../assets/img/nfts/moreGame.png'
import Slide2 from '../../../../../assets/img/nfts/NftBanner1.png'
import Slide3 from '../../../../../assets/img/nfts/mobile trennding slides.png'
import StanBox from './components/StanBox'
import { isMobile } from '../gameDetail/compoments/until.js'

export default function GameIntroduction({}) {
  const [images, setImages] = useState([
    {
      original: Slide1,
      thumbnail: Slide1,
    },
    {
      original: Slide2,
      thumbnail: Slide2,
    },
    {
      original: Slide3,
      thumbnail: Slide3,
    },
    {
      original: Slide1,
      thumbnail: Slide1,
    },
  ])

  return (
    <>
      {isMobile() ? (
        <Box pt="64px">
          <Box
            fontStyle="normal"
            fontWeight="700"
            fontSize="16px"
            lineHeight="19px"
            color="#FFFFFF"
          >
            Game
          </Box>
          <Box
            fontStyle="normal"
            fontWeight="600"
            fontSize="32px"
            lineHeight="39px"
            letterSpacing="-0.5px"
            color="#FFFFFF"
            marginBottom="24px"
          >
            All
          </Box>
          <Box
            width="343px"
            margin="auto"
            height="579px"
            borderRadius="22px"
            //  background="rgba(228,228,228,0.1)"
            overflow="hidden"
            className="MSwiper"
          >
            <MImageGallery
              showThumbnails={false}
              items={images}
              originalHeight={579}
              originalWidth={343}
              showFullscreenButton={false}
              showPlayButton={false}
              slideDuration={450}
              slideInterval={3000}
              infinite={true}
            />
          </Box>
          <StanBox></StanBox>
        </Box>
      ) : (
        <Box pt={{ base: '130px', md: '80px', xl: '80px', sm: '72px' }}>
          <Box
            width="89.5vw"
            margin="auto"
            height={{ sm: '400px', md: '600px', xl: '600px' }}
            //  borderRadius="22px"
            //  background="rgba(228,228,228,0.1)"
            overflow="hidden"
            className="GameIntroduction"
          >
            <ImageGallery
              thumbnailPosition="bottom"
              items={images}
              originalHeight={488}
              originalWidth={1716}
              thumbnailHeight={56}
              thumbnailWidth={96}
              showFullscreenButton={false}
              showPlayButton={false}
              slideDuration={450}
              slideInterval={3000}
              infinite={true}
            />
          </Box>
          <StanBox></StanBox>
        </Box>
      )}
    </>
  )
}
