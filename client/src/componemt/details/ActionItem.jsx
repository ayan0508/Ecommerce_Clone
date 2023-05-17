import {Box,Button,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import Confirm from '../../buyItem/confirm';
//import { useState,useContext } from 'react';
import {ACart} from '../../MyCart/Cartdetail';


const LeftContainer=styled(Box)(({theme})=>({
    minWidth:40,
    padding:'40px 0px 0px 50px',
    backgroundColor:'#FFFFFF',
    marginRight:25,
    [theme.breakpoints.down('md')]: {
        padding:'40px 0px 0px 0px',
    }
}));

const Img=styled('img')(({theme})=>({
    padding: '15px 20px',
    width:'95%',
    [theme.breakpoints.down('md')]: {
        minWidth:'90%',
        
    }
}))
const ButtonStyle=styled(Button)(({theme})=>({
    width:'46%',
    height:'50px',
    borderRadious:'2px',
    [theme.breakpoints.down('md')]: {
       marginRight:3,
       marginLeft:1,
       fontSize: 10,
    }
}))

const BoxSt=styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]: {
        display:'flex',
        paddingRight: 10,
     }
}))


const ActionItem=({product})=>{
    // const navigate=useNavigate();
    const navigate=useNavigate();
    const Orderpage=()=>{
        navigate('/confirm');
       } 
    
   // const [quant,setQuantity]=useState(1);
    const id=localStorage.getItem('productId');
 
    const addItem=async()=>{
        if(!localStorage.getItem('userId')){
            navigate('/');
        }
        else{
            let item = await ACart(id);
            localStorage.setItem('prId',id);
            if(item.status===200)
            {
                navigate('/cart');
            }
        }
      
      

    }
    return(
        <LeftContainer>
            <Box style={{padding: '15px 20px',border : '1px solid #f0f0f0',  width:'90%'}}>
            <Img
             src={product.detailUrl} alt="img1"/>
            </Box>
            <BoxSt>
            <ButtonStyle variant="contained" style={{marginRight:10,backgroundColor:'#ff9f00'}} onClick={()=>{addItem()}}><ShoppingCartIcon />Add to Cart</ButtonStyle>
            <ButtonStyle variant="contained" style={{backgroundColor:'#fb541b'}}  onClick={Orderpage}><FlashOnIcon/>Buy Now</ButtonStyle>
            </BoxSt>
            
        </LeftContainer>
    )
}
export default ActionItem;
