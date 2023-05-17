import { Typography,Box,styled } from "@mui/material";
import LocalOfferIcon  from '@mui/icons-material/LocalOffer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Offers=styled(Box)`
font-size: 14px;
&>p{
    font-size:14px;
    margin-top:10px;
}`

const StyleBadge=styled(LocalOfferIcon)`
margin-right:10px;
font-size:15px;
varticle-align:baseline;
`
const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&>td{
    font-size:14px;
    margin-top:10px;
    border:none;
}`

const Text=styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        marginLeft:45,
    }

}))

const TableStyle=styled(TableBody)`
margin-left:0px;`
const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date=new Date(new Date().getTime()+(5*24*3600*1000));
    return(
        <>
        <Text>
                <Typography style={{ fontSize:25,fontWeight:600}}>{product.title.longTitle}</Typography>  
                <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews<span><img src={fassured} style={{width: 77, marginLeft: 20}} alt="img" /></span>
                </Typography>
                <Typography>
                    <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                    <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                </Typography> 
                <Typography>Avialable Offers</Typography>
                <Typography>
                    <Offers>
                    <Typography><StyleBadge sx={{color:'#32CD32'}} fontSize="small"/>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                    <Typography><StyleBadge sx={{color:'#32CD32'}} fontSize="small"/>Bank Offer₹1000 Off On HDFC Bank Credit and Debit Card TransactionsT&C</Typography>
                    <Typography><StyleBadge sx={{color:'#32CD32'}} fontSize="small"/>Special PriceGet extra ₹12000 off (price inclusive of cashback/coupon)T&C</Typography>
                    <Typography><StyleBadge sx={{color:'#32CD32'}} fontSize="small"/>FreebieGet Flat ₹2500 Bonus on My11CircleT&C</Typography>
                    </Offers> 
                </Typography>
            </Text>
                <Table>
                    <TableStyle>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>{date.toDateString()}|₹40</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                            <TableCell>No Warranty</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Seller</TableCell>
                            <TableCell style={{fontWeight:600}}>
                                <Box component="span" style={{color:'#2874f0'}}>SuperStore</Box>
                                <Typography style={{fontSize:14}}>GST invoice Avialable</Typography>
                                <Typography style={{fontSize:14}}>View more Seller starting from ₹166</Typography>
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell colSpan={2} rowSpan={-1}>
                                <img src={adURL} style={{width:390}}  alt="img1"/>
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Description</TableCell>
                            <TableCell style={{}}>{product.description}</TableCell>
                        </ColumnText>
                        
                    </TableStyle>    
                </Table>
        
        </>
    )
}
export default ProductDetail;