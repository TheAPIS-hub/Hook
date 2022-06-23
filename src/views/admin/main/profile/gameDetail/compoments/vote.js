import React, { useEffect, useState } from 'react'

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
  IconButton,
  useToast,
  Grid,
} from '@chakra-ui/react'
import Transfer from 'components/dataDisplay/Transfer'
import Card from 'components/card/Card.js'
// Assets
import avatar1 from 'assets/img/avatars/avatar1.png'
import saleIcon from 'assets/img/users/saleIcon.png'
import volumeIcon from 'assets/img/users/volumeIcon.png'
import soldIcon from 'assets/img/users/soldIcon.png'
import twitter from 'assets/img/users/twitter.png'
import { MdMoreHoriz } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import { CgAdd } from 'react-icons/cg'
import Players from './player'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { toThousands } from './until.js'
import { FcLike } from 'react-icons/fc'
import { formatNumber, abc } from '../../../../../../hook/untils'
import likedIcon from 'assets/img/users/liked.png'
import { likedStatus } from '../../../../../../hook/hook'
import BigNumber from 'bignumber.js'
import { isMobile } from './until.js'
export default function Vote(props) {
  const { game } = props
  const uId = localStorage.getItem('uId')
  const moon = game.moon == 0 ? 1 : game.moon
  const ngmi = game.ngmi == 0 ? 1 : game.ngmi
  const [good, setGood] = useState('')
  const [bad, setBad] = useState('')
  const [choosMoon, setchoosMoon] = useState(false)
  useEffect(() => {
    setGood(((moon / (moon + ngmi)) * 100).toFixed(0) + '%')
    setBad(((ngmi / (moon + ngmi)) * 100).toFixed(0) + '%')
  }, [])
  const [isVote, voteFun] = useState(false)
  const toast = useToast()
  return (
    <div>
      {isMobile() ? (
        <Grid gridTemplateColumns="repeat(2, 1fr)"
          background="rgba(228, 228, 228, 0.1)"
          borderRadius="4.69vw"
          mt="13.86vw"
        >
          <Flex
            borderRight="1px solid rgba(228, 228, 228, 0.1)"
            borderBottom="1px solid rgba(228, 228, 228, 0.1)"
            padding="6.9vw 2vw 10vw 4.46vw"
            height="38.93vw"
          >
            <Text fontSize="12px" color="#808191">
              <Flex>
                <Image width="16px" height="16px" mr="8px" src={saleIcon}></Image>
                <Text fontSize="3.52vw" color="#808191">
                  Price
                </Text>
              </Flex>
              <Text
                fontSize="5vw"
                mt="5.3vw"
                fontWeight="600"
                fontFamily="Poppins"
                letterSpacing="-1px"
                color='#fff'
              >
                {toThousands(game.price)}
              </Text>
            </Text></Flex>
          <Flex height="38.93vw" padding="6.9vw 2vw 10vw 4.46vw">
            <Text fontSize="3.52vw" color="#808191">
              <Flex>
                <Image width="16px" height="16px" mr="8px" src={volumeIcon}></Image>
                <Text fontSize="3.52vw" color="#808191">
                  Volume
                </Text>
              </Flex>
              <Text
                fontSize="5vw"
                mt="5.3vw"
                fontWeight="600"
                letterSpacing="-1px"
                fontFamily="Poppins"
                color='#fff'
              >
                Ξ {toThousands(new BigNumber(game.volume).toFixed(2))}
                <Text
                  as="p"
                  fontSize="4.1vw"
                  fontWeight="600"
                  color="#808191"
                >
                  ${toThousands((game.volume / 1000).toFixed(2))}K
                </Text>
              </Text>
            </Text>
          </Flex>
          <Box height="38.93vw" padding="6.9vw 2vw 10vw 4.46vw">
            <Flex>
              <Image width="16px" height="16px" mr="8px" src={soldIcon}></Image>
              <Text fontSize="3.52vw" color="#808191">
                CirculatingSupply
              </Text>
            </Flex>
            <Text
              fontSize="5vw"
              mt="5.3vw"
              fontWeight="600"
              letterSpacing="-1px"
              fontFamily="Poppins"
            >
              {toThousands(new BigNumber(game.circulatingSupply).toFixed(2))}
            </Text>
          </Box>
          <Flex
            height="38.93vw"
            padding="6.9vw 2vw 10vw 4.46vw"
            borderLeft="1px solid rgba(228, 228, 228, 0.1)"
            borderTop="1px solid rgba(228, 228, 228, 0.1)"
            mt="-1px" ml="-1px" zIndex="1"
          >
          </Flex>
        </Grid>
      ) : (
        <Flex
          bg="rgba(228, 228, 228, 0.1)"
          margin="62px 0"
          borderRadius="16px"
        >
          <Box
            width={{
              base: '100%',
              xl: '25%',
            }}
            p={{
              base: '10px 0 10px 10px',
              xl: '25px 0 25px 32px',
              '2xl': '30px 0 20px 60px',
            }}
            borderRight="1px solid rgba(228, 228, 228, 0.1)"
          >
            <Flex>
              <Image width="16px" height="16px" mr="8px" src={saleIcon}></Image>
              <Text fontSize="12px" color="#808191">
                Price
              </Text>
            </Flex>
            <Text
              fontSize={{
                base: 'xl',
                xl: 'xl',
                '2xl': '32px',
              }}
              mt="10px"
              fontWeight="600"
              fontFamily="Poppins"
              letterSpacing="-1px"
            >
              {toThousands(game.price)}
            </Text>
          </Box>
          <Box
            width={{
              base: '100%',
              xl: '40%',
            }}
            p={{
              base: '10px 0 10px 10px',
              xl: '25px 0 25px 20px',
              '2xl': '30px 0 20px 55px',
            }}
            borderRight="1px solid rgba(228, 228, 228, 0.1)"
          >
            <Flex>
              <Image width="16px" height="16px" mr="8px" src={volumeIcon}></Image>
              <Text fontSize="12px" color="#808191">
                Volume
              </Text>
            </Flex>
            <Text
              fontSize={{
                base: 'xl',
                xl: 'xl',
                '2xl': '32px',
              }}
              mt="10px"
              fontWeight="600"
              letterSpacing="-1px"
              fontFamily="Poppins"
            >
              Ξ {toThousands(new BigNumber(game.volume).toFixed(2))}
              <Text
                as="span"
                fontSize="18px"
                fontWeight="600"
                color="#808191"
                ml="18px"
              >
                ${toThousands((game.volume / 1000).toFixed(2))}K
              </Text>
            </Text>
          </Box>
          <Box
            width={{
              base: '100%',
              xl: '28%',
            }}
            p={{
              base: '10px 0 10px  10px',
              xl: '25px 0 25px 8%',
              '2xl': '30px 0 20px 8%',
            }}
          >
            <Flex>
              <Image width="16px" height="16px" mr="8px" src={soldIcon}></Image>
              <Text fontSize="12px" color="#808191">
                CirculatingSupply
              </Text>
            </Flex>
            <Text
              fontSize={{
                base: 'xl',
                xl: 'xl',
                '2xl': '32px',
              }}
              mt="10px"
              fontWeight="600"
              letterSpacing="-1px"
              fontFamily="Poppins"
            >
              {toThousands(new BigNumber(game.circulatingSupply).toFixed(2))}
            </Text>
          </Box>
        </Flex>
      )
      }
      <Flex
        borderTop="1px solid rgba(228, 228, 228, 0.1)"
        borderRight="0px"
        borderLeft="0px"
        padding={{
          sm: '7.2vw 0 20px',
          md: '25px 0 20px',
          base: '25px 0 20px',
          '2xl': '39px 0',
        }}
        mt={{ sm: "13.86vw", md: "0" }}
        justifyContent="space-between"
        flexDirection={{ sm: "column", md: "initial" }}
      >
        {isVote ? (
          <Box width={{ sm: "80%", md: "48%" }}>
            <Text
              mb={{ sm: "18vw", md: "0" }}
              fontSize={{ sm: "8.53vw", md: "18px" }}
              className="font-Inter-SemiBold"
              fontWeight="600"
              lineHeight={{ sm: "10.13vw", md: "24px" }}>Your‘ve voted <br/>- {choosMoon ? ('👍To da moon') : (
                <Box>
                  <Text
                    as="span"
                    transform="matrix(1, 0, 0, -1, 0, 0)"
                    display="inline-block"
                  >
                    {' '}
                    👍
                  </Text>
                  Ngmi
                </Box>
              )}
            </Text>
            <Text fontSize="13px" color="#B2B3BD" width="80%" lineHeight="25px" display={{ sm: "none", md: "block" }}>
              Your vote for 24 hours. In order to update how you feel about{' '}
              {game.name},come back tomorrow!
            </Text>
          </Box>
        ) : (
          <Box width={{ sm: "100%", md: "48%" }} margin={{sm:"0",md:"14px 0"}}>
            <Text fontSize={{ sm: "24px", md: "18px" }}>
              How do you feel about {game.name} today？
            </Text>
            <Text fontSize="13px" color="#B2B3BD" width="80%">
              Vote to see community result
            </Text>
          </Box>
        )}
        {isVote ? (
          <Box width={{ sm: "100%", md: "48%" }} fontSize="13px" color="#B2B3BD" pt="10px">
            <Flex mb="20px">
              <Box
                height="1px"
                width={good}
                borderRight="1px"
                bgColor="#FF9A7B"
                position="relative"
              >
                <Box className="per-tips" >
                  {good}
                </Box>
              </Box>
              <Box
                height="1px"
                width={bad}
                borderRight="1px"
                bgColor="#6C5DD3"
              ></Box>
            </Flex>
            <Text fontSize="12px" color="#B2B3BD" width="80%" lineHeight="16px" display={{ sm: "block", md: "none" }}>
              Your vote for 24 hours. In order to update how you feel about{' '}
              {game.name},come back tomorrow!
            </Text>
            <Flex
              justifyContent="space-between"
              fontSize="13px"
              color="#B2B3BD"
              display={{ sm: "none", md: "block" }}
            >
              <Text> {good} To da moon&nbsp;👍 </Text>
              <Text>
                <Text
                  as="span"
                  transform="matrix(1, 0, 0, -1, 0, 0)"
                  display="inline-block"
                >
                  {' '}
                  👍
                </Text>
                &nbsp;{bad} Ngmi
              </Text>
            </Flex>
          </Box>
        ) : (
          <Box width={{ sm: "100%", md: "48%" }} fontSize="13px" color="#B2B3BD" pt="10px">
            <Flex
              justifyContent="end"
              fontSize="14px"
              fontWeight="700"
              color="#B2B3BD"
              margin="15px 0"
            >
              <Button
                width="140px"
                height="41px"
                border="1px solid rgba(225 225 225 / 0.5)"
                borderRadius="12px"
                background="transparent"
                mr="11px"
                onClick={(e) => {
                  if (!uId) {
                    toast({
                      title: `please sign in`,
                      position: 'top',
                      status: 'warning',
                      isClosable: true,
                      duration: 1000,
                    })
                    return
                  }
                  likedStatus(game.gpId, uId, 1).then((res) => {
                    if (res.data.code == 200) {
                    } else {
                    }
                  })
                  setchoosMoon(true)
                  voteFun(!isVote)
                }}
              >
                👍 &nbsp;&nbsp;To da moon
              </Button>
              <Button
                width="109px"
                height="41px"
                border="1px solid rgba(225 225 225 / 0.5)"
                borderRadius="12px"
                background="transparent"
                onClick={(e) => {
                  if (!uId) {
                    toast({
                      title: `please sign in`,
                      position: 'top',
                      status: 'warning',
                      isClosable: true,
                      duration: 1000,
                    })
                    return
                  }
                  likedStatus(game.gpId, uId, 1).then((res) => {
                    setchoosMoon(false)
                    voteFun(!isVote)

                  })
                }}
              >
                <Text
                  as="span"
                  transform="matrix(1, 0, 0, -1, 0, 0)"
                  display="inline-block"
                >
                  👍&nbsp;&nbsp;
                </Text>
                Ngmi
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>
    </div >
  )
}
