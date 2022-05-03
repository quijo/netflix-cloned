//https://github.com/streamaserver/streama/issues/888
//pixel.com
import Styled from 'styled-components'
import React from 'react'
import Preview from '../video/preview.mp4'
import { FaPlay, FaCheck, FaSearch } from 'react-icons/fa';
import { BiInfoCircle } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
import { BsBellFill } from "react-icons/bs";
import Avatar from '../../images/Netflix-avatar.png'
import {useState} from 'react'
import List from '../../components/List'


const DashboardWrap = Styled.div`


video{
    position: absolute;
    z-index: -1;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    object-fit:cover;
}
`
const Play = Styled.div`
background-color:	rgba(16,16,16,0.7);
padding:10px 20px;
font-size:0.8rem;
display:flex;
justify-content:space-between;
width: 50px;
border-radius:5px;
flex:1;
`
const MyList = Styled.div`
background-color:	rgba(16,16,16,0.7);
padding:10px 20px;
font-size:0.8rem;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:5px;
width: 50px;
flex:1;
`
const MoreInfo = Styled.div`
background-color:	rgba(16,16,16,0.7);
padding:10px 20px;
font-size:0.8rem;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:5px;
width: 50px;
flex:1;
`

const ButtonWrap = Styled.div`
position: absolute;
width: 350px;
display:flex;
justify-content:space-between;
color:white;
gap:10px;
top:450px;
left:100px;
`

const Navbar = Styled.nav`
display: flex;
justify-content:space-between;
align-items:center;
width: 100%;
background-color:rgba(0,0,0,0.8) ;
transition:ease-in-out 0.3s;
.logout{
    padding:10px 20px;
    background-color:#E50914;
    color:white;
    border-style:none;
    border-radius:5px;
    font-size:1rem;
    cursor:pointer;
}
img{
    width: 100px;
    margin-left:50px;
}
&.isScrolled{
    transition:ease-in-out 0.3s;
    background-color:rgba(0,0,0,1)
}

`
const Left = Styled.div`
display: flex;
justify-content:space-between;
align-items:center;



ul{
    display: flex;
    gap:15px;
    li{
        list-style:none;
    }
    li a{
        color:white;
        text-decoration:none;

    }
    li a:hover{
        color:#f90920;
    }
}
`
const Right = Styled.div`
display: flex;
justify-content:space-between;
align-items:center;
color:white;
margin-right:50px;
gap:20px;
`
const Profile = Styled.div`
img{
    width: 30px;
    padding:0;
    margin:0 5px 0 0;
}

`
const MovieList=Styled.div`
margin-top:600px;

`

const Dashboard = () => {
   
//set isScrolled to false
const [isScrolled, setIsScrolled] = useState(false);
const [isPlay, setIsPlay] = useState(false)


//event window.onscroll
window.onscroll = ()=>{
setIsScrolled(window.scrollY === 0 ? false : true)
}

  
  function playMovie(){
      setIsPlay(!isPlay)
  }

  const handleClick = ()=>{
      window.location.href = "/"
  }
  return (
    <DashboardWrap>
        <Navbar className={isScrolled ? "isScrolled" : ""}>
            <Left>
              <img src={Logo} alt="logo"/>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">TV Shows</Link></li>
                  <li><Link to="/">Movies</Link></li>
                  <li><Link to="/">Recently Added</Link></li>
                  <li><Link to="/">My List</Link></li>
              </ul>

            </Left>

            <Right>
                <FaSearch/>
                <span>KIDS</span>
                <BsBellFill />
                <Profile> 
                    <img src={Avatar} alt="avatar"/>
                    <BsFillCaretDownFill />
                    
                </Profile>
                <button onClick={()=>handleClick()} className="logout">Logout</button>
            </Right>
        </Navbar>
        
      {isPlay &&  <video autoPlay loop muted><source src={Preview} type="video/mp4"/></video> }
      {!isPlay &&  <video muted><source src={Preview} type="video/mp4"/></video> }

        <ButtonWrap>
           <Play onClick={playMovie}> <FaPlay/> <span>Play</span></Play>
            <MyList><FaCheck/> <span>My List</span></MyList>
        
            <MoreInfo><BiInfoCircle/> <span>More Info</span></MoreInfo>
        </ButtonWrap>
        <MovieList>
                <List />
                <List />
        </MovieList>
        
    <div style={{height:500, background:"black"}}>

    </div>
    </DashboardWrap>
  )
}

export default Dashboard