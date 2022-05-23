import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import Players from "../../game/compoment/player";
import GameHeader from "../../../../../../assets/img/logo/Header.png";
import gameThree from "../../../../../../assets/img/logo/gameThree.png";
export default function SwiperItem() {
  const GameData ={
    copyright:'Game Studio',
    generes:'Game generes '

  }
  return (
    
    <Box
      maxW="730px"
      height='720px'
      backgroundColor="rgba(17,28,68,1)"
      borderRadius="32px"
      paddingBottom="32px"
    >
      
      <Box width='730px' height='532px'    borderRadius="32px">
        <Players width='730px' height='532px'borderRadius="32px" src="https://www.youtube.com/embed/3OSUpTaiJM8"></Players>
      </Box>
      <Box
        style={{
          fontWeight: "500",
          fontSize: " 32px",
          lineHeight: " 48px",
          letterSpacing: "-0.5px",
          color: "#FFFFFF",
          marginTop: "34px",
          marginBottom:'42px',
          marginLeft: '32px',
          textAlign:' left'
        }}
      >
        Game name
      </Box>
 
        <Box style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '32px',
      }}>
          <img
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              marginRight: "8px",

            }}
            src={GameHeader}
            alt=""
          />
          <Box style={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '24px',
              color:' #B2B3BD',
            }}>
            {GameData.copyright}
            {/* <Text> League of Legends</Text>® */}
          </Box>
          <Box style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              marginRight: "12px",
              marginLeft:'12px',
              backgroundColor:'#fff'
          }}></Box>
          <Box style={{
             fontWeight: '400',
             fontSize: '14px',
             lineHeight: '24px',
             color:' #B2B3BD',
          }}>
            
            {GameData.generes}
          
             {/* <Text>
             Game generes
            </Text> */}
          </Box>
        </Box>
     
    </Box>
  );
}
