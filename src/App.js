import styled from 'styled-components';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';


function App() {
  return (<Router>
    <Container>
      <Routes>
        <Route path='/'  element={<h1>My name is Zahar</h1>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<SignUp />}/>
      </Routes> 
    </Container>
    </Router>
  );
}

const Container = styled.div`
 width : 100vw; 
`

export default App;
