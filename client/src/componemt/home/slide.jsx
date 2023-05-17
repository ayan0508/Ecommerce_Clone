import Carousel from "react-multi-carousel";
import {Box, Typography,Button,Divider,styled} from '@mui/material';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';


const Container=styled(Box)`
margin: 5px;
background-color:#FFFFFF;`

const Deal=styled(Box)`
padding:15px 30px;
display:flex;

align-items:center;`

const Timer=styled(Box)`
display: flex;
margin-left:5px;
align-items: center;`;

const Img=styled('img')`
hight:20px;
width:20px;
margin-right:10px;
`;
const Text=styled(Typography)`
font-size:23px;
font-weight:600;
line-height:32px;`;

const TextButton=styled(Button)`
margin-left:auto;
background-color:#2874f;
border-radius:2px;
font-size:13px;
font-weight:600`;

const ProductImg=styled('img')({
    width:'auto',
    height:120
});
const ProductText=styled(Typography)`
font-size:14px;
margin-top:5px;`
const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
 
const Slide=({products,title,timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer=({hours,minutes,seconds})=>{
        return <Box varient="span">{hours}:{minutes}:{seconds} left</Box>;
    }
    return(
        <Container>
            <Deal>
                <Text>{title}</Text>
                {
                    timer &&
                    <Timer>
                        <Img src={timerURL} alt='img' />
                        <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
                    </Timer>
                }

                <TextButton variant='contained' color='primary'>View All</TextButton>
            </Deal><Divider/>
        <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={2000 }
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
        >
            {
                products.map(product =>(
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                        <Box textAlign='center' style={{padding: '25px 15px'}}>
                        <ProductImg src={product.url} alt='product1'/>
                        <ProductText style={{fontWeight:600, color:'#212121'}}>{product.title.shortTitle}</ProductText>
                        <ProductText style={{color:'green'}}>{product.discount}</ProductText>
                        <ProductText style={{color:'#212121',opacity:'0.6'}}>{product.tagline}</ProductText>
                        </Box>
                   </Link>
                ))
            }
        </Carousel>
        </Container>
    );
}
export default Slide;