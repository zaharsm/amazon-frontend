import React from 'react'
import { styled } from 'styled-components'

function Navbar() {
  return (
    <Container>
        <Inner>
            <Logo>
                <img src="./amazon_logo1.png" alt="" />
            </Logo>
            <SearchBar>

                <input type="text" placeholder='Search....'/>
                <SearchIcon>
                         <img src="./searchIcon.png" alt="search" />
                </SearchIcon>
                

            </SearchBar>
            <RightContainer>

                <NavButton>
                    <p>Hello,</p>
                    <p>Guest</p>
                </NavButton>

                <NavButton>
                    <p>Return </p>
                    <p>&Orders</p>
                </NavButton>

                <BasketButton>
                    <img src="./basket-icon.png" alt="basket" />
                    <p>0</p>

                </BasketButton>

            </RightContainer>
            
        </Inner>

        <MobileSearchBar>
          <input type="text" placeholder='Search....'/>
                <SearchIcon>
                         <img src="./searchIcon.png" alt="search" />
                </SearchIcon>

        </MobileSearchBar>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:60px;
    background-color: #131921;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;


    @media only screen and (max-width:767px){
        height:120px;
        flex-direction:column;

    }

`
const Inner = styled.div`
    width:100%;
    display:flex;
    align-items:center;

    @media only screen and (max-width:767px){
         justify-content:space-between;
         

    }
 `

const Logo = styled.div`
    
    margin-left:20px;
    cursor:pointer;

    img{
        width:100px;
        margin-top :10px;
    }
`


const SearchBar = styled.div`
   width:100%;
   display:flex;
   margin : 0px 15px;
   height:35px;

   input{
     flex:1;
     width:100%;
     border:none;
     border-radius : 5px 0px 0px 5px;

     &::placeholder {
        padding-left:5px;
     }
   }

   @media only screen and (max-width:767px){
    display:none
    
}
`

const MobileSearchBar = styled.div`
    width:90%;
    display:flex;
    height:35px;
    padding:10px;
    
    input{
        flex:1;
        border:none;
        border-radius:5px 0px 0px 5px;

        &::placeholder{
            padding-left:5px;
        }
    }

    @media only screen and (min-width:768px){
        display:none;
    }

`


const SearchIcon = styled.div`
    background-color: #febd69;
    width:40px;
    height:100%;
    border-radius: 0 5px 5px 0;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
        width:22px;
    }
`
const RightContainer = styled.div`
    display:flex;
    width:fit-content;
    align-items:center;
    justify-content: space-evenly;
    height:100%;
    padding:5px 15px;
`

const NavButton = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    height:80%;
    padding:5px;
    cursor:pointer;
    justify-content:center;

    p{
        &:nth-child(1){
            font-size:12px;
        }
        
        &:nth-child(2){
            font-size:14px;
            font-weight:600;
        }

    }
`

const BasketButton = styled.div`
   display:flex;
   height:90%;
   align-items:center;
   width:100%;
   cursor:pointer;

   img{
    width:30px;
    margin-right:10px;
   }

   p{
    color:#fff;
    font-weight:500;
   }
`


export default Navbar