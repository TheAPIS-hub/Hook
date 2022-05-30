// Chakra imports
import { Box, Grid } from '@chakra-ui/react'
import {
  Flex,
  Image,
  Icon,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react'
// Custom components
import Banner from 'views/admin/main/profile/overview/components/Banner'
import General from 'views/admin/main/profile/overview/components/General'
import Notifications from 'views/admin/main/profile/overview/components/Notifications'
import Projects from 'views/admin/main/profile/overview/components/Projects'
import Storage from 'views/admin/main/profile/overview/components/Storage'
import Upload from 'views/admin/main/profile/overview/components/Upload'
import { getTxDatas, getTags } from '../../../../../hook/hook'
// Assets
import banner from 'assets/img/auth/banner.png'
import avatar from 'assets/img/avatars/avatar4.png'
import React, { useEffect, useState } from 'react'
import fakeGraph from 'assets/img/dashboards/fakeGraph.png'
import ManagementTable from 'views/admin/main/account/application/components/ManagementTable'
import { tableColumnsManagement } from 'views/admin/main/account/application/variables/tableColumnsManagement'
import tableDataManagement from 'views/admin/main/account/application/variables/tableDataManagement.json'
import './index.css'
import BigNumber from 'bignumber.js'
import Skeleton from './Skeleton/index'
export const initTime = (timestamp) => {
  let date = new Date(timestamp)
  const Y = date.getFullYear() + '-'
  const M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  const D = date.getDate() >= 10 ? date.getDate() + ' ' : `0${date.getDate()} `
  const h =
    date.getHours() >= 10 ? date.getHours() + ':' : `0${date.getHours()}:`
  const m =
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
  const s = date.getSeconds()

  return Y + M + D + h + m
}

export default function Overview() {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure()

  const [total2Usd, setTotal2Usd] = useState(0)
  const [defi2Usd, setDefi2Usd] = useState(0)
  const [nft2Usd, setNft2Usd] = useState(0)
  //   const [searchToken, setSearchToken] = useState([])
  const [txData, setTxData] = useState([])
  const [defiPercentage, setDefiPercentage] = useState(0)
  const [tagArr, setTagArr] = useState([])
  const [isShowSkeleton, setIsShowSkeleton] = useState(true)

  const searchAddress =
    localStorage.getItem('searchAddress') ||
    '0x3f3a26857b3bde848927fafca975b2ee5bcf1390'
  const [searchData, setSearchData] = useState(
    JSON.parse(localStorage.getItem('searchData')) || {
      searchData: { totalPrice: 0, totalPrice_defi: 0, totalPrice_nft: 0 },
    }
  )

  useEffect(() => {
    if (!searchData || !searchAddress) {
      return
    }
    getTxDatas(searchAddress, 10, 1).then((res) => {
      if (res.data.code == 1) {
        const txData = res.data.data.map((item) => {
          console.log(initTime(item.time * 1000))
          return {
            type: item.functionName,
            transfer: `To: ${item.to.slice(0, 3)}...${item.to.slice(
              item.to.length - 5,
              item.to.length - 1
            )}   From: ${item.from.slice(0, 3)}...${item.from.slice(
              item.from.length - 5,
              item.from.length - 1
            )} `,
            value: item.value,
            token: 1,
            link: `https://etherscan.io/tx/${item.txid}`,
            time: initTime(item.time * 1000),
          }
        })
        setTxData(txData)
        setIsShowSkeleton(false)
      }
    })

    getTags(searchAddress).then((res) => {
      if (res.data.code == '200') {
        const arr = res.data.data.map((item) => item.tagName)
        setTagArr(arr)
      }
    })

    setSearchData(searchData)
    setTotal2Usd(searchData.totalPrice)
    setDefi2Usd(searchData.totalPrice_defi)
    setNft2Usd(searchData.totalPrice_nft)
    if (total2Usd && defi2Usd) {
      setDefiPercentage(
        new BigNumber(total2Usd).div(defi2Usd).times(100).toFixed(2)
      )
    }
    // setSearchToken(searchData.tokenBalance.data)
    // const defiToken = searchData.tokenBalance.data.filter(
    //   (res) => res.tokenInfo.c == null
    // )
    // const nftToken = searchData.tokenBalance.data.filter(
    //   (res) => res.tokenInfo.c != null
    // )
    // setDefiToken(defiToken)
    // setNftToken(nftToken)
  }, [searchAddress, defi2Usd, searchData, total2Usd])
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      {isShowSkeleton ? (
        <Skeleton></Skeleton>
      ) : (
        <>
          <Grid
            templateColumns={{
              base: '1fr',
              lg: '1fr 1fr 1fr',
            }}
            templateRows={{
              base: 'repeat(3, 1fr)',
              lg: '1fr',
            }}
            gap={{ base: '20px', xl: '20px' }}
          >
            <Banner
              gridArea="1 / 1 / 2 / 2"
              banner={banner}
              avatar={avatar}
              name="Hook Whale"
              searchAddress={searchAddress}
              total2Usd={total2Usd?.toLocaleString()}
              defi2Usd={defi2Usd?.toLocaleString()}
              nft2Usd={nft2Usd?.toLocaleString()}
              defiPercentage={defiPercentage}
              nftPercentage={100 - defiPercentage}
              tagArr={tagArr}
            />
            <Storage
              gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }}
              used={25.6}
              total={50}
              searchData={searchData}
            />
            <Upload
              gridArea={{
                base: '3 / 1 / 4 / 2',
                lg: '1 / 3 / 2 / 4',
              }}
              minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
              searchData={searchData}
            />
          </Grid>
          <Grid
            mb="20px"
            templateColumns={{
              base: '1fr',
              lg: 'repeat(1, 1fr)',
              '2xl': '1',
            }}
            templateRows={{
              base: '1fr',
              lg: 'repeat(1, 1fr)',
              '2xl': '1fr',
            }}
            gap={{ base: '20px', xl: '20px' }}
          >
            {/* <Projects
          gridArea="1 / 2 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name="Hook Whale"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />  
        <General
          gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }}
          minH="365px"
          pe="20px"
        />
        <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: '3 / 1 / 4 / 2',
            lg: '2 / 1 / 3 / 3',
            '2xl': '1 / 3 / 2 / 4',
          }}
        /> */}
            <ManagementTable
              tableData={txData}
              columnsData={tableColumnsManagement}
            />
          </Grid>
        </>
      )}
    </Box>
  )
}
