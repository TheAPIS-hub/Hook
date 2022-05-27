// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Text,
  useColorModeValue,
  Image,
  Grid,
  color,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import Balance from "./Balance";
import { Icon } from "@chakra-ui/react";
import { MdFilterNone } from "react-icons/md";
import NFTLogo from "../../../../../../assets/img/logo/NFTLogo.png";
import SLogo from "../../../../../../assets/img/logo/SLogo.png";

import copy from "copy-to-clipboard";

export default function Banner(props) {
  const {
    banner,
    avatar,
    name,
    searchAddress,
    total2Usd,
    defi2Usd,
    nft2Usd,
    defiPercentage,
    nftPercentage,
    tagArr,
  } = props;

  const cyberAddress = "https://www.cyber.xyz/@";
  const handleClick = () => {
    // e.stopPropagation()
    copy(searchAddress);
  };
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";

  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Flex margin="auto" display="flex" alignItems="center" 
          onClick={handleClick}
      
      >
        <Text color={textColorSecondary} fontSize="sm" marginRight={2}>
          {searchAddress.slice(0, 5)}...
          {searchAddress.slice(
            searchAddress.length - 5,
            searchAddress.length - 1
          )}
        </Text>
        <Icon
          as={MdFilterNone}
          w={13}
          h={13}
          color="#A3AED0"
          _hover={{ color: "#6656FF" }}
        />
      </Flex>

      <Flex w="max-content" mx="auto" mt="10px" marginBottom="20px">
        <Grid
          gridTemplateColumns={{
            base: "repeat(2, 1fr)",
            "2xl": "repeat(2, 1fr)",
          }}
          gap="10px"
          display={{ base: "block", lg: "grid" }}
        >
          {tagArr.map((res, index) => {
            return (
              <Box
                marginRight="7px"
                fontSize="11.2px"
                backgroundColor="#1B254B"
                padding="7px 18px"
                borderRadius="11px"
                userSelect="none"
                key={index + 1}
              >
                #{res}
              </Box>
            );
          })}
        </Grid>
      </Flex>
      <Flex
        margin="auto"
        display="flex"
        justifyContent="space-between"
        w={313}
        marginBottom="20px"
      >
        <Text
          cursor="pointer"
          color="#438EFF"
          font-size="14px"
          onClick={() => {
            window.open(`https://etherscan.io/address/${searchAddress}`);
          }}
        >
          Etherscan
        </Text>
        <Text
          cursor="pointer"
          onClick={() => {
            window.open(`https://opensea.io/${searchAddress}`);
          }}
          color="#438EFF"
          font-size="14px"
        >
          Opensea
        </Text>
        <Text
          cursor="pointer"
          onClick={() => {
            window.open(`https://www.cyber.xyz/@${searchAddress}`);
          }}
          color="#438EFF"
          font-size="14px"
        >
          Cyber.xyz
        </Text>
      </Flex>
      <Balance total2Usd={total2Usd}></Balance>
      <Flex display="flex" justifyContent="space-around">
        <Flex flexDirection="column">
          <Box>
            <Image src={NFTLogo} width="60px" height="60px" alt="Horizon UI" />
          </Box>
          <Box marginLeft="16px">
            <Box fontSize="16px" color="#A3AED0" fontWeight="500">
              Assets on ERC721
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="18px" color="#FFFFFF">
                ${nft2Usd}
              </Text>
              <Text fontSize="18px" color="#FFFFFF" marginLeft="10px">
                {nftPercentage}%
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex flexDirection="column" marginLeft="10px">
          <Box>
            <Image src={SLogo} width="60px" height="60px" alt="Horizon UI" />
          </Box>
          <Box marginLeft="16px">
            <Box>
              <Text fontSize="16px" color="#A3AED0" fontWeight="500">
                Assets on ERC20
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize="18px" color="#FFFFFF">
                ${defi2Usd}
              </Text>
              <Text fontSize="18px" color="#FFFFFF" marginLeft="10px">
                {defiPercentage}%
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
}
