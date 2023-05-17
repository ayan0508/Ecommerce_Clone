import { Box,Typography,styled,Menu,MenuItem } from "@mui/material";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/Actions/cartAction';

const BoxStyle= styled(Box)`
align-items: center;
cursor: pointer;
`


const Profile=({account,setAccount})=>{
    const [open,setOpen]=useState(false);
    const dispatch=useDispatch();
    const handleClick=(event)=>{
        console.log(event.currentTarget);
        setOpen(event.currentTarget);
    }
    const handleClose =()=>{
        localStorage.removeItem('userId');
        localStorage.removeItem('productId');
        localStorage.removeItem('userName');
        setOpen(false);
    }
    const logOut =()=>{
        setAccount('');
        const userId=localStorage.getItem('userId');
        dispatch(addToCart(userId));
        localStorage.removeItem('prId');
    }

    return (<>
        <BoxStyle onClick={handleClick}><Typography style={{marginTop:3,marginRight:50}} >{account}</Typography></BoxStyle>
        <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose();logOut();}}>Logout</MenuItem>
      </Menu>
    </>)
}
export default Profile;