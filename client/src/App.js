import React from "react";
import Navbar from './componemt/header/Navbar';
import Home from "./componemt/home/Home";
import {Box} from '@mui/material';
import DataProvider from "./Context/dataprovider";
import {  Routes, Route } from "react-router-dom";
import DetailsView from "./componemt/details/DetailView";
import Cart from '../src/componemt/cart/cart';
import LoginPage from "./componemt/login/loginpage";
import Confirm from "./buyItem/confirm";
const App=()=>{
  return(   
    <DataProvider><Navbar/>
        
          <Box style={{marginTop:55}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/product/:id" element={<DetailsView/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/confirm" element={<Confirm/>}/>
            </Routes>
          </Box>  
    </DataProvider>
  )
}
export default App;