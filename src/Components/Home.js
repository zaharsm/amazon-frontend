import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "../data.js";

function Home() {
  return (
    <Container>
      <Navbar  />
      <Banner>
        <img src="./banner.jpg" alt="Banner" />
        <img src="./mobile_banner.jpg" alt="Mobile Banner" />
      </Banner>
      <Main>
        {data.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            description={data.description}
            defaultValue={data.defaultValue}
            price={data.price}
          />
        ))}
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  height: fit-content;
`;

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

    @media only screen and (min-width: 768px) {
      &:nth-child(2) {
        display: none;
      }
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  place-items: center;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0;
  }
`;

export default Home;
