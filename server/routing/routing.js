import express from 'express';
import { userSignup, userLogin} from '../Controller/useController.js';
import { getProducts, getProductbyID, updateCart,getCart,delCart,getOtp } from '../Controller/productController.js';
const Router=express.Router();
Router.post('/login',userLogin);
Router.post('/signup',userSignup);
Router.get('/products',getProducts);
Router.get('/product/:id',getProductbyID);
Router.get('/user',getProductbyID);
Router.put('/products/:userid',updateCart);
Router.get('/cart/:userid',getCart);
Router.put('/delcart/:userid',delCart);
Router.get('/order/:userid',getOtp);
export default Router;