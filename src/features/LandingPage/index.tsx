import React from 'react'
import { Layout } from '../components'

import {  Footer, UserType } from './components'

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <UserType/>
      <Footer />
    </Layout>
  )
}

export { LandingPage }
