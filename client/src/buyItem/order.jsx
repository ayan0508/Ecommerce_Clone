import axios from "axios";
const URL='http://localhost:8000';
const Order =async(userId)=>{
    try{
        console.log(userId);
        return axios.get(`${URL}/order/${userId}`);
    }
    catch(e){
        console.log(e);
    }
}
export default Order;