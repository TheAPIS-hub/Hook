import { Box, Image } from '@chakra-ui/react'
// import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import './index.css'
import Slide1 from '../../../../../assets/img/nfts/moreGame.png'
import Slide2 from '../../../../../assets/img/nfts/NftBanner1.png'
import Slide3 from '../../../../../assets/img/nfts/Nft4.png'
import StanBox from './components/StanBox'
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
    <Box pt={{ base: '130px', md: '80px', xl: '80px', sm: '72px' }}>
      <Box
        width={{ sm: '1400px', md: '1716px' }}
        margin="auto"
        height={{ sm: '400px', md: '600px' }}
        //  borderRadius="22px"
        //  background="rgba(228,228,228,0.1)"
        overflow="hidden"
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
  )
}
