import React, { useEffect, useState } from "react";

// Chakra imports
import {

  Flex,
  Image,
  Icon,
  Text,
  Box,
  Badge,
  Stack,
  Button,
  IconButton
} from "@chakra-ui/react";
import Transfer from "components/dataDisplay/Transfer";
import Card from "components/card/Card.js";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import saleIcon from 'assets/img/users/saleIcon.png'
import volumeIcon from 'assets/img/users/volumeIcon.png'
import soldIcon from 'assets/img/users/soldIcon.png'
import twitter from 'assets/img/users/twitter.png'
import { MdMoreHoriz } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import { CgAdd } from 'react-icons/cg'
import Players from './player'
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Banner(props) {
  const { ...rest } = props;
  const good = '50%';
  const bad = '50%';
  const [isVote, voteFun] = useState(false)
  return (
    <div>
      <Text
        color=" rgba(255,255,255,1)"
        fontSize="24px"
        fontWeight=" 500"
        textAlign="left"
        lineHeight="32px"
        marginBottom='20px'>
        Overview
      </Text>
      <Box bg="#111C44" borderRadius="32px">
        <div>
          <Box
            maxH="720px"
            width="100%"
            backgroundColor="rgba(17,28,68,1)"
            borderRadius="32px"
            width="100%"
          >
            <Box >
              <Players width="100%" src="https://www.youtube.com/embed/3OSUpTaiJM8"></Players>
            </Box>
          </Box>
        </div>
        <Box
          p={{ md: "20px 10px", "2xl": "40px 49px 23px 32px" }}
          borderBottom="1px solid  rgba(228, 228, 228,0.1)">
          <Badge
            variant="solid"
            minWidth="92px"
            height="26px"
            textAlign="center"
            fontSize="13px"
            fontWeight="400"
            bg="#7FBA7A" >
            Alpha
          </Badge>
          <Text as="p" fontWeight="500" fontSize="32px" m="12px 0 15px 0">Axie Infinity</Text>
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: "column", xl: "row" }} >
            <Flex alignItems="center">
              <Box>
                <Image src={avatar1} width="82px" height="82px" borderRadius="50%"></Image>
              </Box>
              <Box ml="24px" fontSize="18px" fontWeight="500">
                <Flex m="8px 0">
                  <Text mr="9px" lineHeight="24px">Sky Mavis</Text>
                  <Image src={twitter} width="26px" height="26px" mr="35px"></Image>
                </Flex>
                <Box m="8px 0">
                  <Text as="span">536K followers</Text>
                  <Text as="span" ml="24px">120 players</Text>
                </Box>
              </Box>
            </Flex>
            <Box>
              <Button
                variant="brand"
                width="180px"
                bgColor="#6C5DD3"
                height="56px"
                m="32px auto"
                fontWeight="500"
                fontSize="25.2px"
              >
                Play Now!
              </Button>
            </Box>
          </Flex>
        </Box>
        <Flex p="25px 34px">
          <Stack direction="row" wrap="wrap" spacing={4} align-items="center">
            <Button width="100px" height="50px" bgColor="transparent" leftIcon={<AiOutlineLike />} variant="brand">
              <Text color="#808191;" > Like</Text>
            </Button>
            {/* <Button width="100px" height="50px" bgColor="transparent" leftIcon={<RiShareForwardLine />} variant="brand">
              <Text color="#808191;"> Share</Text>
            </Button>
            <Button width="170px" justifyContent="space-around" height="50px" bgColor="transparent" leftIcon={<CgAdd />} variant="brand">
              <Text color="#808191;"> Add to</Text>
            </Button>
            <IconButton
              borderRadius="10px"
              aria-label="Search database"
              fontWeight="500"
              w="37px"
              h="37px"
              fontSize="20px"
              icon={<MdMoreHoriz />}
            /> */}
          </Stack>
        </Flex>
      </Box>
      <Flex
        bg="rgba(228, 228, 228, 0.1)"
        margin="60px 0"
        borderRadius="16px"
        flexDirection={{ base: 'column;', xl: "inherit", }}>
        <Box
          width={{
            base: '100%',
            xl: "25%",
          }}
          p={{
            base: '10px 0 10px 10px',
            xl: "20px 0 20px 20px",
            '2xl': "20px 0 20px 60px",
          }}
          borderRight="1px solid rgba(228, 228, 228, 0.1)"
        >
          <Flex>
            <Image width="16px" height="16px" mr="8px" src={saleIcon}></Image>
            <Text fontSize="12px" color="#808191">Sale</Text>
          </Flex>
          <Text fontSize={{
            base: 'xl',
            xl: "3xl",
          }} fontWeight="600" letterSpacing="-1px">15.545</Text>
        </Box>
        <Box width={{
          base: '100%',
          xl: "40%",
        }} p={{
          base: '10px 0 10px 10px',
          xl: "20px 0 20px 20px",
          '2xl': "20px 0 20px 60px",
        }}
          borderRight="1px solid rgba(228, 228, 228, 0.1)">
          <Flex>
            <Image width="16px" height="16px" mr="8px" src={volumeIcon}></Image>
            <Text fontSize="12px" color="#808191">Volume</Text>
          </Flex>
          <Text
            fontSize={{
              base: 'xl',
              xl: "3xl",
            }}
            fontWeight="600"
            letterSpacing="-1px"
          >
            Ξ 15.545
            <Text as="span" fontSize="18px" fontWeight="600" color="#808191" ml="18px">$245.54K</Text>
          </Text>
        </Box>
        <Box
          width={{
            base: '100%',
            xl: "25%",
          }}
          p={{
            base: '10px 0 10px  10px',
            xl: "20px 0 20px 11%",
          }}>
          <Flex>
            <Image width="16px" height="16px" mr="8px" src={soldIcon}></Image>
            <Text fontSize="12px" color="#808191">Sold</Text>
          </Flex>
          <Text
            fontSize={{
              base: 'xl',
              xl: "3xl",
            }}
            fontWeight="600"
            letterSpacing="-1px"
          >
            13,543
          </Text>
        </Box>
      </Flex >
      <Flex
        border='1px solid rgba(228, 228, 228, 0.1)'
        borderRight="0px"
        borderLeft="0px"
        padding="47px 0 38px 0"
        justifyContent="space-between"
      >

        {isVote ? (
          <Box width="48%">
            <Text fontSize="18px">Your‘ve voted-👍To da moon</Text>
            <Text fontSize="13px" color="#B2B3BD" width="80%">
              Your vote for 24 hours. In order to update how
              you feel about Tether,come back tomorrow!
            </Text>
          </Box>
        ) :
          <Box width="48%">
            <Text fontSize="18px">
              How do you feel about Tether today？
            </Text>
            <Text fontSize="13px" color="#B2B3BD" width="80%">
              Vote to see community result
            </Text>
          </Box>}
        {isVote ? (
          <Box width="48%" fontSize="13px" color="#B2B3BD" pt="10px" >
            <Flex mb="20px">
              <Box height="1px" width={good} borderRight="1px" bgColor="#FF9A7B"></Box>
              <Box height="1px" width={bad} borderRight="1px" bgColor="#6C5DD3"></Box>
            </Flex>
            <Flex justifyContent="space-between" fontSize="13px" color="#B2B3BD" >
              <Text> {good} To da moon&nbsp;👍 </Text>
              <Text><Text as="span" transform="matrix(1, 0, 0, -1, 0, 0)" display="inline-block"> 👍</Text>
                &nbsp;{bad} Ngmi</Text>
            </Flex>
          </Box>
        ) :
          <Box width="48%" fontSize="13px" color="#B2B3BD" pt="10px" >
            <Flex
              justifyContent="end"
              fontSize="14px"
              fontWeight="700"
              color="#B2B3BD" >
              <Button
                width="109px"
                height="41px"
                border="1px solid #E1E1E1"
                borderRadius="12px"
                mr="11px"
                onClick={(e) => {
                  voteFun(!isVote)
                }}
              >
                👍 &nbsp;&nbsp;Good
              </Button>
              <Button
                width="109px"
                height="41px"
                border="1px solid #E1E1E1"
                borderRadius="12px"
                onClick={(e) => {
                  voteFun(!isVote)
                }}
              >
                <Text
                  as="span"
                  transform="matrix(1, 0, 0, -1, 0, 0)"
                  display="inline-block"
                >
                  👍&nbsp;&nbsp;
                </Text>
                Bad
              </Button>
            </Flex>
          </Box>}

      </Flex>
    </div>
  );
}
