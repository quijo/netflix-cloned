import React from 'react'
import Styled from 'styled-components'
import NetflexBg from '../../images/bg.jpg'
import Facebook from '../../images/facebook.png'
import {Link} from 'react-router-dom'

const MainWrap =Styled.div`
background-image:url(${NetflexBg});
height:790px;
width:100%;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`

const FormWrap = Styled.div`
width:330px;
background-color:rgba(0,0,0,0.8);
color:white;
position: absolute;
margin-left:auto;
margin-right:auto;
left:0;
right: 0;
top:100px;

padding-left:5%;
padding-right:5%;
padding-top:50px;
border-radius:5px;

form{
    margin:0 auto;
    input[type='email'],[type='password'],[type='submit']{
        box-sizing:border-box;
        width: 100%;
        height:50px;
        margin-top:15px;
        border-radius:5px;
        border:none;
        outline: none;
        }

    input[type='email'],[type='password']{
       padding-left:15px;
        }
    

    input[type='submit']{
       margin-top:40px;
       background-color:#E50914;
       color:white;
       font-size:1.1rem;
       font-weight:600;
     
    }
    input[type='checkbox']{
        margin-top:15px;
        zoom:1.5;
        
    }
    input[type='checkbox']:defaultChecked{
     background-color: gray;
        
    }

    label{
        color:#c0c0c0;
        position: relative;
        font-size:0.9rem;
    }
    label span:nth-child(2){
        position: absolute;
        
        width:100px;
        top:0.2px;
        right:-220px;
    }

}
`
const SignUp = Styled.div`

color:white;
margin-left:auto;
margin-right:auto;
margin-top:70px;
padding-bottom:50px;

left:0;
right: 0;

.spanText{
color:#c0c0c0;
font-size:0.9rem;
font-weight:100;


    }
 img{
     width:20px;
     margin-right:5px ;
 }
.signUp{
    color:#c0c0c0;
    font-size:1.2rem;
  
}
.learnMore{
    color:#c0c0c0;
    font-size:0.9rem;

}
.learnMore a{
    color:#145DA0;
    text-decoration:none;
  
}
p:nth-child(2) a{
    color:white;
    font-size:1.3rem;
    text-decoration:none;
}

`


const Login = () => {
  return (
    <MainWrap>
        <FormWrap>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or phone number'/>
                <input type="password" placeholder='Password'/>
                <input type='submit' value="Sign In"/>
                <input type="checkbox" defaultChecked /><label><span>Remember me</span><span>Need help?</span></label> 
 
            </form>
          
        <SignUp>
                <span className='spanText'><img src={Facebook}/> Login with Facebook</span>
                <p className='signUp'>New to Netflix? <Link to="/">Sign up now</Link></p>
                <p className='learnMore'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="/">Learn more.</Link></p>

        </SignUp>
        </FormWrap>
       
    </MainWrap>
  )
}

export default Login