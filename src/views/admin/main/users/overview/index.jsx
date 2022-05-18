// Chakra imports
import { Flex } from '@chakra-ui/react'
import Card from 'components/card/Card'
import React from 'react'
import SearchTableUsers from 'views/admin/main/users/overview/components/SearchTableUsersOverivew'
import { columnsDataUsersOverview } from 'views/admin/main/users/overview/variables/columnsDataUsersOverview'
import tableDataUsersOverview from 'views/admin/main/users/overview/variables/tableDataUsersOverview.json'

export default function UsersOverview() {
  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <Card px="0px">
        <SearchTableUsers
          tableData={tableDataUsersOverview}
          columnsData={columnsDataUsersOverview}
        />
      </Card>
    </Flex>
  )
}
