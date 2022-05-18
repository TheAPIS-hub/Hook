import React, { useEffect, useState } from 'react'

// Chakra imports
import { Flex, Grid, useColorModeValue, SimpleGrid } from '@chakra-ui/react'
// Custom components
import TableTopCreators from 'views/admin/dashboards/default/components/TableTopCreators'
import tableDataTopCreators from 'views/admin/dashboards/default/variables/tableDataTopCreators.json'
import { tableColumnsTopCreators } from 'views/admin/dashboards/default/variables/tableColumnsTopCreators'

import DailyTraffic from 'views/admin/dashboards/default/components/DailyTraffic'
import MostVisitedTable from 'views/admin/dashboards/default/components/MostVisitedTable'
import TotalMarketValue from 'views/admin/dashboards/default/components/TotalMarketValue'

import { tableTotalMarketValue } from './variables/tableTotalMarketValue'
import { VSeparator } from 'components/separator/Separator'
import OverallRevenue from 'views/admin/dashboards/default/components/OverallRevenue'
import ProfitEstimation from 'views/admin/dashboards/default/components/ProfitEstimation'
import ProjectStatus from 'views/admin/dashboards/default/components/ProjectStatus'
import YourCard from 'views/admin/dashboards/default/components/YourCard'
import YourTransfers from 'views/admin/dashboards/default/components/YourTransfers'
import { tableColumnsMostVisited } from 'views/admin/dashboards/default/variables/tableColumnsMostVisited'
import MiniStatistics from 'components/card/MiniStatistics'
import {
  getGraphData,
  getMarketCapAndVolume,
  getSearchRank,
  getCmcDatas,
} from '../../../../hook/hook'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../default/index.css'
import BigNumber from 'bignumber.js'
import Skeleton from './Skeleton/index'
export default function Default() {
  const [nftVolumeData, setNftVolumData] = useState(1)
  const [defiVolumData, setDefiVolumData] = useState(1)
  const [searchData, setSearchData] = useState([])
  const [chartData, setChartData] = useState([])
  const [nftRank, setNftRank] = useState([])
  const [defiRank, setDefiRank] = useState([])
  const [isShowSkeleton, setIsShowSkeleton] = useState(true)

  useEffect(() => {
    getMarketCapAndVolume('NFT').then((res) => {
      setNftVolumData(res.data.data)
    })
    getMarketCapAndVolume('DEFI').then((res) => {
      setDefiVolumData(res.data.data)
    })
    getGraphData('1d').then((res) => {
      if (res.data.code === '200') {
        const GAMEFI = res.data.data.GAMEFI.volume
        const DEFI = res.data.data.DEFI.volume
        const NFT = res.data.data.NFT.volume
        const time = res.data.data.time.time.map((item) => {
          const date = new Date(item)
          return `${date.getMonth() + 1}-${date.getDate()}`
        })
        localStorage.setItem('time', time.join('**'))
        setChartData([
          {
            name: 'DEFI',
            data: DEFI,
          },
          {
            name: 'GAMEFI',
            data: GAMEFI,
          },
          {
            name: 'NFT',
            data: NFT,
          },
        ])
      }
    })
    getSearchRank(10).then((res) => {
      setSearchData(res.data.data)
    })
    getCmcDatas(5, 1, 'NFT').then((res) => {
      const nftData = res.data.data.NFT.data.collections
      const nftArr = nftData.map((item) => {
        return {
          collection: item.name,
          mkt: item.marketCapUsd,
          volume: item.volumeAT,
          price: item.floorPriceUsd,
        }
      })
      setNftRank(nftArr)
    })
    getCmcDatas(5, 1, 'Defi').then((res) => {
      const defiData = res.data.data.Defi.data.cryptoCurrencyList
      const returnDate = defiData.map((item) => {
        return {
          name: item.symbol,
          oneDay: item.quotes[2].percentChange24h,
          volume: item.quotes[2].volume24h,
          price: item.quotes[2].price,
        }
      })
      setDefiRank(returnDate)
      setIsShowSkeleton(false)
    })
  }, [])
  // Chakra Color Mode
  const paleGray = useColorModeValue('secondaryGray.400', 'whiteAlpha.100')

  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      {isShowSkeleton ? (
        <Skeleton></Skeleton>
      ) : (
        <Flex direction="column" width="stretch" className="dataBox">
          {/* Data */}
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>NFT</Tab>
              <Tab>DEFI</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  // className={dataType === 'NFT' ? 'active' : 'nftData'}
                  columns={{ base: 1, md: 1, lg: 3, '2xl': 3 }}
                  gap="20px"
                  mb="20px"
                >
                  <MiniStatistics
                    growth={
                      nftVolumeData?.marketCapRatio?.toFixed(2) > 0
                        ? `+${new BigNumber(nftVolumeData?.marketCapRatio || 0)
                            .times(100)
                            .toFixed(2)}%`
                        : new BigNumber(nftVolumeData?.marketCapRatio || 0)
                            .times(100)
                            .toFixed(2) + '%'
                    }
                    name="Market Cap"
                    value={'$' + nftVolumeData?.marketCap?.toLocaleString()}
                    fontColor={
                      nftVolumeData?.marketCapRatio > 0
                        ? 'green.500'
                        : 'red.500'
                    }
                  />
                  <MiniStatistics
                    growth={
                      nftVolumeData?.volumeRatio?.toFixed(2) > 0
                        ? `+${new BigNumber(nftVolumeData?.volumeRatio || 0)
                            .times(100)
                            .toFixed(2)}%`
                        : new BigNumber(nftVolumeData?.volumeRatio || 0)
                            .times(100)
                            .toFixed(2) + '%'
                    }
                    fontColor={
                      nftVolumeData?.volumeRatio > 0 ? 'green.500' : 'red.500'
                    }
                    name="Volume"
                    value={'$' + nftVolumeData?.volume?.toLocaleString()}
                  />
                  <MiniStatistics
                    growth={
                      nftVolumeData?.circulatingSupplyRatio?.toFixed(2) > 0
                        ? `+${new BigNumber(
                            nftVolumeData?.circulatingSupplyRatio || 0
                          )
                            .times(100)
                            .toFixed(2)}%`
                        : new BigNumber(
                            nftVolumeData?.circulatingSupplyRatio || 0
                          )
                            .times(100)
                            .toFixed(2) + '%'
                    }
                    name="Sales"
                    fontColor={
                      nftVolumeData?.circulatingSupplyRatio > 0
                        ? 'green.500'
                        : 'red.500'
                    }
                    value={nftVolumeData?.circulatingSupply?.toLocaleString()}
                  />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  // className={dataType === 'DEFI' ? 'active' : 'nftData'}
                  columns={{ base: 1, md: 1, lg: 3, '2xl': 3 }}
                  gap="20px"
                  mb="20px"
                >
                  <MiniStatistics
                    growth={
                      defiVolumData?.marketCapRatio?.toFixed(2) > 0
                        ? `+${new BigNumber(defiVolumData?.marketCapRatio || 0)
                            .times(100)
                            .toFixed(2)}%`
                        : new BigNumber(defiVolumData?.marketCapRatio || 0)
                            .times(100)
                            .toFixed(2) + '%'
                    }
                    name="Market Cap"
                    value={'$' + defiVolumData?.marketCap?.toLocaleString()}
                    fontColor={
                      defiVolumData?.marketCapRatio > 0
                        ? 'green.500'
                        : 'red.500'
                    }
                  />
                  <MiniStatistics
                    growth={
                      defiVolumData?.volumeRatio?.toFixed(2) > 0
                        ? `+${new BigNumber(defiVolumData?.volumeRatio || 0)
                            .times(100)
                            .toFixed(2)}%`
                        : new BigNumber(defiVolumData?.volumeRatio || 0)
                            .times(100)
                            .toFixed(2) + '%'
                    }
                    fontColor={
                      defiVolumData?.volumeRatio > 0 ? 'green.500' : 'red.500'
                    }
                    name="Volume"
                    value={'$' + defiVolumData?.volume?.toLocaleString()}
                  />
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* Chart */}
          <Grid
            mb="20px"
            gridTemplateColumns={{
              base: 'repeat(2, 1fr)',
              '2xl': '720fr 350fr',
            }}
            gap="20px"
            display={{ base: 'block', lg: 'grid' }}
          >
            <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
              <OverallRevenue chartData={chartData} />
            </Flex>
            <Flex gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}>
              <TableTopCreators
                tableData={searchData}
                columnsData={tableColumnsTopCreators}
              />
            </Flex>
          </Grid>
          {/* <Grid
              gap="20px"
              gridTemplateColumns={{
                md: 'repeat(2, 1fr)',
                '2xl': 'repeat(3, 1fr)',
              }}
              gridTemplateRows={{
                md: 'repeat(2, 1fr)',
                '2xl': '1fr',
              }}
              mb="20px"
            ></Grid> */}
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', '2xl': '1fr 1fr' }}
            gap="20px"
            display={{ base: 'block', lg: 'grid' }}
          >
            <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
              <TotalMarketValue
                tableData={defiRank}
                columnsData={tableColumnsMostVisited}
              />
            </Flex>
            <Flex gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}>
              <MostVisitedTable
                tableData={nftRank}
                columnsData={tableTotalMarketValue}
              />
            </Flex>
          </Grid>
        </Flex>
      )}

      {/* <VSeparator
        mx="20px"
        bg={paleGray}
        display={{ base: 'none', xl: 'flex' }}
      /> */}
      {/* <YourCard
        maxW={{ base: '100%', xl: '400px' }}
        maxH={{ base: '100%', xl: '1170px', '2xl': '100%' }}
      /> */}
    </Flex>
  )
}
