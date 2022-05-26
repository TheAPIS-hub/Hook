import React, { useEffect, useState } from "react";

// Chakra imports
import {

  Flex,
  Text,
  Avatar,
  AvatarGroup,
  Box,
  Image,

} from "@chakra-ui/react";
import Transfer from "components/dataDisplay/Transfer";
import Card from "components/card/Card.js";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import smiley from "assets/img/users/smiley.png";
import addIcon from "assets/img/users/addIcon.png";

export default function earn(props) {
  const { ...rest } = props;
  const earnList = [{
    img: smiley,
    isLike: true,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: true,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: true,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,

      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }, {
    img: smiley,
    isLike: false,
    biddersimg:
      [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1,
        avatar1
      ]
  }]
  return (
    <div>
      <Text
        color=" rgba(255,255,255,1)"
        fontSize="24px"
        fontWeight=" 500"
        textAlign="left"
        lineHeight="32px"
        marginBottom='20px'>
        React to earn
      </Text>
      <Card
        direction='column'
        w='100%'
        p='0px'
        bgColor='transparent'
        className="yscroll"
      >

        {earnList.map((item, key) => (
          <Flex key={key} justifyContent='space-between' alignItems='center' w='100%' padding='20px 16px' mb="12px" borderRadius='16px' border='1px solid rgba(225, 225, 225, 0.2)'>
            <Box>
              <Avatar
                h='48px'
                w='48px'
                src={item.img}
                me='14px'
                border={item.isLike ? '2px solid #0049C6' : '2px solid #353D59'}
                p="6px"
                bg="transparent"
                cursor="pointer"
              />
            </Box>
            <AvatarGroup
              max={9}
              size='sm'
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
              fontSize='12px'
              fontWeight='700'
              color="#fff"
            >
              {item.biddersimg.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
          </Flex>
        ))}
      </Card>
      <Box pr="15px">
        <Flex justifyContent='space-between' alignItems='center' w='100%' padding='20px 16px' mb="12px" borderRadius='16px' border='1px solid rgba(225, 225, 225, 0.2)'>
          <Box border='2px solid #353D59' h='48px' w='48px' borderRadius="50%" cursor="pointer"
          >
            <Image src={addIcon} h='auto' w='auto' m="2px auto"></Image>
          </Box>
        </Flex>
      </Box>
    </div>

  );
}
