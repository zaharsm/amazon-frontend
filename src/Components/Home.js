import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'

function Home() {
  return (
    <Container >
        <Navbar />
        <h1>Welcome to home page</h1>
    </Container>
  )
}

const Container = styled.div`
   width:100%;
`

export default Home