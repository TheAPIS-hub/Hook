import './index.css'
import { Box, Grid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import backLogo from 'assets/svg/BgImage.svg'
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
import { getSearchDatas, setSearchHeats } from '../../../../../hook/hook'
export default function Track(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Image src={backLogo} alt="Horizon UI" height="250px" w="100%" />
      <Box className="PortfolioText">Portfolio Track</Box>
      <Box className="VisualizeText">
        Visualize crypto assets, recent activities and more.
      </Box>
      <InputGroup
        w={{ base: '100%', md: '860px' }}
        borderRadius="20px"
        border="1px solid #a3aed059"
        height="60px"
        margin="auto"
        marginTop="50px"
        backgroundColor=" #111C44"
        {...rest}
      >
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
              paddingTop="20px"
              icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
            ></IconButton>
          }
        />
        <Input
          variant="search"
          bg={background ? background : inputBg}
          fontStyle="normal"
          backgroundColor=" #111C44"
          fontWeight="400"
          fontSize="14px"
          lineHeight="20px"
          letterSpacing="-0.28px"
          color="#A3AED0"
          paddingTop="30px"
          _placeholder={{ color: 'gray.400', fontSize: '14px' }}
          borderRadius={borderRadius ? borderRadius : '30px'}
          placeholder={
            placeholder ? placeholder : 'Search by Ens/ Ethereum address '
          }
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
    </Box>
  )
}
