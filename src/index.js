import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/css/App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from 'layouts/auth'
import AdminLayout from 'layouts/admin'
import { BrowserRouter } from 'react-router-dom'
// Chakra imports
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme/theme'
import 'react-image-gallery/styles/css/image-gallery.css'
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Redirect from="/" to="/admin" />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
)
