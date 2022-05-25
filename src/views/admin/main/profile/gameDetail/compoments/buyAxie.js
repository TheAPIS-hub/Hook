import React, { useEffect, useState } from "react";

// Chakra imports
import {

  Flex,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import Transfer from "components/dataDisplay/Transfer";
import Card from "components/card/Card.js";
// Assets
import axie1 from "assets/img/avatars/axie1.png";
import axie2 from "assets/img/avatars/axie2.png";
import axie3 from "assets/img/avatars/axie3.png";
import axie4 from "assets/img/avatars/axie4.png";
import axieIcon from 'assets/img/avatars/axieIcon.png'
import arrow from 'assets/img/users/arrow.png'
export default function BuyAxie(props) {
  const { ...rest } = props;
  const earnList = [{
    img: axie1,
  }, {
    img: axie2,
    
  }, {
    img: axie3,
    
  }, {
    img: axie4,
    
  }, {
    img: axie1,
    
  }, {
    img: axie2,
    
  }, {
    img: axie3,
    
  }, {
    img: axie4,
    
  }, {
    img: axie1,
    
  }]
  return (
    <div>
      <Text
        color=" rgba(255,255,255,1)"
        fontSize="24px"
        fontWeight=" 500"
        textAlign="left"
        lineHeight="32px"
        margin='55px 0 30px 0'>
        Buy Axie
      </Text>
      <Card direction='column' w='100%' p='0px' bgColor='transparent' {...rest}>
        {earnList.map((item, key) => (
          <Flex key={key} justifyContent='space-around' bgColor="rgba(228, 228, 228, 0.1)" alignItems='center' w='100%' {...rest} padding='20px 0px' mb="12px" borderRadius='16px' border='1px solid rgba(225, 225, 225, 0.2)'>
            <Image src={item.img}></Image>
            <Flex flexDirection="column">
              <Flex style={{
                width: "77px",
                height: "18px",
                padding: "0px 4px",
                background: "#FB9A04",
                lineHeight: "18px",
                color: "white",
                alignItems:"center",
                borderRadius:"3px",
                justifyContent: "center",
                margin:"10px 0 10px 0"
              }}>
                <img src={axieIcon} style={{width:"10px",height:"12px"}}></img>
                <Text fontSize="10px" as="span">#242342</Text>
              </Flex>
              <Text color="#B2B3BD" fontSize="10px" >breed count y4</Text>
            </Flex>
            <Flex fontSize="10px" flexDirection="column">
              <Text>BUYER</Text>
              <Text>Lunacian #23268…</Text>
              <Text color="#B2B3BD">(ronin…a553c)…</Text>
            </Flex>
            <Box fontSize="10px">
              <Flex justifyContent="space-between">
                <Text as='span'>SELLER</Text>
                <Text as='span'>Ξ 0.004</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text as='span'>Lunacian #23268……</Text>
                <Text color="#B2B3BD" as='span'>$8.23</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text color="#B2B3BD" as='span'>(ronin…a553c)…</Text>
                <Text color="#B2B3BD" as='span'>a minute ago</Text>
              </Flex>
            </Box>
            <Box>
              <Image height='20px' width='20px' src={arrow} ></Image>
            </Box>
          </Flex>
        ))}
      </Card>
    </div>
  );
}
