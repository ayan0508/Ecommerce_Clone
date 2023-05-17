import Dialog from '@mui/material/Dialog';
import { useState,useContext } from 'react';
import { Box,TextField,Button, Typography,styled } from '@mui/material';
import {Authotiator, login_Auth} from '../../service/Api';
import { DataContext } from '../../Context/dataprovider';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartAction';
const Wrapper=styled(Box)`
display: flex;
flex-direction: row:
width:90vw;`


const Imge=styled(Box)`
background:#2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 80% no-repeat;
height:70vh;
width:13vw;
padding-left:40px;
padding-right:10px;
padding-top:25px;`

const Content=styled(Box)`
height:45vh;
width:26vw;
display:flex;
flex-direction:column;
text-align:center;
padding:20px;`

const Foot=styled(Typography)`
color:#2874f0 ;
margin-top:280px;
cursor:pointer;
`
const ButtonStyle=styled(Button)`
background-color:orange;
color:white;
height:48px;
&:hover {
    background-color:orange;
    cursor:pointer;
 }
`
const ButtonStyle1=styled(Button)`
margin-top: 40px;
background-color:orange;
color:white;
height:48px;
&:hover {
    background-color:orange;
    cursor:pointer;
 }
`
const Input=styled(TextField)`
padding-bottom: 25px;
 }
`
const ErrorMsg=styled(Typography)`
color: red;`
const accountStatus={
    login:{
        view: 'login'
    },
    signup:{
        view: 'signup'
    }
}

const signUpobj={
    firstname:"",
    lastname:"",
    password:"",
    email:"",
    phn_no:"",
}
const loginobj={
    email:"",
    password:"",
}
const LoginPage=(props)=>{
    const [acc,setAcc]=useState(accountStatus.login);
    const [signupData,setSignupdata]=useState(signUpobj);
    const [loginData,setLogindata]=useState(loginobj);
    const [error,setError]=useState(false);
    const {setAccount}=useContext(DataContext);
    const Close=()=>{
        props.setOpen(false);
        setAcc(accountStatus.login);
        setError(false);
    }

    const signUp=()=>{
        setAcc(accountStatus.signup);
    }
    const onValuechange=(e)=>{
        setLogindata({...loginData,[e.target.name]:e.target.value});
    }
    const dispatch= useDispatch();
    const login=async ()=>{
        let loginRes=await login_Auth(loginData);
        if(loginRes)
        {
            if(loginRes.status===200)
            {
               localStorage.setItem('userId',loginRes.data.User._id);

            localStorage.setItem('userName',loginRes.data.User.firstname);
        
            dispatch(addToCart(loginRes.data.User._id));
        
               
            Close();
            }
            if(localStorage.getItem('userName'))
                setAccount(localStorage.getItem('userName'));
            setLogindata(loginobj);
        }
        
        else{
            setError(true);
        }
    }
    const oninputChange=(e)=>{
        setSignupdata({...signupData,[e.target.name]:e.target.value });
        console.log(signupData);
    }
    const Sign_Up=()=>{
        let response=Authotiator(signupData);
        if(!response) return;
        
        Close();
        setAccount('');
        console.log(response);
    }
    return (
        <>
        <Dialog open={props.open} onClose={Close} PaperProps={{sx:{maxWidth:'unset'}}}>
            {

            acc.view==='login'?
            <Wrapper>
                <Imge style={{color:"#fff", fontSize:"25px"}}>Login <br/><br/> <Box component="span" style={{fontSize:"19px"}}>Get access to your Orders, Wishlist and Recommendations</Box></Imge>
                <Content>
                   { error&&<ErrorMsg>Invalid email or password</ErrorMsg>}
                <TextField id="standard-basic" onChange={(e)=>{onValuechange(e)}} name="email" label="Enter the Email" variant="standard" />
                <TextField id="standard-basic" onChange={(e)=>{onValuechange(e)}}name="password" label="Enter password" variant="standard" />
                <p style={{fontSize:"14px"}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                <ButtonStyle onClick={()=>{login()}}>Login</ButtonStyle> 
                <Foot onClick={()=>signUp()}>New to Flipkart?Create an account</Foot>
                </Content>
            </Wrapper>
            :
            <Wrapper>
                <Imge style={{color:"#fff", fontSize:"25px"}}>Looks like you're new here!<br/><br/> <Box component="span" style={{fontSize:"19px"}}>Sign up with your mobile number to get started</Box></Imge>
                <Content>
                <Input id="standard-basic" label="Enter First Name" onChange={(e)=>{oninputChange(e)}} name='firstname' variant="standard" />
                <Input id="standard-basic" label="Enter Last Name " onChange={(e)=>{oninputChange(e)}} name='lastname' variant="standard" />
                <Input id="standard-basic" label="Enter Password" onChange={(e)=>{oninputChange(e)}} name='password' variant="standard" />
                <Input id="standard-basic" label="Enter the Email" onChange={(e)=>{oninputChange(e)}} name='email' variant="standard" />
                <Input id="standard-basic" label="Enter the Mobile Number" onChange={(e)=>{oninputChange(e)}} name='phn_no' variant="standard" />
                <ButtonStyle1 onClick={()=>Sign_Up()}>Continue</ButtonStyle1> 
                </Content>
            </Wrapper>
            }
        </Dialog>
        </>
    )
};
export default LoginPage;