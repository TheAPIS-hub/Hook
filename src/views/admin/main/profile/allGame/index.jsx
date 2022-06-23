import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import './index.css'
import TrendingGames from './components/TrendingGames'
import GameSwipper from './components/GameSwipper'
import GameCard from './components/GameCard'
import Twitter from './components/Twitter'
import { isMobile } from '../gameDetail/compoments/until.js'
export default function AllGame() {
  const [gameData, setGameData] = useState([])
  const gameListDataStr = localStorage.getItem('gameListData')
  const gameListDataJson = JSON.parse(gameListDataStr).records
  //   useEffect(() => {
  //     const gameListDataStr = localStorage.getItem('gameListData')
  //     const gameListDataJson = JSON.parse(gameListDataStr).records
  //     setGameData(gameListDataJson)
  //   }, [])
  return (
    <Box>
      {isMobile() ? (
        <>
          <GameSwipper gameData={gameListDataJson}></GameSwipper>
           <Box pl="8px" pr="8px">
            <GameCard gameData={gameListDataJson}></GameCard>
            <Twitter gameData={gameListDataJson}></Twitter>
            <TrendingGames gameData={gameListDataJson}></TrendingGames>
          </Box>
          </>
      ) : (<>
        <Grid
          mb="20px"
          gridTemplateColumns={{
            base: '2fr 1fr',
            '2xl': '2fr 1fr',
            md: '2fr 1fr',
            sm: '2fr 1fr',
          }}
          gap="20px"
        >
          <GameSwipper gameData={gameListDataJson}></GameSwipper>
          <TrendingGames gameData={gameListDataJson}></TrendingGames>
        </Grid>
        <Grid
          mb="20px"
          gridTemplateColumns={{
            base: '2fr 1fr',
            '2xl': '2fr 1fr',
            md: '2fr 1fr',
            sm: '2fr 1fr',
          }}
          gap="20px"
        >
          <GameCard gameData={gameListDataJson}></GameCard>

          <Twitter gameData={gameListDataJson}></Twitter>
        </Grid></>
      )
      }
    </Box>
  )
}
