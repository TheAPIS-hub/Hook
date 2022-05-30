import React, { useEffect, useState } from 'react'

// Chakra imports
import { Flex, Image, Text, Box } from '@chakra-ui/react'
import { dateDiff } from './until.js'
import Transfer from 'components/dataDisplay/Transfer'
import Card from 'components/card/Card.js'
// Assets
import axie1 from 'assets/img/avatars/axie1.png'
import axie2 from 'assets/img/avatars/axie2.png'
import axie3 from 'assets/img/avatars/axie3.png'
import axie4 from 'assets/img/avatars/axie4.png'
import axieIcon from 'assets/img/avatars/axieIcon.png'
import arrow from 'assets/img/users/arrow.png'
import BigNumber from 'bignumber.js'
import { getGameNormal } from '../../../../../../hook/hook'
export default function BuyAxie(props) {
  const { address } = props
  const [normalDate, setNormalDate] = useState([])
  useEffect(() => {
    getGameNormal(address, 9, 1).then((res) => {
      setNormalDate(res.data.data)
    })
  }, [])
  return (
    <div>
      <Text
        color=" rgba(255,255,255,1)"
        fontSize="24px"
        fontWeight=" 500"
        textAlign="left"
        lineHeight="32px"
        margin="55px 0 30px 0"
      >
        Buy Axie
      </Text>
      <Card direction="column" w="100%" p="0px" bgColor="transparent">
        {normalDate.length > 0 &&
          normalDate.map((item, key) => (
            <Flex
              key={key}
              justifyContent="space-between"
              bgColor="rgba(228, 228, 228, 0.1)"
              alignItems="center"
              w="100%"
              mb="12px"
              borderRadius="16px"
              height="80px"
              pr="4"
            >
              <Flex>
                {/* <Image src={item.img}></Image> */}
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  ml={{ base: '4', '2xl': '8' }}
                >
                  <Flex
                    style={{
                      width: '77px',
                      height: '18px',
                      padding: '0px 4px',
                      background: '#FB9A04',
                      lineHeight: '18px',
                      color: 'white',
                      alignItems: 'center',
                      borderRadius: '3px',
                      justifyContent: 'center',
                      margin: '5px 0 10px 0',
                    }}
                  >
                    <img
                      src={axieIcon}
                      style={{ width: '10px', height: '12px' }}
                    ></img>
                    <Text fontSize="10px" as="span">
                      #{item.blockNo}
                    </Text>
                  </Flex>
                  {/* <Text color="#B2B3BD" fontSize="10px" >breed count 4</Text> */}
                </Flex>
              </Flex>
              <Flex alignItems="center">
                <Flex fontSize="10px" flexDirection="column">
                  <Flex fontWeight="600">
                    <Box marginRight="6px">
                      <Text className="symbol"></Text>
                      <Text className="symbol"></Text>
                      <Text className="symbol"></Text>
                    </Box>
                    <Text color="#B2B3BD">
                      0.004
                      {/* {item.tokenTransfer[0].value/(Math.pow(10,item.tokenTransfer[0].tokenInfo.d))} */}
                    </Text>
                  </Flex>
                  <Text>$8.23</Text>
                  <Text color="#B2B3BD">
                    {dateDiff(item.time * 1000, null)}
                  </Text>
                </Flex>
                <Image height="20px" width="20px" src={arrow} ml="4"></Image>
              </Flex>

              {/* <Box fontSize="10px">
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
            </Box> */}
            </Flex>
          ))}
      </Card>
    </div>
  )
}
