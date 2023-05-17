import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
});
const product= mongoose.model("product", product_schema);
export default product;