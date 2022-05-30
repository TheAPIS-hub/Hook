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
  const { setSort } = props
  const sort = props.sort
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

  return (
    <Menu isOpen={isOpen1} onClose={onClose1}>
      <MenuButton
        alignItems='center'
        bg={bgButton}
        _hover={bgHover}
        _focus={bgFocus}
        _active={bgFocus}
        w='200px'
        h='56px'
        lineHeight='100%'
        onClick={onOpen1}
        borderRadius='16px'
      >
        <Flex style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 24px',
          boxSizing: ' border-box',
          alignItems: 'center'
        }}>
          <Text style={{
            color: 'rgba(128,129,145,1)',
            fontSize: '14px',
            fontWeight: '700',
          }}
          >
            {sort == "desc" ? "MOST RECENT" : "OLDERS"}
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
          mb='10px'>
          <Flex align='center'>
            {sort == "desc" ? <Text fontSize='sm' fontWeight='400'
              onClick={() => {
                setSort("asc")
                props.getCommentsDate()
              }}
            >
              OLDERS
            </Text> :
              <Text fontSize='sm' fontWeight='400'
                onClick={() => {
                  setSort("desc")
                  props.getCommentsDate()
                }}
              >
                MOST RECENT
              </Text>}


          </Flex>
        </MenuItem>
        {/* <MenuItem
          transition='0.2s linear'
          p='0px'
          borderRadius='8px'
          color={textColor}
          _hover={textHover}
          _active={{
            bg: "transparent",
          }}
          _focus={{
            bg: "transparent",
          }}
          mb='10px'>
          <Flex align='center'>
            <Text fontSize='sm' fontWeight='400'>
            Most Liked
            </Text>
          </Flex>
        </MenuItem> */}
      </MenuList>
    </Menu>
  );
}
