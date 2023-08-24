import React from 'react'
import { styled } from 'styled-components'

function Login() {
  return (
    <Container>
        <Logo>
            <img src="./amazon_logo.png" alt="Logo" /> 
        </Logo>

        <FormContainer>
            <h3>Sign-In</h3>

            <InputContainer>
                <p>Email</p>
                <input type="email" placeholder='example@example.com' />
            </InputContainer>
            <InputContainer>
                <p>Password</p>
                <input type="password" placeholder='*************' />
            </InputContainer>

            <LoginButton>
                Login
            </LoginButton>

            <InfoText>
                By continuing, you agree to Amazon's <span>Condition of use</span>  and <span>Privacy Notice.</span> 
            </InfoText>
            
        </FormContainer>
        

        <SignUpContainer>
        Create Account in Amazon
        </SignUpContainer>


       
    </Container>
    
  )
}

const Container = styled.div`
  width:40%;
  min-width:450px;
  height:fit-content;
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:15px;
`
const Logo = styled.div`
  width:120px;
  margin-bottom :30px;
  img{
    width:100%;
  }
`

const FormContainer = styled.div`
  width:55%;
  height:400px;
  border:1px solid lightgrey;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content  :center;
  padding:15px;
  line-height:1.5;


  h3{
    font-size :28px;
    font-weight: 400;
    align-self : start;
    line-height:33px;
    margin-bottom :10px;

  }

`

const InputContainer = styled.div`
   width:100%;
   padding:10px;

   p {
    font-size:14px;
    font-weight:600;

   }

   input{
    width:95%;
    padding-left: 5px;
    height:33px;
    border-radius:5px;
    border:1px solid lightgrey;
    margin-top:5px;

    &:hover{
        border:1px solid orange;
    }
   }
`

const LoginButton = styled.button`
   width:70%;
   height:35px;
   background-color: #f3b414;
   border:none;
   outline:none;
   border-radius:10px;
   margin-top:30px;
`


const InfoText = styled.p`
   font-size:14px;
   margin-top:20px;
   width:100%;
   justify-content:justify;
   word-wrap : normal;
   word-break:normal;

   span {
    color: #426bc0;
   }

`

const SignUpContainer = styled.button`
  width:55%;
  height:35px;
  font-size:12px;
  margin-top:20px;

  &:hover{
    background-color: #dfdfdf;
    border:1px solid grey;
  }

`

export default Login