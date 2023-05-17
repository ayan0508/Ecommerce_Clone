import { Grid,styled } from "@mui/material";
import { imageURL } from "../../constant/NavPic";

const Wrapper=styled(Grid)`
margin-top:10px;
justify-content:space-between;`

const MidBanner=()=>{
    return(
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(img=>(
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={img} alt='img1' style={{width: '100%'}}/>
                    </Grid>
                ))
            }
        </Wrapper>
    )
}
export default MidBanner;