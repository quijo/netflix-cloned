import React, { useState } from 'react'
import Styled from 'styled-components'
import Preview from '../images/image1.jpg'
import { FaPlay, FaThumbsUp, FaThumbsDown, FaPlus } from "react-icons/fa";



const ListItems =Styled.div`
position: relative;
width:225px;
height: 120px;
background-color:black;
overflow:hidden;
cursor:pointer;
color:white;
font-size:1rem;
font-weight:100;
img{
  object-fit:cover;
  width: 100%;
  height: 100%;
  

}
&:hover{
z-index:1;
 margin: -150px;
  width:325px;
  height: 300px;
  box-shadow: 2px 3px 15px -1px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px 3px 15px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 3px 15px -1px rgba(0,0,0,0.75);


  img{
    height:150px;
 
}
.icons{
  display: flex;
  gap: 10px;
  

}
.info{
  display: flex;
  gap:10px;
}
`
const ListItem = (index) => {

  const [isHovered, setIsHovered] = useState(false)
  return (
    <ListItems 
    style={{left: isHovered && index * 225 -50}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    
    >
   <></>
        <img src={Preview} alt="preview" />
        <div className='itemInfo'>
          <div className='icons'>
            <FaPlay />
            <FaPlus />
            <FaThumbsUp />
            <FaThumbsDown />
          </div>
          <div className='info'>
            <span>1 hours 14 mins</span>
            <span className='limit'>+16</span>
            <span>1999</span>
          </div>
          <div className='desc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
          <div className='genra'>Action</div>
        </div>
       
    </ListItems>
    
    
  )
}

export default ListItem