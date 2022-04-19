import Header from '../components/Index/Header'
import Login from '../components/Index/Login'
import type { NextPage } from 'next'

import * as Styles from '../styles/Index.js'

const Home: NextPage = () => {
  return (
    <Styles.Main>
      <Header />
      <Login />
    </Styles.Main>
  )
}

export default Home 
