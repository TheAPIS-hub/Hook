import {
  Avatar,
  Box,
  Button,
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table'
import { Icon } from '@chakra-ui/react'
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md'
import {
  VSeparator,
  HSeparator,
} from '../../../../../components/separator/Separator'
import { IconButton } from '@chakra-ui/react'
import '../index.css'
function TopCreatorTable(props) {
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
  const balanceBg = useColorModeValue('brand.900', '#111C44')
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white')
  const iconColor = useColorModeValue('brand.500', 'white')
  return (
    <>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
        borderRadius="16px"
        bgColor={balanceBg}
        maxH="400px"
        overflowY="auto"
        className='TrendingBtn'
      >
        <Flex
          align={{ sm: 'flex-start', lg: 'center' }}
          justify="space-between"
          w="100%"
          px="22px"
          pb="20px"
          pt="20px"
        >
          <Text color={textColor} fontSize="24px" fontWeight="700" letterSpacing= '-0.48px'>
            Trending Addresses
          </Text>
          {/* <Button variant='action'>See all</Button> */}
          {/* <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' /> */}
          <IconButton
            aria-label="Search database"
            borderRadius="10px"
            w="37px"
            h="37px"
            fontSize="20px"
            icon={<MdBarChart />}
          />
        </Flex>
        <Table {...getTableProps()} variant="simple" color="gray.500">
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr
                {...headerGroup.getHeaderGroupProps()}
                key={index}
                borderBottom="1px"
              >
                {headerGroup.headers.map((column, index) => (
                  <>
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
                  </>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = ''
                    if (cell.column.Header === 'Addresses') {
                      data = (
                        <Flex align="center">
                          {/* <Avatar
                            src={cell.value[1]}
                            w='30px'
                            h='30px'
                            me='8px'
                          /> */}
                          <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="600"
                          >
                            {cell.value.slice(0, 4)}...
                            {cell.value.slice(13, 17)}
                          </Text>
                        </Flex>
                      )
                    } else if (cell.column.Header === 'DATE') {
                      data = (
                        <Text
                          color={textColorSecondary}
                          fontSize="sm"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      )
                    } else if (cell.column.Header === 'Search Times') {
                      data = (
                        <>
                          <Flex alignItems="center">
                            <Box>
                              <Progress
                                mr="10px"
                                ml="10px"
                                variant="table"
                                colorScheme="brandScheme"
                                value={cell.value}
                              />
                            </Box>
                            <Text>{cell.value}</Text>
                          </Flex>
                        </>
                      )
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: '14px' }}
                        minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                        borderColor="transparent"
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
    </>
  )
}

export default TopCreatorTable
