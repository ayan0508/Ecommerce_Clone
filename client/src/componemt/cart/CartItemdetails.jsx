import {Box,Typography,Button,Divider,styled} from '@mui/material';
import { addEllipsis } from '../../Utils/CommonUtlis';
import Buttongroup from './Buttongroup';
import { RCart } from '../../MyCart/Cartdetail';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartAction';

const Component =styled(Box)`
border-top: 1px solid #fefefe;
display:flex;`

const LeftContainer=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;`;

const SellerText=styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10px;`;

const Remove=styled(Button)`
margin-top:20px;
font-size:16px;
font-weight:600;
color:black;`

const Cartdetails=({item})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const Removeitem=async()=>{
       // localStorage.setItem('prId',item._id);
        const itemId=item._id;
        const userId=localStorage.getItem('userId');
        const response= await RCart(itemId);
        if(response.status===200)
        {
            dispatch(addToCart(userId));
            navigate('/cart');
           
        }
    }
    return(
        <>
            <Component>
                <LeftContainer>
                    <img src={item.url} alt="img1" style={{width:70,display:'block',marginLeft:15}}/>
                    <Buttongroup/>
                </LeftContainer>
                <Box style={{margin:20}}>
                    <Typography style={{fontSize:18}}>{addEllipsis(item.title.shortTitle)}</Typography>
                    <SellerText>Seller:RoyElectronics
                        <Box component="span"><img src={fassured} alt="flipkart" style={{width:55, marginLeft:10}}/></Box>
                    </SellerText>
                    <Typography style={{margin:'20px 0'}}>
                    <span style={{ fontWeight: 600,fontSize:18 }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                    <span style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
                </Typography> 
                <Remove onClick={()=>Removeitem()}>Remove</Remove>
                </Box>
            </Component><Divider/>
        </>
    )
}
export default Cartdetails;