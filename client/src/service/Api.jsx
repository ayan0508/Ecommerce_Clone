import axios from 'axios';
const URL='http://localhost:8000';
export const login_Auth=async(data)=>{
    try{
        return await axios.post(`${URL}/login`,data)
    }
    catch(err){
        console.error(err);
    }
}
export const Authotiator=async(data)=>{
    try{
        return await axios.post(`${URL}/signup`, data);
    }
    catch(err){
        console.log('Error While Login'+ err);
        return err.response;
    }
}