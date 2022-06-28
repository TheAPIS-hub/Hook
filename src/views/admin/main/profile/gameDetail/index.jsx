import React, { useEffect, useState } from 'react'
import { Box, Grid, Flex } from '@chakra-ui/react'
import './index.css'
import Banner from './compoments/banner'
import Earn from './compoments/earn'
import BuyAxie from './compoments/buyAxie'
import Comments from './compoments/comments'
import Vote from './compoments/vote'
import { isMobile } from './compoments/until.js'
import { useHistory } from 'react-router-dom'

export default function GameDetail(props) {
  const game = JSON.parse(localStorage.getItem('game'))
  const history = useHistory()
  if (!game) {
    history.push({
      pathname: '/admin/game',
    })
    return null
  }
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px', sm: '72px' }}>
      {isMobile() ? (
        <div>
          <Banner game={game}></Banner>
          <Earn gpId={game.gpId}></Earn>
          <Vote game={game}></Vote>
          <Comments gpId={game.gpId}></Comments>
          <BuyAxie address={game.tokenHash}></BuyAxie>
        </div>
      ) : (
        <Grid
          mb="20px"
          gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
          gap={{ base: '20px', xl: '20px', '2xl': '42px' }}
          display={{ base: 'block', xl: 'grid' }}
        >
          <Flex
            flexDirection="column"
            gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
          >
            <Banner game={game}></Banner>
            <Vote game={game}></Vote>
            <Comments gpId={game.gpId}></Comments>
          </Flex>
          <Flex
            flexDirection="column"
            gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}
          >
            <Earn gpId={game.gpId}></Earn>
            <BuyAxie address={game.tokenHash}></BuyAxie>
          </Flex>
        </Grid>
      )}
    </Box>
  )
}
