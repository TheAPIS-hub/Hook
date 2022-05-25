import React, { useEffect, useState } from "react";

// Chakra imports
import {

  Flex,
  Image,
  Text,
  Avatar,
  Box,
  Button,
} from "@chakra-ui/react";
import { MdMoreHoriz } from 'react-icons/md'
import Transfer from "components/dataDisplay/Transfer";
import Card from "components/card/Card.js";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar7.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import Nft5 from 'assets/img/nfts/Nft5.png'
import NFT from 'components/card/NFT'
import collectIcon from 'assets/img/users/collectIcon.png'
import commentIcon from 'assets/img/users/commentIcon.png'
import expandIcon from 'assets/img/users/expandIcon.png'
import DateUploaded from "./MainMenu";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
export default function Comments(props) {
  const earnList = [{
    img: avatar1,

  }, {
    img: avatar2,
  },{
    img: avatar3,
  },{
    img: avatar4,
  },{
    img: avatar5,
  },{
    img: avatar6,
  }]
  return (
    <div style={{
      background: "#111C44",
      borderRadius: "24px",
      marginTop: "45px",
      padding: "32px 16px"
    }}>
      <Flex justifyContent="space-between" mb="12px">
        <Text
          color=" rgba(255,255,255,1)"
          fontSize="24px"
          fontWeight=" 500"
          textAlign="left"
          lineHeight="32px"
          as="span"
          marginBottom='20px'>
          Comments
        </Text>
        <DateUploaded></DateUploaded>
      </Flex>
      <Card direction='column' w='100%' p='0px' bgColor='transparent' >
        {earnList.map((item, key) => (
          <Flex key={key}
            justifyContent='space-between'
            w='100%'
            padding='20px 16px'
            mb="12px"
            borderRadius='12px'
            _hover={{bgColor:'rgba(228, 228, 228, 0.1)'}}
          >
            <Avatar h='48px' w='48px' src={item.img} me='14px' />
            <Box>
              <Box fontSize="13px" >
                <Text as="span" color="#5F75EE">Joel Becker</Text>
                <Text as="span" color="#B2B3BD" ml="3">12h</Text>
              </Box>
              <Text m="10px 0" color="#B2B3BD" fontSize="14px" lineHeight="24px" noOfLines={2}>Can anyone tell me the settings for character voice lines cause its so boring to play without no characters lines....</Text>
              <Flex>
                <Image src={commentIcon}></Image>
                <Image m="0 16px" src={collectIcon}></Image>
                <Image src={expandIcon}></Image>
              </Flex>
            </Box>
          </Flex>
        ))}
        <Button variant="brand" width="180px"
          height="56px" m="32px auto" fontWeight="400" fontSize="14px"> Write comment</Button>
      </Card>
    </div >

  );
}
