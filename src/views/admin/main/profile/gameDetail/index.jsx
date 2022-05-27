import React, { useEffect, useState } from 'react'
import { Box, Grid, Flex, } from '@chakra-ui/react'
import './index.css'
import Banner from './compoments/banner'
import Earn from './compoments/earn'
import BuyAxie from './compoments/buyAxie'
import Comments from './compoments/comments'

export default function GameDetail(props) {
  // const game = {
  //   gpId: "c270a82c1ed74ecea43d3fb37b37c2ba",
  //   name: "Town star",
  //   genres: "Simulation",
  //   version: "Beta",
  //   tokenHash: "0x3Dd98C8A089dBCFF7e8FC8d4f532BD493501Ab7F",
  //   initialReleaseDate: 1582905600000,
  //   twitterFollower: 361698,
  //   activeUsers: 42884,
  //   gameStudio: "Gala Games",
  //   volume: "907636",
  //   gameIntroduction: "Farming with a Competitive Twist!\r\nTown Star is a competitive farming game from one of the co-founders of Zynga, the company behind Farmville. Each week, the top players on the leaderboard win big prizes, and every day, players complete challenges to unlock and collect TownCoin play-to-earn rewards! The goal is to grow, gather and craft your way to building the most efficient and productive town imaginable. Will you be a Town Star?\r\n\r\nThe Power of Blockchain\r\nTown Star is the flagship game of Gala Games, built on Gala’s decentralized network and utilizing the Ethereum blockchain. Player-owned NFTs offering in-game advantages can be purchased and traded on secondary markets!",
  //   totalNFT: 0,
  //   gameUrl: "https://townstar.com/",
  //   dataUrl: "",
  //   liked: 0,
  //   ngmi: 0,
  //   moon: 0,
  //   twtter: "GoGalaGames",
  //   backPeriod: 8,
  //   tokenHash:'0x3Dd98C8A089dBCFF7e8FC8d4f532BD493501Ab7F',
  //   videos:[{url: "https://www.youtube.com/embed/ewtbKY7ltqg"}],
  //   imgs:[{url:"https://storage.googleapis.com/bimboss/hook_game_img/TownStar4.webp"}],
  //   gamefiles: [{
  //     gfId: "38de21951f2549988bd88fc4d4b88d7e",
  //     url: "https://static.gala.games/images/town-star/videos/ts_P2E_vid.mp4",
  //     describe: null,
  //     name: "Town Star"
  //   }, {
  //     gfId: "18945661741446e5a7c41e9545bca434",
  //     url: "https://fnhvux1iyg.feishu.cn/file/boxcniscMa0pGAIxVyBKbIIsARe",
  //     describe: null,
  //     name: "Town Star"
  //   }, {
  //     gfId: "c0172c971b3d404bb2209cbf3033e13c",
  //     url: "https://fnhvux1iyg.feishu.cn/file/boxcnltHAR3DBAIVMeaYREUTJ9g",
  //     describe: null,
  //     name: "Town Star"
  //   }, {
  //     gfId: "1e75292aa1f943c9983a86b72cba6bbf",
  //     url: "https://fnhvux1iyg.feishu.cn/file/boxcnmCbcNRh79HS7vOlHW4Qt1b",
  //     describe: null,
  //     name: "Town Star"
  //   }, {
  //     gfId: "92412b55af584392bea47a5072e3f08a",
  //     url: "https://fnhvux1iyg.feishu.cn/file/boxcnz9DsIgD0s74AGw0XJWdaRf",
  //     describe: null,
  //     name: "Town Star"
  //   }]
  // }
  const game=JSON.parse(localStorage.getItem("game"));
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
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