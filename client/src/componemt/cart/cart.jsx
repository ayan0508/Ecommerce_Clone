import { Grid, Divider,Box,styled, Button } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from 'react';
import { addToCart } from "../../Redux/Actions/cartAction";
import Cartdetails from "./CartItemdetails";
import Totalbalence from "./Totalbalence";
import Emptycart from "./Empty";
import { useNavigate } from "react-router-dom";

const Container =styled(Grid)(({theme})=>({
    padding:'30px 135px',  
    backgroundColor:'#F2F2F2',
    Width:'100vw',
    paddingButtom:'100%',
    [theme.breakpoints.down('md')]:{
        padding:0,
        margin:0,
    }
}))

const Left=styled(Grid)(({theme})=>({
    backgroundColor:'#FFF',
    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        marginButtom:15,
    }
}))

const Header =styled(Grid)`
padding:15px 24px;`

const StyledButton=styled(Box)`
padding:16px 22px;
background-color:#fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0/ 10%);
border-top: 1px solid #fefefe;`

const StyledBtn=styled(Button)`
display:flex;
margin-left:auto;
background:#fb641b;
color:#fff;
width:250px;
height:51px;
border-radius:2px;
&:hover{ background:#fb641b;}`
const Right=styled(Grid)(({theme})=>({
    [theme.breakpoints.down('lg')]:{
        marginTop: 10,
    }
}))
const Cart=()=>{
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const userId=localStorage.getItem('userId');
    const prId=localStorage.getItem('itemId');
    
    useEffect(() =>{
        if(localStorage.getItem('userId'))
            dispatch(addToCart(userId));
        },[dispatch,userId,prId]);
    const {cartItems}= useSelector(state=>state.cart);
   // const items=cartItems.cartItems[0].cart
   console.log(cartItems);
    
        const Orderpage=()=>{
        
                navigate('/Confirm');
            
        }


    return(
        <>
            {
              localStorage.getItem('userId')&&cartItems[0].cart.length>0?
                <Container container>
                    <Left item lg={9} sm={12} xs={12}>

                        <Box>
                            <Header>My Cart({cartItems[0].cart.length})</Header><Divider/>
                           
                        </Box> 
                        {
                            cartItems[0].cart.map(item=>(
                                <Cartdetails item={item}/>
                                ))
                        }
                        
                        <StyledButton>
                        <StyledBtn onClick={Orderpage}>Place Order</StyledBtn>
                    </StyledButton>
                   </Left>
                    <Right item lg={3} md={6} sm={12} xs={12}>
                        
                        <Totalbalence items={cartItems[0].cart}/>
                    </Right>
                </Container>
                :
                <Emptycart/>
            }
        </>
    )
}
export default Cart;