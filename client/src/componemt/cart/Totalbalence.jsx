import {Box,Typography,styled} from '@mui/material';
import {useEffect, useState} from  'react';
const Heading= styled(Box)`
padding:15px 24px;
background:#fff;
border-bottom: 1px solid #f0f0f0;`

const Headingtext = styled(Box)`
color:#878787;`

const Container=styled(Box)`
padding:15px 24px;
background:#fff;
& >p{
    margin-bottom:20px;
    font-size:14px;
}
& > h6{
    font-size:20px;
}`
const Price=styled(Box)`
float:right;`

const Discount=styled(Typography)`
color:green;
font-weight:500;`

const Total=({items})=>{
    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);
    const [delivary,setDelivary]=useState(0);
    useEffect(()=>{
        totalAmount();
    },[items])
    
    const totalAmount=()=>{
        let price=0,discount=0;
        console.log(items.length);
        for(var i=0; i<items.length; i++)
        {
            price +=items[i].price.mrp;
            discount +=(items[i].price.mrp-items[i].price.cost);
        }
        (price-discount>500)?setDelivary(0):setDelivary(40);
        setPrice(price);
        setDiscount(discount);
    }

    return(
        <Box style={{marginLeft:5}}>
            <Heading>
                <Headingtext>Price Details</Headingtext>
            </Heading>
            <Container>
                <Typography>Price {items.length} item
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                        <Typography>Delivary Charges
                            <Price component="span">{delivary}</Price>
                        </Typography>
                <Typography variant="h6">Total Amount
                    <Price component="span">₹{price-discount+delivary}</Price>
                </Typography>
                <Discount>You will save ₹{discount-delivary} in this order</Discount>
            </Container>
        </Box>
    )
}
export default Total;