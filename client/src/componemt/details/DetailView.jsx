import {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getProductDetails} from '../../Redux/Actions/productAction';
import { useParams } from 'react-router-dom';
import {Box,Grid,styled} from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './rightSideview';
import { addToCart } from '../../Redux/Actions/cartAction';


const Container= styled(Box)`
background: #FFFFFF;
margin-top:55px;`



const RightContainer= styled(Grid)(({theme})=>({
    background: '#FFFFFF',
    marginTop:38,
    [theme.breakpoints.down('md')]: {
        margin:'15px ,15px,0,0',
        
    }
}))


const DetailsView=()=>{
    
    const { id } = useParams();
    const { loading, productDet } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    const userId=localStorage.getItem('userId');
    useEffect(() =>{
    if(productDet && id !== productDet.id)
    {        
       // localStorage.setItem('productId1',id);
        dispatch(getProductDetails(id));
        dispatch(addToCart(userId));
    }   
       
    }, [dispatch,id,productDet,userId]);

    console.log(productDet);
    return(
        <Container>
            {!loading&&productDet&&Object.keys(productDet).length&&
            <Grid container>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <ActionItem product={productDet}/>
                </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={8}>
                    <ProductDetail product={productDet}/>
                </RightContainer>
            </Grid>
            }
        </Container>
    )
}
export default DetailsView; 