import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";
import axios from "../axios";
import { getBasketTotal } from "../reducer";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .post("/orders/get", { email: "janushangover@gmail.com" })
      .then((res) => setOrders(res.data));
  }, []);
  console.log(orders);
  return (
    <Container>
      <Navbar />

      <Main>
        <OrderContainer>
          <h2>Your Orders</h2>
          <OrderDetails>
            <AddressDetails>
              <h4>Shipping Address</h4>

              <div>
                <p>Zahar</p>
                <p>Burj Khalifa</p>
                <p>Dubai</p>
                <p>UAE</p>
                <p>Ph : +91 93877839388</p>
              </div>
            </AddressDetails>
            <OrderBasket>
              <h4>Order</h4>
              <p>
                SubTotal : ₹ <span>21490</span>{" "}
              </p>
              <Product>
                <Image>
                  <img
                    src={
                      "https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg"
                    }
                    alt=""
                  />
                </Image>
                <Description>
                  <h4>
                    {
                      "Wolpin Baby Proofing Corner Guards (Pack of 10 Pieces) Self Adhesive Corner Protectors Furniture"
                    }
                  </h4>
                  <p>₹{229}</p>
                </Description>
              </Product>

              <Product>
                <Image>
                  <img
                    src={
                      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/o/z/nord-ce-3-lite-5g-ce2099-oneplus-original-imagzj3wqxzgquah.jpeg?q=70"
                    }
                    alt=""
                  />
                </Image>
                <Description>
                  <h4>
                    {
                      "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 128 GB) (8 GB RAM)"
                    }
                  </h4>
                  <p>₹{19999}</p>
                </Description>
              </Product>
            </OrderBasket>
          </OrderDetails>
        </OrderContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1500px;

  margin: auto;
  background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
`;

const OrderContainer = styled.div`
  padding-left: 15px;
  background-color: #fff;

  h2 {
    padding-top: 10px;
    font-weight: 500;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
  }
`;

const OrderDetails = styled.div`
  border-bottom: 1px solid lightgrey;
`;

const AddressDetails = styled.div`
  margin-top: 20px;

  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      margin-top: 4px;
      font-size: 14px;
    }
  }
`;

const OrderBasket = styled.div`
  margin-top: 20px;

  p {
    font-size: 15px;
    margin-top: 15px;
    margin-left: 15px;
  }

  span {
    font-weight: 600;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-end;

  @media only screen and (max-width: 1200px) {
    margin-top: 20px;
  }
`;

const Image = styled.div`
  flex: 0.15;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.8;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    color: #1384b4;
    background-color: transparent;
    border: none;
    outline: none;
    margin-top: 10px;
  }
`;
export default Order;
