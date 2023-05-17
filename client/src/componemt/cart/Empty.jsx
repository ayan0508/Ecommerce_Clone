import {Box,Typography,styled} from '@mui/material';


const Compoment=styled(Box)`
height:65vh;
width:80%;
background:#fff;
margin:80px 140px;`

const Container=styled(Box)`
text-align:center;
padding-top:70px;`

const Emptycart=()=>{
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return(
        <>
            <Compoment>
                <Container>
                    <img src={imgurl} alt="img1" style={{width:400}}/>
                    <Typography >Your Cart is Empty</Typography>

                </Container>
            </Compoment>
        </>
    )
}
export default Emptycart;