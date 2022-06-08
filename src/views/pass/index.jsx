import { Box, Button, Flex, Grid, Link, Text, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HookLogo from '../../assets/img/pass/hook collector pass.png'
import Soon from '../../assets/img/pass/coming soon….png'
import PassCard from '../../assets/img/pass/Hook PASS.png'
import Plans from '../../assets/img/pass/Pricing & Plans.png'
import Form from '../../assets/img/pass/form.png'

import starEnd from '../../assets/img/pass/starEnd.png'
import star from '../../assets/img/pass/star.png'
import Header from './compoments/header'

import './index.css'
export default function Pass(props) {
  return (
    <Box background="#000" className="passBox">
      <Header></Header>
      <Box padding="5vw 15vw 0vw 15vw">
        <Image src={HookLogo} width="37vw" h="4.5vw" margin="auto" />
        <Box className="starBG">
          <Text
            fontWeight="500"
            fontSize="0.8888vw"
            lineHeight="1vw"
            textAlign="center"
            letterSpacing="-0.036vw"
            color="#ADA0B0"
          >
            Hook pass will be the key to premium features and experiences.
          </Text>
          <Flex
            fontWeight="500"
            fontSize="0.8888vw"
            lineHeight="1vw"
            textAlign="center"
            color="#ADA0B0"
            width="43vw"
            marginLeft="-7vw"
          >
            For a better experience where technology adoption creates
            cutting-edge disruptive experiences for gamers.
          </Flex>
        </Box>

        <Flex marginTop="8vw">
          <Image src={Soon} width="25vw" h="5vw" margin="auto" />
          <Image src={PassCard} width="23vw" h="17.5vw" margin="auto" />
        </Flex>
        <Box mt="3.5vw" maxW="30vw">
          <Box>
            <Text fontSize="1.2vw" fontWeight="700" color="#fff">
              #1:All-in-One Launching
            </Text>
            <Text color="rgba(173,160,176,1)" m="1.1vw 0 " fontSize="1vw">
              The Hook pass holders could get access to the blockchain gaming
              features <br />
              that allows players to launch trending crypto games within a few
              clicks, <br />
              and support a smooth swap of the assets their time gains.
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.2vw" fontWeight="700" color="#fff">
              #1:All-in-One Launching
            </Text>
            <Text color="rgba(173,160,176,1)" m="1.1vw 0 " fontSize="1vw">
              1. Basic rewards(daily engagement), <br />
              2 PvP rewards (competition between comment writers), <br />
              3 PvE rewards <br />
              4.Monopoly rewards (Pass holder will upgrade and boost the reward)
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.2vw" fontWeight="700" color="#fff">
              #1:All-in-One Launching
            </Text>
            <Text color="rgba(173,160,176,1)" m="1.1vw 0 " fontSize="1vw">
              Our goal is to enable crypto game interconnectivity across
              blockchain. <br />
              The Hook community will set networking channels with artists,
              developers,
              <br />
              community leads looking to start projects.
            </Text>
          </Box>
        </Box>
        <Flex marginTop="5vw" alignItems="center" marginBottom="3vw">
          <Image src={Plans} width="18vw" h="2vw" />
          <Image src={starEnd} width="2vw" h="2vw" marginTop="-0.5vw" />
        </Flex>
        <Image src={Form} width="100%" h="47vw" />
        {/* <Image src={star} width="32vw" h="15vw" margin="0 auto" /> */}
      </Box>
    </Box>
  )
}
