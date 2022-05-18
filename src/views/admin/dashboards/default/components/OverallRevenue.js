import React from 'react'
import { getGraphData } from '../../../../../hook/hook'

// Chakra imports
import {
  Flex,
  Box,
  Icon,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import LineChart from 'components/charts/LineChart'

// Custom components
import Card from 'components/card/Card.js'
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from '../variables/charts'

// Assets
import { RiArrowUpSFill } from 'react-icons/ri'

export default function OverallRevenue(props) {
  const { chartData, ...rest } = props
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb={{ base: '20px', lg: '0px' }}
      {...rest}
    >
      <Flex justify="space-between" px="20px" pt="5px">
        <Flex align="center">
          <Flex flexDirection="column" me="20px">
            <Text
              color={textColor}
              fontSize="24px"
              fontWeight="bold"
              lineHeight="100%"
            >
              
              DeFi VS GameFi VS NFT
            </Text>
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="4px"
              textAlign="left"
            >
              Volume
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box minH="260px" mt="auto">
        {chartData.length > 0 && (
          <LineChart
            chartData={chartData}
            chartOptions={lineChartOptionsTotalSpent}
          />
        )}
      </Box>
    </Card>
  )
}
