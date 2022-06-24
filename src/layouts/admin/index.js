// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react'
import Footer from 'components/footer/FooterAdmin.js'
// Layout components
import Navbar from 'components/navbar/NavbarAdmin.js'
import Sidebar from 'components/sidebar/Sidebar.js'
import SidebarSm from 'components/sidebarSm/SidebarSm'

import { SidebarContext } from 'contexts/SidebarContext'
import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from 'routes.js'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Icon } from '@chakra-ui/react'
import {
  MdHome,
  MdLock,
  MdSpaceDashboard,
  MdDashboard,
  MdAssessment,
  MdAccountCircle,
  MdBrokenImage,
  MdLineWeight,
  MdDragHandle,
} from 'react-icons/md'

// Custom Chakra theme
export default function Dashboard(props) {
  const { ...rest } = props
  // states and functions
  const [fixed] = useState(false)
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== '/admin/full-screen-maps'
  }
  const getActiveRoute = (routes) => {
    let activeRoute = 'Default Brand Text'
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items)
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items)
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name
        }
      }
    }
    return activeRoute
  }
  const getActiveNavbar = (routes) => {
    let activeNavbar = false
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items)
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items)
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondary
        }
      }
    }
    return activeNavbar
  }
  const getActiveNavbarText = (routes) => {
    let activeNavbar = false
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbarText(routes[i].items)
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbarText(routes[i].items)
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].messageNavbar
        }
      }
    }
    return activeNavbar
  }
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      }
      if (prop.collapse) {
        return getRoutes(prop.items)
      }
      if (prop.category) {
        return getRoutes(prop.items)
      } else {
        return null
      }
    })
  }
  const { onOpen } = useDisclosure()
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        {isShowSidebar ? (
          <SidebarSm routes={routes} display="none" {...rest} />
        ) : (
          <Sidebar routes={routes} display="none" {...rest} />
        )}
        <Box
          //   onclick={() => {
          //     alert(1)
          //     setIsShowSidebar(!isShowSidebar)
          //   }}
          position="fixed"
          left={isShowSidebar ? '54px' : '240px'}
          zIndex="99999"
          cursor="pointer"
          onClick={() => {
            // alert(1)
            setIsShowSidebar(!isShowSidebar)
            localStorage.setItem('isShowSidebar', !isShowSidebar)
          }}
          display={{ sm: 'none', md: 'block' }}
          top={isShowSidebar ? '130px' : '68px'}
        >
          <Icon
            fontSize="20px"
            as={MdDragHandle}
            width={isShowSidebar ? '20px' : '30px'}
            height={isShowSidebar ? '20px' : '30px'}
            color="inherit"
          />
          {/* {isShowSidebar ? 'switch' : '关'} */}
          {/* MdLineWeight */}
          {/* switch */}
        </Box>
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={
            isShowSidebar
              ? { base: '100%', xl: 'calc( 100% - 100px )' }
              : { base: '100%', xl: 'calc( 100% - 290px )' }
          }
          maxWidth={
            isShowSidebar
              ? { base: '100%', xl: 'calc( 100% - 100px )' }
              : { base: '100%', xl: 'calc( 100% - 290px )' }
          }
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={'HOOK'}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          {getRoute() ? (
            <Box
              mx="auto"
              p={{ sm: '20px 16px', base: '20px', md: '30px' }}
              pe="20px"
              minH="100vh"
              pt={{ sm: '50px', md: '50px' }}
            >
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/" to="/admin/game" />
              </Switch>
            </Box>
          ) : null}
          <Box p="0px 30px 30px 30px">
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  )
}
