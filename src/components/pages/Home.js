import React from 'react'
import Hero from '../Hero'
import Styled from 'styled-components'
import Logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

const Header = Styled.header`
position: absolute;
color:white;
width:100%;
height:90px;
display:flex;
justify-content:space-between;
align-items:center;

img{
    width: 160px;
    margin-left:43px;
}
button{
    margin-right:45px;
    padding:10px 20px;
    background-color:#E50914;
    color:white;
    border-style:none;
    border-radius:5px;
    font-size:1rem;
    cursor:pointer;
}
`
const TextWrap = Styled.div`
position: absolute;
color:white;
text-align:center;
left:0;
right:0;
margin-left:auto;
margin-right:auto;
max-width:530px;
top:190px;
h1{
    font-size:3.2rem;
    font-weight:600;
    line-height:50px;

}
h2{
    margin-top:-10px;
    font-weight:100;
    font-size:1.7rem;
}
`
const GetStarted = Styled.div`
    position:absolute;
    text-align:center;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;

    max-width:650px;
    top:450px;

    color:white;
    font-size:1.2rem;

    form{
        background: green;
        display: flex;
    }

    input{
        height: 50px;
        flex-grow: 4;
        border:none;
        outline:none;
        ::placeholder{
          position: absolute;
          top:18px;
          left:10px;
       
        }

    }

    button{
        display: flex;
        justify-content:space-evenly;
        align-items:center;
        flex-grow:1;
        background-color:#E50914;
        color:white;
        border:none;
        font-size:1.4rem;
        :hover{
            background-color:rgb(227,30,20)
        }  
        a{
            color:white;
            text-decoration:none;
        }
    }

`


const Home = () => {
  return (
      <>
        <Header>
            <img src={Logo} alt="logo" />
            <Link to="/login"><button>Sign In</button></Link>
        </Header>

        <TextWrap>
           <h1>Unlimited movies, TV shows, and more.</h1>
           <h2>Watch anywhere. Cancel anytime.</h2> 
        </TextWrap>

        <GetStarted>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
                <input type="text" placeholder='Email Address'/>
               <button><Link to="/login">Get Started </Link><FaChevronRight/></button>
            </form>
        </GetStarted>

        <Hero/>
      </>
    
  )
}

export default Home