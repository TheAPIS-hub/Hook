import React from "react";

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
} from "@chakra-ui/react";
// Assets
import {
  MdKeyboardArrowDown,
  MdOutlinePerson,
  MdOutlineCardTravel,
  MdOutlineLightbulb,
  MdOutlineSettings,
} from "react-icons/md";

export default function Banner(props) {
  const { SetsortField } = props
  const sortField = props.sortField
  const chooseSort=props.chooseSort
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
  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

const list=[ {value:'ALL',param:'All'}, {value:'MOST HOT',param:'Most Hot'},{value:'RECENT',param:'Recent'}, {value:'PASS HOLDER',param:'Pass Holder'}];
  return (
    <Menu isOpen={isOpen1} onClose={onClose1}>
      <MenuButton
        alignItems='center'
        bg={bgButton}
        _hover={bgHover}
        _focus={bgFocus}
        _active={bgFocus}
        w={{md:'200px',sm:'100%'}}
        h={{md:'56px',sm:'72px'}}
        lineHeight='100%'
        onClick={onOpen1}
        borderRadius='16px'
        justifyContent='space-between'

      >
        <Flex style={{
          display: 'flex',
          padding: '0px 24px',
          boxSizing: ' border-box',
          alignItems: 'center',
          justifyContent:'space-between',
          width:'100%'

        }}>
          <Text style={{
            color: 'rgba(128,129,145,1)',
            fontSize: '14px',
            fontWeight: '700',
          }}
          >
            {sortField}
          </Text>
          <Icon as={MdKeyboardArrowDown} color={iconColor} w='24px' h='24px' />
        </Flex>
      </MenuButton>
      <MenuList
        w='200px'
        minW='unset'
        maxW="200px !important"
        border='transparent'
        backdropFilter='blur(63px)'
        bg={bgList}
        boxShadow={bgShadow}
        borderRadius='20px'
        p='15px'>
           {
          list.map((item, key) => {
            return (
              <MenuItem
              transition="0.2s linear"
              borderRadius="8px"
              color={textColor}
              _hover={textHover}
              _active={{
                bg: 'transparent',
              }}
              _focus={{
                bg: 'transparent',
              }}
              mb="10px"
              p="0 15px"
              mb='10px'
              key={key}
              onClick={() => {
                SetsortField(item.param)
                chooseSort(item.param);
              }}
              >
              <Flex align='center'>
                {item.value}
              </Flex>
            </MenuItem>
           
              
              )
            })
          }
      </MenuList>
    </Menu>
  );
}
