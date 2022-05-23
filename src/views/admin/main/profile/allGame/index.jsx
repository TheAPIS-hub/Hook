import { Box, Grid } from '@chakra-ui/react'
import './index.css'
import TrendingGames from './components/TrendingGames'
import GameSwipper from './components/GameSwipper'
import GameCard from './components/GameCard'
import Twitter from './components/Twitter'

export default function allGame() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Grid
        mb="20px"
        gridTemplateColumns={{
          base: '2fr 1fr',
          '2xl': '720fr 350fr',
        }}
        gap="39px"
      >
        <GameSwipper></GameSwipper>

        <TrendingGames></TrendingGames>
      </Grid>
      <Grid
        mb="20px"
        gridTemplateColumns={{
          base: '2fr 1fr',
          '2xl': '720fr 350fr',
        }}
        gap="39px"
      >
        <GameCard></GameCard>

      <Twitter></Twitter>
      </Grid>
    </Box>
  )
}
