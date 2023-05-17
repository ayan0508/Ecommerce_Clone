import React, { useState, useEffect } from 'react';
import { Box,styled ,InputBase,List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../Redux/Actions/productAction';
import {Link} from 'react-router-dom';

const Search=styled(Box)`
background-color: #fff;
width: 37%;
border-radius:2px;
margin-left:10px;
display: flex;
`;
const Input = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const SearchImg=styled(Box)`
color:#2874f0;
padding: 5px;
&:hover {
        cursor: pointer;
     }
`;

const ListWrapper=styled(List)`
position: absolute;
background:#FFFFFF;
color:#000;
margin-top: 40px;
border-radius:2px;`

const Searchbar=()=>{
    const [ text,setText]=useState('');
    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    const getText=(text)=>{
        setText(text);
    }
    return(
        <>
            <Search>
                <Input placeholder='Search for any product or brands'
                    onChange={(e)=>getText(e.target.value)}
                />
                <SearchImg>
                    <SearchIcon/>
                </SearchImg>
                {
                    text&&products.length>1 &&
                    <ListWrapper>
                        {
                            products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                <ListItem>
                                    {
                                        <Link to={`/product/${product.id}`}>
                                            {product.title.longTitle}
                                        </Link>
                                        
                                    }
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
                }
            </Search>
        </>
    )
}
export default Searchbar;