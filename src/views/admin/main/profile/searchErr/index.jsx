// import './index.css'
import { Box, Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import backLogo from 'assets/svg/BgImage.svg'
import React, { useEffect, useState } from 'react'
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
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import gameThree from '../../../../../assets/img/logo/gameThree.png'
import AllGamePage from '../allGame/index'
import { getGameItemsDatas } from '../../../../../hook/hook'
import { formatNumber } from '../../../../../hook/untils'
import searchErr from '../../../../../assets/img/searchErr.png'

export default function Track(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()

  useEffect(() => {}, [])
  return (
    <Box mt="100px" padding="0 30px">
      <Text fontSize="48px" fontWeight={800}>
        Search not found
      </Text>
      <Text width="500px" mt="20px" mb="40px" fontSize="14px" color="#b9bec7">
        Oops! The search string you entered was: asdasd adqewDqw Sorry! <br />
        This isan invalid search string.
        <br /> If you think this is a problem with us, please tell us.
      </Text>
      <Box
        className="VIewBtn"
        cursor="pointer"
        onClick={() => {
          history.push({ pathname: '/profile/searcherr' })
        }}
        style={{
          width: '300px',
          height: '84',
          borderRadius: '24px',
          background: 'rgba(117,81,255,1)',
          color: ' rgba(255,255,255,1)',
          fontWeight: '600',
          textAlign: 'center',
          lineHeight: '84px',
        }}
      >
        Back home
      </Box>
      <Image
        position="absolute"
        right="10vw"
        width="40vw"
        bottom="20vw"
        src={searchErr}
      ></Image>
    </Box>
  )
}
