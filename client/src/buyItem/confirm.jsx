import  { useState } from 'react';
import {Box,Typography,TextField,Button,styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Order from './order';

const ButtonStyle=styled(Button)`
margin-top:20px;
background-color:orange;
color:white;
height:48px;
&:hover {
    background-color:orange;
    cursor:pointer;
 }
`
const ButtonStyle1=styled(Button)`
margin-top:10px;

background-color:orange;
color:white;
height:30px;
&:hover {
    background-color:orange;
    cursor:pointer;
 }
`
const BoxStyle=styled(Box)`
background-color:#FFF;
margin-top:150px;
width:40vw;
display:flex;
padding:10px 0 10px 0;
flex-direction:column;
align-items:center;
justify-content:center;`
const OptBox=styled(Box)`
display:flex;
align-items:center;
flex-direction:column;
`

const Confirm=()=>{
    const [msg,setMsg]=useState("");
    const [otp,setOtp]=useState("");
    const [ver,setVer]=useState("");
    const navigate=useNavigate();
    const userId=localStorage.getItem('userId');
    
    let date="";
    const RequestOtp=async()=>{
        setOtp("A OTP is sent to your registered mobile Number valid for 5 Minutes");
        const res = await Order(userId);
        console.log(res);
        if(res.status===200)
        {
            setOtp("");
            setMsg("");
            date=res.data.message;
            console.log(date);
            localStorage.setItem('otp', res.data.message);
        }
    }
       
   
    const Verification=()=>{
        console.log(date);
        console.log(ver);
        if(localStorage.getItem('otp')===ver)
        {
            localStorage.removeItem('otp');
            setMsg("Order Confirmed");
            navigate('/');
        }
        else{
            setMsg("Wrong Otp");
        }

    }


    return(
        <>
        <Box style={{display:'flex',justifyContent:'center',marginTop:20}}>
            <BoxStyle>
                <Typography style={{fontWeight:600,marginBottom:20}}>Order Conformation Page</Typography>

                <Typography style={{color:'green'}}>{otp}</Typography>
                <OptBox>
                <TextField id="standard-basic" name="password" label="Enter Registered Mobile number" variant="standard" style={{paddingLeft:10}} />
                <ButtonStyle1 onClick={RequestOtp}>Request OTP</ButtonStyle1> 
                </OptBox>
                <TextField id="standard-basic"  name="email" label="Enter Your Address" variant="standard"  />
                <TextField id="standard-basic"  name="otp" label="Enter OTP" variant="standard" onChange={event => setVer(event.target.value)} value={ver} />
                <ButtonStyle onClick={Verification}>Procced Order</ButtonStyle> 
                <Typography style={{color:'green' ,fontWeight:600}}>{msg}</Typography>
            </BoxStyle>
            </Box>
        </>
    )
};
export default Confirm;