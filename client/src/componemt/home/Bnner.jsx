import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { bannerData} from "../../constant/NavPic";
import {styled} from '@mui/material';

const Img=styled('img')(({theme})=>({
  width:'100%',
  height:280,
  [theme.breakpoints.down('md')]:{
    objectFit: 'cover',
    height:180,
    width:'100%'
  }
}))
  


const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Bnner =()=>{
    return(
        
            <Carousel responsive={responsive} 
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                autoPlay={true }
                autoPlaySpeed={2000 }
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    bannerData.map((item)=>{
                        return(
                            <Img src={item.url} alt="banner"/>
                        )
                    })
                }
            </Carousel>
       
    )
}
export default Bnner;