import { Box, Grid } from '@chakra-ui/react'
import './index.css'
import TrendingGames from './components/TrendingGames'
import GameSwipper from './components/GameSwipper'
import GameCard from './components/GameCard'
import Twitter from './components/Twitter'

export default function allGame() {
  return (
    <Box
      padding={{
        base: '56px 20px 24px 32px',
        md: '56px 20px 24px 32px',
        xl: '56px 20px 24px 32px',
        sm: '56px 20px 24px 32px',
      }}
    >
      <Grid
        mb="20px"
        gridTemplateColumns={{
          base: '686fr 276fr',
          '2xl': '686fr 276fr',
          md: '686fr 276fr',
          sm: '1fr',
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
          '2xl': '2fr 1fr',
          md: '2fr 1fr',
          sm: '2fr 1fr',
        }}
        gap="39px"
      >
        <GameCard></GameCard>

        <Twitter></Twitter>
      </Grid>
    </Box>
  )
}
