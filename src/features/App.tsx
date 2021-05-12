import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from '@styles'

import { LandingPage } from './LandingPage'
import { Main } from './Main'
import { NavBar, Layout } from './components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <NavBar />
        <Layout>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Main />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export { App }
