import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Navbar from './Navbar';
import data from '../data.js';

function Home() {
  return (
    <Container>
        <Navbar/>
        <Banner>
          <img src='./banner.jpg' alt="Banner" />
          <img src='./mobile_banner.jpg' alt='Mobile Banner' />
       </Banner>

       <Main>

       {data.map((data,index)=>(
          <Card key={index}
            image={data.image}
            description={data.description}
            defaultValue={data.defaultValue}
            price={data.price}
          />
        ))}
       </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234,237,237);
`

 const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display:grid;
  place-items:center;
  justify-content: center;
  width:100%;

  grid-auto-rows: 420px;
  grid-template-columns:  repeat(4,280px);
  grid-gap :20px;

  background-color:#fff;

  
  @media only screen and (max-width:768px){
    grid-template-columns : repeat(2,50%);
    grid-gap:0;
  };
 
  @media only screen and (min-width:768px) and (max-width:1200px){
    grid-template-columns : repeat(3,30%);
  }

  @media only screen and (min-width:768px){
    margin-top:-130px;
    padding :10px 0;
  }
`
export default Home