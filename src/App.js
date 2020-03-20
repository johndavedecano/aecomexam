import React, { Suspense, lazy } from 'react'

import { ThemeProvider } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import theme from './theme'
import { DataProvider } from './DataProvider'

const Home = lazy(() => import('./pages/Home'))
const Single = lazy(() => import('./pages/Single'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Loader = () => <span>loading...</span>

function App() {
  return (
    <div className="App">
      <DataProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route
                path="/"
                component={props => (
                  <Suspense fallback={<Loader />}>
                    <Home {...props} />
                  </Suspense>
                )}
                exact
              />
              <Route
                path="/:id"
                component={props => (
                  <Suspense fallback={<Loader />}>
                    <Single {...props} />
                  </Suspense>
                )}
                exact
              />
              <Route
                path="*"
                component={props => (
                  <Suspense fallback={<Loader />}>
                    <NotFound {...props} />
                  </Suspense>
                )}
              />
            </Switch>
          </Router>
        </ThemeProvider>
      </DataProvider>
    </div>
  )
}

export default App
