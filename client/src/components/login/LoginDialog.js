import { Dialog,Box,TextField,Button, Typography,styled } from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
height:60vh
/* width: 90vh; */
`

const Image=styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 83%;
    width: 30 %;
    padding: 25px 35px;
    & > p,& > h5 {
        color:#ffff;      
    }
`

const Wrapper= styled(Box)`
   display: flex;
   flex-direction:column;
   padding: 25px 35px;
   flex:1;
   & > div, & > button ,& > p {
    margin-top:20px;
   }
`

const LoginButton=styled(Button)`
text-transform:none;
background:#Fb641B ;
color: #fff;
height: 48px;
border-radius :3px;
`

const RequestOTP=styled(Button)`
text-transform:none;
background:#fff ;
color: #2874fO;
height: 48px;
cursor:pointer;
border-radius :3px;
box-shadow:0 2px 4px 0 rgb(0  0 0/ 20%);
`

const Text = styled(Typography)`
  font-size:12px;
  color:#878787;
`

const CreateAccount = styled(Typography)`
      font-size: 14px;
      text-align:center;
      color:#2874f0;
      font-weight:600;
      cursor:pointer;
`

const accountInitialValue={
   login:{
      view: 'login',
      heading:'Login',
      subHeading:'Get access to your Orders,Wishlist and Recommnedation'
   },
   signup:{
      view : 'signup',
      heading:'Looks like you are New here !',
      subHeading: 'sign up with your mobile number to get started'
   }
}

  const signupInitialValues = {
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
  }

   const LoginDialog=({open,setOpen})=>{
  
   const [account,toggleAccount]= useState(accountInitialValue.login);
   const [signup,setSignup]= useState(signupInitialValues);
    
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValue.login)
     }

   const toggleSignup=()=>{
      toggleAccount(accountInitialValue.signup)
   }

   const onInputChange =(e)=>{
       setSignup({[e.target.name]:e.target.value})
      console.log(signup);
      }


    return(
       <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
          <Component>
            <Box style={{display:"flex",height:'100%'}}>
               <Image>
                  <Typography variant="h5">{account.heading}</Typography>
                  <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
               </Image>
               {
               account.view=== 'login' ?
                    <Wrapper>
                       <TextField variant="standard" label="Enter Email/Mobile Number"></TextField>
                       <TextField variant="standard" label="Enter Password"></TextField>
                       <Text> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                       <LoginButton>Login</LoginButton>
                       <Typography style={{textAlign:'center'}}>OR</Typography>
                       <RequestOTP> Request OTP </RequestOTP>
                       <CreateAccount onClick={()=> toggleSignup()}>New To Flipkart? Create an account</CreateAccount>
                     </Wrapper>
               :        
                    /*  Signup dialog box*/
                     <Wrapper>
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Your First Name"></TextField>
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Your Last Name"></TextField>
                          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter UserName"></TextField>
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter email"></TextField>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password"></TextField>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone No."></TextField>
                        <LoginButton>Login</LoginButton>
                        <RequestOTP> Request OTP </RequestOTP>
                        <CreateAccount>New To Flipkart? Create an account</CreateAccount>
                      </Wrapper>
               }    
            </Box>
          </Component>
       </Dialog>
        )
}

export default LoginDialog;