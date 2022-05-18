import React from 'react'

// Chakra imports
import { Flex, useColorModeValue, Image } from '@chakra-ui/react'
import Logo from '../../../assets/svg/LogoNew.png'
// Custom components
import { HorizonLogo } from 'components/icons/Icons'
import { HSeparator } from 'components/separator/Separator'

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white')

  return (
    <Flex padding=" 0 37px">
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Image
        src={Logo}
        alt="Horizon UI"
        width="165px"
        height="42px"
        marginBottom="66px"
        marginTop="25px"
      />
    </Flex>
  )
}

export default SidebarBrand
