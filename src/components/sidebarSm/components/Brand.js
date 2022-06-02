import React from 'react'

// Chakra imports
import { Flex, useColorModeValue, Image } from '@chakra-ui/react'
import Logo from '../../../assets/svg/LogoNew.svg'
// Custom components
import { HorizonLogo } from 'components/icons/Icons'
import { HSeparator } from 'components/separator/Separator'
import miniLogo from '../../../assets/img/miniLogo.png'

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white')

  return (
    <Flex padding="0" justifyContent="center">
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Image
        src={miniLogo}
        alt="HOOK"
        width="42px"
        height="42px"
        marginBottom="66px"
        marginTop="25px"
      />
    </Flex>
  )
}

export default SidebarBrand
