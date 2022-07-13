import React, { useState } from 'react'

// Chakra imports
import {
  Icon,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
// Assets
import {
  MdKeyboardArrowDown,
  MdOutlinePerson,
  MdOutlineCardTravel,
  MdOutlineLightbulb,
  MdOutlineSettings,
} from 'react-icons/md'
import { useEffect } from 'react'
import { getGameTypes } from '../../../../../../hook/hook'

export default function TapyBtn(props) {
  const { chooseSort, ...rest } = props

  const textColor = useColorModeValue('secondaryGray.500', 'white')
  const textHover = useColorModeValue(
    { color: 'secondaryGray.900', bg: 'unset' },
    { color: 'secondaryGray.500', bg: 'unset' }
  )
  const iconColor = useColorModeValue('brand.500', 'white')
  const bgList = useColorModeValue('white', 'whiteAlpha.100')
  const bgShadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset'
  )
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  const bgHover = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.50' }
  )
  const bgFocus = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.100' }
  )
  const [downData, setDownData] = useState(false)
  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure()
  const [MenuItemData, setMenuItemData] = useState([])
  const [showText, setShowText] = useState('Sandbox')

  useEffect(() => {
    getGameTypes().then((res) => {
      console.log(res)
      setMenuItemData(res.data.data)
    })
  }, [])

  return (
    <Menu isOpen={isOpen1} onClose={onClose1}>
      <MenuButton
        alignItems="center"
        bg={bgButton}
        _hover={bgHover}
        _focus={bgFocus}
        _active={bgFocus}
        w={{ sm: '150px', md: '200px' }}
        h="56px"
        lineHeight="100%"
        onClick={() => {
          onOpen1()
          setDownData(!downData)
        }}
        borderRadius="16px"
        {...rest}
      >
        <Flex
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: ' auto',
            padding: '0px 13px',
            boxSizing: 'border-box',
          }}
          justifyContent="space-between"
          w="100%"
        >
          <Text
            style={{
              color: 'rgba(128,129,145,1)',
              fontSize: '14px',
              fontWeight: '700',
            }}
            width="144px"
            textAlign=" left"
          >
            {showText}
          </Text>
          <Icon
            as={MdKeyboardArrowDown}
            color={iconColor}
            w={{
              base: '24px',
              md: '18px',
              xl: '24px',
              '2xl': '24px',
            }}
            h={{
              base: '24px',
              md: '18px',
              xl: '24px',
              '2xl': '24px',
            }}
            transform={downData ? 'rotate(180deg)' : 'rotate(0deg)'}
          />
        </Flex>
      </MenuButton>
      <MenuList
        w="90pxpx"
        minW="unset"
        maxW="200px !important"
        border="transparent"
        backdropFilter="blur(63px)"
        bg={bgList}
        boxShadow={bgShadow}
        borderRadius="20px"
        p="15px"
      >
        {MenuItemData &&
          MenuItemData.map((item, index) => {
            return (
              <MenuItem
                transition="0.2s linear"
                color={textColor}
                _hover={textHover}
                borderRadius="8px"
                _active={{
                  bg: 'transparent',
                }}
                _focus={{
                  bg: 'transparent',
                }}
                mb="10px"
                p="0 15px"
                onClick={() => {
                  //   chooseSort('liked')
                  setShowText(item.name)
                }}
              >
                <Flex align="center">
                  <Text fontSize="sm" fontWeight="400">
                    {item.name}
                  </Text>
                </Flex>
              </MenuItem>
            )
          })}
      </MenuList>
    </Menu>
  )
}
