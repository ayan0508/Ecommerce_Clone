import axios from 'axios';
import * as actionType from '../Constants/cartContant';

const URL='http://localhost:8000';
//const userId= localStorage.getItem('userId');
export const addToCart=(userId)=>async(dispatch)=>{
    try{

        const {data}= await axios.get(`${URL}/cart/${userId}`);
        console.log(data);
        dispatch({type:actionType.ADD_TO_CART,payload:data});
    }
    catch(err){
        dispatch({type:actionType.ADD_TO_CART,payload:err.message});

    }
}

