import {Box,styled} from '@mui/material';
import Slide from './slide';

const Container = styled(Box)`
display:flex;`

const LeftHalf=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width: '100%',
    }
}))

const Img=styled('img')({
    width:217,
    height:305,

})

const RightHalf=styled(Box)(({theme})=>({
width: '17%',
backgroundColor: '#FFFFFF',
marginLeft: 5,
textAlign:'center',
padding:5,
marginTop:5,
marginBottom:5,
[theme.breakpoints.down('md')]:{
    display: 'none',
},
[theme.breakpoints.up('md')]:{
    overflow: 'overlay',
},

}))


const MidSlide=({products,title,timer})=>{
    const URL='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
       <Container>
            <LeftHalf>
            <Slide products={products} title={title} timer={timer}/>
            </LeftHalf>
            <RightHalf>
                <Img src={URL} alt='img1'/>
            </RightHalf>
       </Container>
    )
}
export default MidSlide;