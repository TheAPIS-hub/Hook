import {
  Icon,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Button,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import Card from 'components/card/Card.js'
import { IconButton } from '@chakra-ui/react'
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table'
import { MdMoreHoriz } from 'react-icons/md'
import BigNumber from 'bignumber.js'

function TotalMarketValue(props) {
  const { columnsData, tableData } = props
  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance

  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <Card mb={{ base: '20px', xl: '0px' }}>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        <Flex
          align={{ sm: 'flex-start', lg: 'center' }}
          justify={{ sm: 'flex-start', lg: 'space-between' }}
          w="100%"
          px="10px"
          mb="20px"
        >
          <Text
            color={textColor}
            fontSize="24px"
            fontWeight="700"
            lineHeight="100%"
          >
            NFT Trending
          </Text>
          {/* <Button
              bg={boxBg}
              fontSize='sm'
              fontWeight='500'
              color={textColorSecondary}
              borderRadius='7px'>
              <Icon
                as={MdOutlineCalendarToday}
                color={textColorSecondary}
                me='4px'
              />
              This month
            </Button> */}
          <IconButton
            borderRadius="10px"
            aria-label="Search database"
            fontWeight="500"
            w="37px"
            h="37px"
            fontSize="20px"
            icon={<MdMoreHoriz />}
          />
        </Flex>
        <Table {...getTableProps()} variant="simple" color="gray.500">
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe="10px"
                    key={index}
                    borderColor="transparent"
                  >
                    <Flex
                      justify="space-between"
                      align="center"
                      fontSize={{ sm: '10px', lg: '12px' }}
                      color="gray.400"
                    >
                      {column.render('Header')}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {page.map((row, idx) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()} key={idx}>
                  {row.cells.map((cell, index) => {
                    let data = ''
                    if (cell.column.Header === '#') {
                      data = (
                        <Flex align="center">
                          <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="600"
                          >
                            {idx + 1}
                          </Text>
                        </Flex>
                      )
                    } else if (cell.column.Header === 'Collection') {
                      data = (
                        <Text color={textColor} fontSize="sm" fontWeight="600">
                          {cell.value}
                        </Text>
                      )
                    } else if (cell.column.Header === 'Floor') {
                      data = (
                        <Text color={textColor} fontSize="sm" fontWeight="600">
                          ${new BigNumber(cell.value).toFixed(2)}
                        </Text>
                      )
                    } else if (cell.column.Header === 'Mkt') {
                      data = (
                        <Text fontSize="sm" fontWeight="600">
                          ${new BigNumber(cell.value).toFixed(2)}
                        </Text>
                      )
                    } else if (cell.column.Header === 'Volume') {
                      data = (
                        <Text fontSize="sm" fontWeight="600">
                          ${new BigNumber(cell.value).toFixed(2)}
                        </Text>
                      )
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: '14px' }}
                        minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                        borderColor="transparent"
                        mt="20px !important"
                        py="10px !important"
                      >
                        {data}
                      </Td>
                    )
                  })}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Flex>
    </Card>
  )
}

export default TotalMarketValue
