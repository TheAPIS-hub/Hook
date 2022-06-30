import React, { useEffect, useState } from 'react'
import routes from '../../../routes.js'
import {
  Menu,
  MenuButton,
  Flex,
  Box,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Image,
  Text,
  Grid,
  Icon,
} from '@chakra-ui/react'
import { MdLineWeight, MdKeyboardArrowDown } from 'react-icons/md'
import passIcon from '../../../assets/img/passIcon.png'
import { useHistory } from 'react-router-dom'
export default function Pass(props) {
  console.log(routes)
  const history = useHistory()

  return (
    <Flex
      background="#1A1A1A"
      width="100%"
      p="0 30px"
      alignItems="center"
      height="46px"
    >
      <Box pr="16px">
        <Image width="20px" height="20px" src={passIcon}></Image>
      </Box>
      <Menu>
        <MenuButton p="0px">
          <Icon
            as={MdLineWeight}
            color="#fff"
            w={{
              base: '16px',
              md: '14px',
              xl: '16px',
              '2xl': '20px',
            }}
            h={{
              base: '16px',
              md: '14px',
              xl: '16px',
              '2xl': '20px',
            }}
          />
        </MenuButton>
        {/* <MenuList
          p="0px"
          background="var(--chakra-colors-navy-900)"
          borderRadius="20px"
          border="none"
        >
          <Flex w="100%" mb="0px">
            <Text p="10px 20px" w="100%" fontSize="sm" fontWeight="700">
              Initial release date：March 2018
            </Text>
          </Flex>
        </MenuList> */}
        <MenuList
          minW="50px"
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          {routes.map((item) => {
            return item.isShow ? (
              <Box
                cursor="pointer"
                pt="10px"
                _hover={{ color: '#eee' }}
                onClick={() => {
                  history.push({ pathname: item.layout + item.path })
                }}
              >
                {item.icon}
              </Box>
            ) : (
              ''
            )
          })}
        </MenuList>
      </Menu>
    </Flex>
  )
}
