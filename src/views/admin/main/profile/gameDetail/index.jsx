import React, { useEffect, useState } from 'react'
import { Box, Grid, Flex, } from '@chakra-ui/react'
import './index.css'
import Banner from './compoments/banner'
import Earn from './compoments/earn'
import BuyAxie from './compoments/buyAxie'
import Comments from './compoments/comments'

export default function GameDetail(props) {
  const game=JSON.parse(localStorage.getItem("game"));
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "30px", xl: "30px" ,'2xl': "40px"}}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner game={game}></Banner>
          <Comments gpId={game.gpId}></Comments>

        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Earn gpId={game.gpId}></Earn>
          <BuyAxie address={game.tokenHash}></BuyAxie>
        </Flex>
      </Grid>
    </Box>
  )
}