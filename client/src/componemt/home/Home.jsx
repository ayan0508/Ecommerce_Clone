import React from 'react';
import Nav from './Nav';
import Bnner from './Bnner';
import {Box,styled} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getProducts} from '../../Redux/Actions/productAction';
import { useSelector } from 'react-redux';
import Slide from './slide';
import MidSlide  from './MidSlide';
import MidBanner from './MidBanner';
import { addToCart } from "../../Redux/Actions/cartAction";


const Compoment = styled(Box)`
padding: 10px;
background-color:#F2F2F2;`
const Home=()=>{
    const {products} = useSelector(state=>state.getProducts);
    console.log(products);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    //3 life cycle methode of react-componemtdidmount , componemtwillmount,componemtdidupdate

    const userId=localStorage.getItem('userId');
    useEffect(() =>{
        if(localStorage.getItem('userId'))
            dispatch(addToCart(userId));
        },[dispatch,userId]);//3 life cycle methode of react-componemtdidmount , componemtwillmount,componemtdidupdate
    return(
        <>
        <Nav/>
        <Compoment>
            <Bnner/>
            <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <Slide products={products} title='Deal of the Day' timer={true}/>
            <Slide products={products} title="Suggested for You" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Home & Kitchen Essentials" timer={false}/>
            <MidBanner/>
        </Compoment>
       
        </>
    )
}
export default Home;  