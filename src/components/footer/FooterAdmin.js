/*eslint-disable*/
import React from 'react'
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import Card from 'components/card/Card'
import { isMobile } from '../../views/admin/main/profile/gameDetail/compoments/until.js'

export default function Footer() {
  const textColor = useColorModeValue('gray.400', 'white')
  const { toggleColorMode } = useColorMode()
  return (
    <>
      {isMobile() ? (
        <>
          <Card>
            <Flex direction="column" padding="52px 19px 31px 36px">
              <Flex
                zIndex="3"
                flexDirection={{
                  base: 'column',
                  xl: 'row',
                }}
                alignItems={{
                  base: 'center',
                  xl: 'start',
                }}
                // alignItems="center"
              >
                <Text
                  color={textColor}
                  textAlign={{
                    base: 'center',
                    xl: 'start',
                  }}
                  marginRight="45px"
                >
                  Copyright &copy; {1900 + new Date().getYear()}
                  <Text as="span" fontWeight="500" ms="4px">
                    HOOK
                    <Link
                      mx="3px"
                      color={textColor}
                      href=""
                      target="_blank"
                      fontWeight="700"
                    ></Link>
                  </Text>
                </Text>
                <Text as="span" fontWeight="500" ms="4px" marginRight="30px">
                  One-stop Data Analysis For All Blockchains.
                </Text>
                <Text as="span" fontWeight="500" ms="4px">
                  Help Web2 Gamers play to Web3 Games.
                </Text>
              </Flex>
              <Flex>
                <List display="flex" marginTop="27px" flexWrap="wrap">
                  <ListItem
                    me={{
                      base: '20px',
                      md: '44px',
                    }}
                  >
                    <Link
                      fontWeight="500"
                      color="#A3AED0"
                      href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/products/hook"
                      _hover={{ color: '#7551FF' }}
                    >
                      About
                    </Link>
                  </ListItem>
                  <ListItem
                    me={{
                      base: '20px',
                      md: '44px',
                    }}
                  >
                    <Text fontWeight="500" color="#A3AED0" href="/licenses">
                      API
                    </Text>
                  </ListItem>
                  <ListItem
                    me={{
                      base: '20px',
                      md: '44px',
                    }}
                  >
                    <Text
                      fontWeight="500"
                      color="#A3AED0"
                      href="https://simmmple.com/terms-of-service"
                    >
                      Contact
                    </Text>
                  </ListItem>
                  <ListItem
                    me={{
                      base: '20px',
                      md: '44px',
                    }}
                  >
                    <Text
                      fontWeight="500"
                      color="#A3AED0"
                      href="https://www.blog.simmmple.com/"
                    >
                      Help
                    </Text>
                  </ListItem>
                  <ListItem
                    me={{
                      base: '20px',
                      md: '44px',
                    }}
                  >
                    <Text
                      fontWeight="500"
                      color="#A3AED0"
                      href="https://www.blog.simmmple.com/"
                    >
                      Jobs
                    </Text>
                  </ListItem>
                  <ListItem
                    me={{
                      base: '20px',
                      md: '44px',
                    }}
                  >
                    <Text
                      fontWeight="500"
                      color="#A3AED0"
                      href="https://www.blog.simmmple.com/"
                    >
                      Bug Bounty
                    </Text>
                  </ListItem>
                  <ListItem
                    me={{
                      base: '20px',
                      md: '44px',
                    }}
                  >
                    <Link
                      fontWeight="500"
                      color="#A3AED0"
                      href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/docs/terms-and-conditions"
                      _hover={{ color: '#7551FF' }}
                    >
                      Terms of Service
                    </Link>
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </Card>
        </>
      ) : (
        <Card>
          <Flex direction="column" padding="52px 19px 31px 36px">
            <Flex
              zIndex="3"
              flexDirection={{
                base: 'column',
                xl: 'row',
              }}
              alignItems={{
                base: 'center',
                xl: 'start',
              }}
              // alignItems="center"
            >
              <Text
                color={textColor}
                textAlign={{
                  base: 'center',
                  xl: 'start',
                }}
                mb={{ base: '20px', xl: '0px' }}
                marginRight="30px"
              >
                Copyright &copy; {1900 + new Date().getYear()}
                <Text as="span" fontWeight="500" ms="4px">
                  HOOK
                  <Link
                    mx="3px"
                    color={textColor}
                    href=""
                    target="_blank"
                    fontWeight="700"
                  ></Link>
                </Text>
              </Text>
              <Text as="span" fontWeight="500" ms="4px" marginRight="30px">
                One-stop Data Analysis For All Blockchains.
              </Text>
              <Text as="span" fontWeight="500" ms="4px">
                Help Web2 Gamers play to Web3 Games.
              </Text>
            </Flex>
            <Flex>
              <List display="flex" marginTop="27px" flexWrap="wrap">
                <ListItem
                  me={{
                    base: '20px',
                    md: '44px',
                  }}
                >
                  <Link
                    fontWeight="500"
                    color="#A3AED0"
                    href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/products/hook"
                    _hover={{ color: '#7551FF' }}
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem
                  me={{
                    base: '20px',
                    md: '44px',
                  }}
                >
                  <Text fontWeight="500" color="#A3AED0" href="/licenses">
                    API
                  </Text>
                </ListItem>
                <ListItem
                  me={{
                    base: '20px',
                    md: '44px',
                  }}
                >
                  <Text
                    fontWeight="500"
                    color="#A3AED0"
                    href="https://simmmple.com/terms-of-service"
                  >
                    Contact
                  </Text>
                </ListItem>
                <ListItem
                  me={{
                    base: '20px',
                    md: '44px',
                  }}
                >
                  <Text
                    fontWeight="500"
                    color="#A3AED0"
                    href="https://www.blog.simmmple.com/"
                  >
                    Help
                  </Text>
                </ListItem>
                <ListItem
                  me={{
                    base: '20px',
                    md: '44px',
                  }}
                >
                  <Text
                    fontWeight="500"
                    color="#A3AED0"
                    href="https://www.blog.simmmple.com/"
                  >
                    Jobs
                  </Text>
                </ListItem>
                <ListItem
                  me={{
                    base: '20px',
                    md: '44px',
                  }}
                >
                  <Text
                    fontWeight="500"
                    color="#A3AED0"
                    href="https://www.blog.simmmple.com/"
                  >
                    Bug Bounty
                  </Text>
                </ListItem>
                <ListItem
                  me={{
                    base: '20px',
                    md: '44px',
                  }}
                >
                  <Link
                    fontWeight="500"
                    color="#A3AED0"
                    href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/docs/terms-and-conditions"
                    _hover={{ color: '#7551FF' }}
                  >
                    Terms of Service
                  </Link>
                </ListItem>
              </List>
            </Flex>
          </Flex>
        </Card>
      )}
    </>
  )
}
