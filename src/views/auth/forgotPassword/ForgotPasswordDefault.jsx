import React, { useState } from 'react'

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  Text,
  Image,
} from '@chakra-ui/react'

// Custom components
import DefaultAuth from 'layouts/auth/types/Default'

// Assets
import illustration from 'assets/img/auth/sign.svg'
import LoadingImg from '../../../assets/img/users/loading.gif'
import { forgotPwd } from '../../../hook/hook'
function ForgotPassword() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorSecondary = 'gray.400'
  const brandStars = useColorModeValue('brand.500', 'brand.400')
  const [email, setEmail] = useState('')
  const [isPending, setIsPending] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        w="100%"
        maxW="max-content"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: '30px', md: '60px', lg: '100px', xl: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', lg: '16vh', xl: '22vh' }}
        flexDirection="column"
      >
        <Box me="auto" mb="34px">
          <Heading
            color={textColor}
            fontSize={{ base: '3xl', md: '36px' }}
            mb="16px"
          >
            Forgot your password?
          </Heading>
          <Text
            color={textColorSecondary}
            fontSize="md"
            w={{ base: '100%', lg: '456px' }}
            maxW="100%"
          >
            No problem. Just let us know your email address and we'll email you
            a password reset link that will allow you to choose a new one.
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', lg: '456px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
          align="start"
        >
          <FormControl>
            <FormLabel color="red">{errMsg}</FormLabel>

            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              type="email"
              placeholder="mail@theapis.xyz"
              mb="24px"
              size="lg"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={() => {
                setIsPending(true)
                console.log(email)
                forgotPwd(email).then((res) => {
                  if (res.data.code == 200) {
                    localStorage.setItem('token', res.data.data)
                    localStorage.setItem('email', email)
                    setIsPending(false)
                  } else {
                    setErrMsg(res.data.msg)
                    setIsPending(false)
                  }
                })
              }}
            >
              Email password reset link
              {isPending && (
                <Image
                  marginLeft="10px"
                  width="20px"
                  src={LoadingImg}
                  alt=""
                  srcset=""
                />
              )}
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuth>
  )
}

export default ForgotPassword
