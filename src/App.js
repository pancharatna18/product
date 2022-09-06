
import './App.css';


import Header from './style/Header';
import Main from './style/Main';
import {Route,Routes} from 'react-router-dom'
import Cart from './style/Cart';
import {grid} from '@mui/material'
import Desc from './style/Desc'
// import Home from './style/Home';

function App() {
 
  return (
    <div className="App">
      {/* <Desc/> */}
        {/* <Home/> */}
      <Header/>
      <Routes>
        <Route path ='/' element={<Main />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/Desc' element={<Desc />}/>
        
        {/* <Route path='/' element={<Home />}/> */}
      </Routes>
      
     
    </div>
  );
}

export default App;
