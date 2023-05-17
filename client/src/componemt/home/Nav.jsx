import React from "react";
import { Box,styled,Typography } from '@mui/material';
import {data} from "../../constant/NavPic";
const Picstyle=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    margin: '55px 13px 0px 13px',
    justifyContent:'space-between',
    paddingRight: 10,
    backgroundColor:'#FFFFFF',
    
    [theme.breakpoints.down('md')]:{
        margin:0,
        overflow: 'hidden',
        paddingRight: 1,
    }
}))
  
    
     
const Icon=styled(Box)`
padding: 10px;
display:flex;
flex-direction: column;
justify-content: center;
&:hover {
    cursor: pointer;
 }`
const Nav=()=>{
    return(
    <>
        <Picstyle>
         {
            data.map(item=>(
                <Icon>
                    <img src={item.url} alt="" style={{width:64}}/>
                    <Typography>{item.txt}</Typography>
                </Icon>
            ))
        }
    </Picstyle> 
    </>
    )
}

export default Nav;