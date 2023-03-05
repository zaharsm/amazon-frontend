import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';

function Card() {
  return (
    <Container>
        <Image>
            <img src="https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_UL640_FMwebp_QL65_.jpg"  alt=''/>

        </Image>

        <Description>
            <h5>Fire-Boltt Phoenix Smart Watch with Bluetooth Calling </h5>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <p>$39</p>

            
            <button type='button'>Add To Cart</button>
         

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
        font-weight:600;
      }
       
`


export default Card