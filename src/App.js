import styled from 'styled-components';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Address from './Components/Address';
import Payment from './Components/Payment';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import AddProduct from './Components/AddProduct';

const StripePromise = loadStripe('pk_test_51NlBohSCM2T39KjUdxOh2vRVr9bycvxKN7CNAIdyiHNCTAd9aYRhoixFCsYb34s9BrBFLgUUx5NOlikJEglIdZou00aq7CoC04');

function App() {
  return (<Router>
    <Container>
      <Routes>
        <Route path='/'  element={<Home  />}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<SignUp />}/>
        <Route path='/checkout'  element={<Checkout />}/>
        <Route path='/address'  element={<Address />}/>
        <Route path='/addproduct'  element={<AddProduct />}/>
        <Route path='/payment'  element={
            <Elements stripe={StripePromise} >
            <Payment />
          </Elements>
        }/>
      </Routes> 
     
    </Container>
    </Router>
  );
}

const Container = styled.div`
 width : 100vw; 
`

export default App;
