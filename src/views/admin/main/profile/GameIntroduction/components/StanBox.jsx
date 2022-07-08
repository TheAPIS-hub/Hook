import React, { useEffect, useState } from 'react'
import { Box, Grid, Flex, SimpleGrid, Image } from '@chakra-ui/react'
import '../index.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Demo from '../../../../../../assets/img/nfts/Demo.png'
import Demo2 from '../../../../../../assets/img/nfts/Demo2.png'
export default function Sandbox() {
  const [GameNameData, setGameNameData] = useState([
    {
      GameName: 'Sandbox',
    },
    {
      GameName: 'Shooter',
    },
    {
      GameName: 'Simulation',
    },
    {
      GameName: 'Sport',
    },
  ])
  const [GameCaedData, setGameCaedData] = useState([
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
    {
      GameCardImg: Demo,
      GameChangCardImg: Demo2,
    },
  ])
  const [isHover, setHover] = useState(false)
  const [idx, setIdx] = useState(null)
  return (
    <Box
      margin="auto"
      width={{ md: '1236px', xl: '1236px', '2xl': '1711px' }}
      paddingTop="39px"
    >
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          {GameNameData.map((item, index) => {
            return (
              <Tab
                className="TabName"
                w={{ md: '149px', xl: '149px', '2xl': '195px' }}
              >
                {item.GameName}
              </Tab>
            )
          })}
        </TabList>

        <TabPanels marginTop="37px">
          {GameNameData.map((item, index) => {
            return (
              <TabPanel padding="none">
                <SimpleGrid
                  className="MarketCapFount"
                  columns={{ base: 5, md: 3, lg: 5, '2xl': 5 }}
                  gap="20px"
                >
                  {GameCaedData.map((item, index) => {
                    return (
                      <Box
                        onMouseOver={() => {
                          setHover(true)
                          console.log(index)
                          setIdx(index)
                        }}
                        onMouseOut={() => setHover(false)}
                        w={{
                          sm: '136px',
                          md: '224px',
                          xl: '224px',
                          '2xl': '312px',
                        }}
                        h={{
                          sm: '150px',
                          md: '245px',
                          xl: '245px',
                          '2xl': '340px',
                        }}
                      >
                        {isHover & (index == idx) ? (
                          <Image src={item.GameChangCardImg} />
                        ) : (
                          <Image src={item.GameCardImg} />
                        )}
                      </Box>
                    )
                  })}
                </SimpleGrid>
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>
    </Box>
  )
}
