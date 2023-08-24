import React from "react";
import { useStateValue } from "../StateProvider";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Checkout({ key, image, description, defaultValue, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("checkout >>>>>", basket);

  const navigate = useNavigate();

  const removeFromBasket = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Container>
      <Navbar />

      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>
          {basket?.map((product) => {
            return (
              <Product>
                <Image>
                  <img src={product.image} alt="" />
                </Image>
                <Description>
                  <h4>{product.description}</h4>
                  <p>{product.price}</p>
                  <button onClick={(e) => removeFromBasket(e, product.id)}>
                    Remove
                  </button>
                </Description>
              </Product>
            );
          })}
        </ShoppingCart>

        <SubTotal>
          <CurrencyFormat
            renderText={(value) => (
              <p>
                SubTotal ( {basket.length} items) : <strong>{value}</strong>
              </p>
            )}
            value={getBasketTotal(basket)}
            prefix={"₹ "}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
          />
          <small>
            <input type="checkbox" name="" id="" />
            <span>This order contains a gift</span>
          </small>
          <button onClick={() => navigate("/address")}>
            Proceed to Checkout
          </button>
        </SubTotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;
  height: fit-content;
  background-color: rgb(234, 237, 237);
  position: relative;
`;

const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only Screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  flex: 0.7;
  background-color: #fff;

  padding: 15px;

  h2 {
    font-weight: 500;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
  }

  @media only Screen and (max-width: 767px) {
    flex: none;
  }
`;
const SubTotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;

  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;
    border-radius: 8px;
  }

  @media only Screen and (max-width: 767px) {
    flex: none;
    margin-top: 20px;
    margin-left: 0px;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-end;
`;

const Image = styled.div`
  flex: 0.2;
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

export default Checkout;
