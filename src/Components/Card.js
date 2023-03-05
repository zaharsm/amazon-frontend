import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
import { useStateValue } from '../StateProvider';


function Card({image,description,defaultValue,price}) {

  const [{basket} ,dispatch] = useStateValue();


  console.log("basket >>>",basket);
  

   const addToBasket = (e)=>{
      e.preventDefault();

      dispatch({
        type:"ADD_TO_BASKET",
        item :{
          image,
          description,
          defaultValue,
          price
        }
      })
   }

  return (
    <Container>
        <Image>
            <img src={image}  alt=''/>
        </Image>

        <Description>
            <h5>{description} </h5>
            <Rating name="half-rating-read" defaultValue={defaultValue} precision={0.5} readOnly />
            <p>{price}</p>

            
            <button type='button' onClick={addToBasket}>Add To Cart</button>
         

        </Description>
</Container>
  )
}

const Container = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    z-index:10;
    justify-content:space-around;
    background-color:#fff;

`

const Image = styled.div`
  width:100%;

  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
  margin-top:20px;
  flex:0.3;
  
  img{
    width: 180px;
    height: 200px;
  }
`
const Description = styled.div`
    display:flex;
    flex-direction:column;
   
    justify-content:space-evenly;
    flex:0.7;
    width:90%;
    margin:auto;


    button{
        background-color :#fa8900;
        width:100%;
        padding:10px 0;
        border:none;
        border-radius:10px;
        font-weight:500;
        cursor:pointer;
      }

      h5{
        font-size:16px;
        font-weight:600;
      }

      p{
        font-size:24px;
        font-weight:600;
      }
       
`


export default Card