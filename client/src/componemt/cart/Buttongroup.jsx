import {ButtonGroup,Button,styled} from '@mui/material';


const Compoment=styled(ButtonGroup)`
margin-top: 30px;`
const StyleButton=styled(Button)`
border-radius: 50%;`
const Buttongroup = ()=>{
   // const [itemNo,SetIntemNo]=useState(1);

    return (
        <Compoment>
            <StyleButton>-</StyleButton>
            <Button>1</Button>
            <StyleButton >+</StyleButton>
        </Compoment>
    )
}
export default Buttongroup;