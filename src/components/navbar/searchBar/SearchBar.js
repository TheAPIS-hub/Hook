import React, { useState } from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'
import { getSearchDatas, setSearchHeats } from '../../../hook/hook'
export function SearchBar(props) {
  // Pass the computed styles into the `__css` prop
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()

  return (
    <InputGroup w={{ base: '100%', md: '200px' }} {...rest}>
      <InputLeftElement
        children={
          <IconButton
            bg="inherit"
            borderRadius="inherit"
            _hover="none"
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent',
            }}
            _focus={{
              boxShadow: 'none',
            }}
            icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
          ></IconButton>
        }
      />
      <Input
        variant="search"
        fontSize="sm"
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight="500"
        _placeholder={{ color: 'gray.400', fontSize: '14px' }}
        borderRadius={borderRadius ? borderRadius : '30px'}
        placeholder={placeholder ? placeholder : 'Search...'}
        onChange={(value) => {
          setInputValue(value.target.value)
        }}
        onKeyDown={(res) => {
          if (res.keyCode === 13) {
            getSearchDatas(inputValue.toLowerCase()).then((searchRes) => {
              if (searchRes.data.code == 200) {
                if (searchRes.data.data.tokenBalance.code == 1) {
                  localStorage.setItem(
                    'searchData',
                    JSON.stringify(searchRes.data.data)
                  )
                  localStorage.setItem(
                    'searchAddress',
                    inputValue.toLowerCase()
                  )
                  setSearchHeats(inputValue.toLowerCase())
                  history.push({ pathname: '/admin/info' })
                } else {
                  alert('false')
                }
              }
            })
          }
        }}
      />
    </InputGroup>
  )
}
