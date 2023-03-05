import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Container>
        <Inner>
            <Logo>
               <img src="./amazon_logo1.png"  alt='Amazon.com'/>
            </Logo>
            <SearchBar>
                <input type="text" placeholder="Search Amazon.in"  />
                <SearchIcon>
                    <img src="./searchicon.png" alt='' />
                </SearchIcon>
            </SearchBar>
            <RightContainer>
                <NavButton>
                    <p>Hello</p>
                    <p>Guest</p>
                </NavButton>
                <NavButton>
                    <p>Return</p>
                    <p>&Orders</p>
                </NavButton>
                <BasketButton>
                    <img src="./basket-icon.png" alt='Basket' />
                    <p>0</p>
                </BasketButton>
            </RightContainer>
        </Inner>
        <MobileSearchBar>
                <input type="text" placeholder="Search Amazon.in"  />
                <SearchIcon>
                    <img src="./searchicon.png" alt='' />
                </SearchIcon>

        </MobileSearchBar>

    </Container>
  )
}

const Container = styled.div`
    width :100%;
    display:flex;
    align-items:center;
   
    position:relative;
    height:60px;
    background-color:#131921;


    @media only screen and (max-width:768px){
        height:120px;
        flex-direction:column;
        
    }

`
const Inner = styled.div`
    width:100%;
    display:flex;
    align-items:center; 

    @media only screen and (max-width:768px){
        justify-content: space-between;
    }
`

const Logo = styled.div`
    margin:0 20px;
    cursor:pointer;
    img{
        width:100px;
        margin-top:10px;
    }
`
const SearchBar = styled.div`
    display:flex;
    align-items:center;
    margin: 0px 15px;
    height:35px;
    flex:1;

    input{
        flex:1;
        height:95%;
        width:100%;
        border:none;
        border-radius : 5px 0px 0px 5px;
    
        &::placeholder{
            padding-left :10px;
        }
    }

    @media only screen and (max-width:768px){
        display:none;
    }

`

const SearchIcon = styled.div`
    background-color : #febd69;
    height:100%;
    width:40px;
    display:flex;
    align-items:center;
    justify-content:center; 
    border-radius: 0px 5px 5px 0;

    img{
        width:22px;
    }
`

const RightContainer = styled.div`
    display:flex;
    align-items:center;
`


const NavButton = styled.div`
    color:#fff; 
    display :flex;
    flex-direction:column;
    width:100%;
    margin-right:20px;

    p{
     &:nth-child(1){
       font-size :12px; 
       font-weight:200;
    }

    &:nth-child(2){
        font-size:14px;
        font-weight:600;
    } 
  }     
  
  &:nth-child(2){
    @media only screen and (max-width:768px){
        display:none;
    }
  }

`

const BasketButton = styled.div`
    
    margin-right:20px;
    display:flex;
    align-items:center;
    height:90%;

    img{
        width:30px;
        margin-right:20px;
    }

    p {
        color:#fff;
        font-size:20px;
        font-weight:500;
    }
`

const MobileSearchBar = styled.div`
    display:flex;
    align-items:center;
    margin: 0px 15px;
    height:35px;
    width:95%;
 
    input{
        flex:1;
        height:95%;
        width:100%;
        border:none;
        border-radius : 5px 0px 0px 5px;

        &::placeholder{
            padding-left :10px;
        }
    }

    @media only screen and (min-width:768px){
        display:none;
    }
`

const OuterSearchIcon = styled.div`
    background-color : #febd69;
    height:100%;
    width:40px;
    display:flex;
    align-items:center;
    justify-content:center; 
    border-radius: 0px 5px 5px 0;

    img{
        width:22px;
    }
    @media only screen and (min-width:768px){
        display:block;
    }
`

export default Navbar