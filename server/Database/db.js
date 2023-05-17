import mongoose from 'mongoose';
export const Connection=async(USERNAME,PASSWORD)=>{
    
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@Project 0.bl2mzqu.mongodb.net/?retryWrites=true&w=majority`;
    
    try{
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connection successful....');
    }
    catch(e){
        console.log(e)
    }
}
export default Connection;
