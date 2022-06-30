import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, Text, Image } from '@chakra-ui/react'
import './index.css'
import { isMobile } from '../gameDetail/compoments/until.js'
import PassCard from '../../../../../assets/img/logo/HookPASS.png'
import Free from '../../../../../assets/img/logo/Subscription.png'

export default function HookPass() {
  return (
    <Box>
      {isMobile() ? (
        <></>
      ) : (
        <Box margin="auto" width="920px" paddingTop="70px">
          <Box
            width="920px"
            height="1070px"
            backgroundColor="#111C44"
            padding="54px 81px 5px 78px"
          >
            <Flex>
              <Box width="358px" marginTop="36px">
                <Box
                  width="358px"
                  height="76px"
                  borderRight="solid 1px #55575ca3"
                >
                  <Text
                    fontFamily="Helvetica"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="44px"
                    lineHeight="44px"
                    letterSpacing="-0.88px"
                    color="#FFFFFF"
                  >
                    HOOK PASS
                  </Text>
                  <Text
                    fontFamily="Helvetica"
                    fontWeight="400"
                    fontSize="20px"
                    lineHeight="20px"
                    letterSpacing="-0.4px"
                    color="#FFFFFF"
                    marginTop="12px"
                  >
                    By The APIS
                  </Text>
                </Box>

                <Text
                  fontFamily="Inter"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="25px"
                  letterSpacing="-0.32px"
                  color="#A3AED0"
                  marginTop="32px"
                >
                  Hook pass will be the key to premium features
                  <br />
                  and experiences.
                </Text>
              </Box>
              <Box marginLeft="75px">
                <Image src={PassCard} width="330px" height="208px" />
              </Box>
            </Flex>
            <Box marginTop="72px">
              <Image src={Free} width="765px" height="747px" />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
