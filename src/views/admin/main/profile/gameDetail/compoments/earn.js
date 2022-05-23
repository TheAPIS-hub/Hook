import React, { useEffect, useState } from "react";

// Chakra imports
import {

  Flex,
  Text,
  Avatar,
  AvatarGroup, 
 
} from "@chakra-ui/react";
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

export default function earn(props) {
  const { ...rest } = props;
  const earnList = [{
    img:avatar1,
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
  },{
    img:avatar1,
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
  },{
    img:avatar1,
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
  },{
    img:avatar1,
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
  },{
    img:avatar1,
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
  },{
    img:avatar1,
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
  },{
    img:avatar1,
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
  },{
    img:avatar1,
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
  },{
    img:avatar1,
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
      <Card direction='column' w='100%' p='0px' bgColor='transparent' {...rest}>
        {earnList.map((item, key) => (
          <Flex key={key} justifyContent='space-between' alignItems='center' w='100%' {...rest} padding='20px 16px' mb="12px" borderRadius='16px' border='1px solid rgba(225, 225, 225, 0.2)'>
            <Avatar h='40px' w='40px' src={item.img} me='14px' />
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
    </div>

  );
}
