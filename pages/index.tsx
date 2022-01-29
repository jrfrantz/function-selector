import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ethers } from 'ethers'
import { 
  Input, 
  Container, 
  Grid, 
  Button,
  InputGroup,
  FormLabel,
  FormControl,
  VStack,
  Text, 
  Box,
  Center
} from '@chakra-ui/react'
import { useState } from 'react'
import FunctionBox from './components/FunctionBox'
import SiteFooter from './components/SiteFooter'
const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Function Selector Calculator</title>
        <meta name="description" content="Quickly calculate the function selector or signature of an EVM function" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1 className={styles.title}>
            Function selector calculator <br/>🧑‍💻✖️➗🧑‍💻
          </h1>
          
        <FunctionBox />
      </main>

      <footer className={styles.footer}>
        <SiteFooter/>
      </footer>
    </div>
  )
}

export default Home
