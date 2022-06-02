import { Box, Button, Flex, Grid, Link, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HookLogo from "../../assets/img/pass/hook collector pass.png";
import Soon from "../../assets/img/pass/coming soon….png";
import PassCard from "../../assets/img/pass/Hook PASS.png";
import Plans from "../../assets/img/pass/Pricing & Plans.png";
import Form from "../../assets/img/pass/form.png";

import starEnd from "../../assets/img/pass/starEnd.png";
import star from "../../assets/img/pass/star.png";


import "./index.css"
export default function Pass(props) {
  return (
    <Box className="passBox">
      <Box
        className="swipperBox"
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        background="yellow"
      >
        1111
      </Box>
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
            width='43vw'
            marginLeft='-7vw'
          >
            For a better experience where technology adoption creates
            cutting-edge disruptive experiences for gamers.
          </Flex>
        </Box>
        <Flex marginTop='8vw'>
        <Image src={Soon} width="23vw" h="6vw" margin="auto" />
        <Image src={PassCard} width="23vw" h="13.5vw" margin="auto" />
        </Flex>
        <Flex marginTop='15vw' marginLeft=' 4.5vw'
    marginBottom= '3vw'>
        <Image src={Plans} width="18vw" h="1vw" />
        <Image src={starEnd} width="2vw" h="2vw" marginTop='-0.5vw' />
        </Flex>
        <Image src={Form} width="61vw" h="42vw" margin='auto'/>
        <Image src={star} width="32vw" h="15vw"  margin="0 auto" />

      </Box>
    </Box>
  );
}
