import { AppBar, Toolbar,styled,Box,Typography,IconButton,List,ListItem } from '@mui/material';
import Searchbar from './Searchbar';
import React from 'react';
import Custombuttom from './Custombuttom';
import {Link} from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';



const StyleHeader= styled(AppBar)`
background-color: #2874f0;
height: 55px;
`
const Componemt= styled(Link)`
margin-left:12%;
line-height:0;
color:inherit;
text-decoration:none;
`
const SubH=styled(Typography)`
font-size:10px;
font-style:italic;
`
const SubImg=styled('img')({
    width:10 ,
    height:10,
    marginLeft:4,
});

const CustomNav=styled(Box)(({theme})=>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display: 'none',
    }
}))
   
const MenuButton=styled(ListIcon)(({theme})=>({
    display: 'none',
    [theme.breakpoints.down('md')]:{
        display: 'block',
    }
}))


const Navbar=()=>{   
    const logo='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const Sub_logo='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png';
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    } 
    const list=()=>(
        <Box Style={{display:'block'}} onClink={handleClose}>
        <List>
            <ListItem button>
                <Custombuttom/>
            </ListItem>
        </List>
    </Box>
    )

    
    return(
        <>
            <StyleHeader>
                <Toolbar style={{minHeight:55}}>
                    <IconButton aria-label="delete">
                    <MenuButton style={{color:'#FFFFFF'}} onClick={handleOpen}/>
                    </IconButton>
                    <Drawer open={open} onClose={handleClose}>{list()}</Drawer>
                        <Componemt to={'/'}>
                            <img src={logo} alt="logo" style={{width:75}} />
                            <Box style={{display:'flex'}}>
                            <SubH>Explore &nbsp;<Box component="span" style={{color:"yellow"}}>Now
                                </Box>
                            </SubH>
                            <SubImg src={Sub_logo} alt="Sub_logo"/>
                            </Box>
                        </Componemt>
                        <Searchbar />
                        <CustomNav>
                            <Custombuttom/>
                        </CustomNav>
                </Toolbar>
            </StyleHeader>
        </>
    )
}
export default Navbar;