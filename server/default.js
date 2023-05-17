import { products } from "./constant/data.js";
import Product from './model/product_schema.js'
const DefaultData=async()=>{
    try{
        // await Product.deleteMany({});
        // await Product.insertMany(products);
        console.log("Product insert successfully");
    }
    catch(e){
        console.log(e);
    }
}
export default DefaultData;