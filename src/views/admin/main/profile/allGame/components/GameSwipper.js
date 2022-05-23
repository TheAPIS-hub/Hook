import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box,
  Image,
  Icon,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery'
import Players from '../../game/compoment/player'

import gameThree from '../../../../../../assets/img/logo/gameThree.png'
import SwiperItem from './SwiperItem'
export default function GameSwipper() {
  const images = [
    {
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      original: `https://picsum.photos/id/1019/1000/600/`,
      embedUrl:
        'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
     
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
    {
      original: `https://picsum.photos/id/1019/1000/600/`,
      thumbnail: `https://picsum.photos/id/1019/1000/600/`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      renderItem: () => <SwiperItem></SwiperItem>,
    },
  ]

  return (
    <Box>
          <Box
        style={{
          color: " rgba(255,255,255,1)",
          fontSize: "24px",
          fontWeight: " 500",
          textAlign: "left",
          lineHeight: "32px",
          marginBottom:'28px'
        }}
      >
       Featured & Recommended
      </Box>
       <Box style={{
      width: '1003px',
height: '720px',
borderRadius: '32px',
background: 'rgba(228,228,228,0.1)',
    }}>
      <ImageGallery
        thumbnailPosition="right"
        items={images}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        
      />
    </Box>
    </Box>
   
  )
}
