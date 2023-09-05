import React, { useState } from "react";
import axios from "../axios";
import { styled } from "styled-components";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const addProducts = (e) => {
    e.preventDefault();

    axios
      .post("/products/add", { title, imageUrl, price, rating })
      .then(() => {
        // Reset form fields or take any other necessary actions on success
        setTitle("");
        setImageUrl("");
        setPrice(0);
        setRating(0);
      })
      .catch((error) => {
        // Handle errors gracefully
        if (error.response) {
          // The request was made, and the server responded with a status code outside of the 2xx range
          alert(
            `Server Error: ${error.response.status} - ${error.response.statusText}`
          );
        } else if (error.request) {
          // The request was made, but no response was received (e.g., network error)
          alert("Network Error: Unable to reach the server.");
        } else {
          // Something else happened while setting up the request or handling the response
          alert(`Error: ${error.message}`);
        }
      });
  };

  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="Logo" />
      </Logo>

      <FormContainer>
        <h3>Add Product</h3>

        <InputContainer>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputContainer>

        <InputContainer>
          <p>ImageURL</p>
          <input
            type="url"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </InputContainer>
        <Button onClick={addProducts}>Add Product</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
const Logo = styled.div`
  width: 120px;
  margin-bottom: 30px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 55%;
  height: fit-content;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  line-height: 1.5;

  h3 {
    font-size: 28px;
    font-weight: 400;
    align-self: start;
    line-height: 33px;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    padding-left: 5px;
    height: 33px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 55%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;
export default AddProduct;
