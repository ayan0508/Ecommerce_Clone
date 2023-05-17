import axios from 'axios';

import * as actionType from '../Constants/productConstant';
const URL='http://localhost:8000';


export const getProducts=() =>async(dispatch) =>{
    try{
        const {data}= await axios.get(`${URL}/products`); 
        dispatch({type:actionType.GET_PRODUCT_SUCCESS,payload: data})
    }
    catch(err){
        console.log('Error while calling',err.message);
        dispatch({type:actionType.GET_PRODUCT_FAILURE,payload:err.message});}
}




export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:actionType.GET_PRODUCT_DETAILS_REQUEST});
        const {data}= await axios.get(`${URL}/product/${id}`);
        localStorage.setItem('productId',data._id);
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:data});
    }
    catch(err){
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAILURE,payload: err.message});
        console.log(err);
    }
}