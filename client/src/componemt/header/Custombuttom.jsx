import React, { useState,useContext } from "react";
import {Box,Button,styled,Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginPage from '../login/loginpage';
import { DataContext } from "../../Context/dataprovider";
import { Link } from "react-router-dom";
import Profile from "./profile";
const ButtomStyle=styled(Button)`
background-color:white;
color:#2874f0;
box-shadow:none;
text-transform:none;
border-radius: 2px;
font-weight:600;
padding:5px 40px;
height:32px;
margin-top: 5px;
`
const BoxStyle=styled(Box)(({theme})=>({
    display: 'flex',
    margin : '0 3% 0 auto',
    '& > *':{
    marginRight: '40px |important',
    fontSize: 14,
   
},
[theme.breakpoints.down('lg')]:{
    marginleft:10,
},
[theme.breakpoints.down('md')]:{
    display:'block',
}
}))

const CartStyle=styled(Link)(({theme})=>({
    display: 'flex',
    margin : '0 3% 0 auto',
    color:'#fff',
    textDecoration:'none',
    fontSize: 18,
    '& >':{
    marginRight: '40px |important',
    fontSize: 20,
    }
}))

const Custombuttom=()=>{
    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);
    const openPage =()=>{
    setOpen(true);
   } 

   
    return (
        <>
            <BoxStyle>
                {
                    account?<Profile account={account} setAccount={setAccount}/>:
                    <ButtomStyle variant="contained" onClick={()=>{openPage()}} style={{marginRight:40}}>Login</ButtomStyle>
                }
                <Typography style={{marginTop:5 ,marginRight:12}}>Become A Seller</Typography>
                <Typography style={{marginTop:5,marginRight:40}}>More</Typography>
                <CartStyle style={{display:"flex",marginTop:5,marginRight:12}} to="/cart" ><ShoppingCartIcon />Cart</CartStyle>
                
            </BoxStyle>
            <LoginPage open={open} setOpen={setOpen}/>

        </>
    )
}
export default Custombuttom;