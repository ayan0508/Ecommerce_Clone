
import axios from 'axios';
const URL='http://localhost:8000';

export const ACart=async(id)=>{
    try{
        // console.log(account);
        const userId= localStorage.getItem('userId');
        return await axios.put(`${URL}/products/${userId}`,{productId:localStorage.getItem('productId')});
    }
    catch(err){
        console.error(err);
    }
}
export const RCart=async(itemId)=>{
    try{
        const userId= localStorage.getItem('userId');
        return await axios.put(`${URL}/delcart/${userId}`,{itemId});
    }
    catch(err){
        console.error(err);
    }
}
