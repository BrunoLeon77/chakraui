import React from 'react'
import type { NextPage } from 'next'
import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from '../src/sections/cart'
import Details from '../src/sections/details'

const Home: NextPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex h={{base: 'auto', md: '100vh'}} my={[0, 10, 20]} direction={{base: 'column-reverse', md: 'row'}}>
      <Details />
      <Cart />
    </Flex>
  </Container>
)

export default Home
