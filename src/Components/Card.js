import React from "react";
import { styled } from "styled-components";
import Rating from "@material-ui/lab/Rating";

function Card() {
  return (
    <Container>
      <Image>
        <img
          src="https://m.media-amazon.com/images/I/41W7U1ZQhDL._AC_SR400,600_.jpg"
          alt=""
        />
      </Image>

      <Description>
        <h5>
          Fastrack New Limitless FS1 Smart Watch| Biggest 1.95" Horizon Curve
          Display
        </h5>
        <Rating
          name="half-rating-read"
          defaultValue={4.0}
          precision={0.5}
          readOnly
        />
        <p>₹2,295</p>
        <button>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  background-color: #fff;
`;

const Image = styled.div`
  width: 180px;
  height: 200px;

  margin-top: 20px;
  flex: 0.3;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Card;
