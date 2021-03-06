import React from 'react'
import Styled from 'styled-components'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import ListItem from '../components/ListItem'
import {useRef, useState} from 'react'


const Lists = Styled.div`
display: relative;
width:100%;

`

const ListTitle = Styled.span`
color:white;
`
const ListWrap = Styled.div`
display: flex;
display: absolute;
width: 100%;


left:0;
right:0;
margin-right:auto;
margin-left:auto;

.leftArr{
    color:white;
    width:50px;
    background-color:rgba(0,0,0,0.9) ;
    position: absolute;
    left:0;
    margin-top:35px ;
    height:50px;
    cursor:pointer;
    z-index:999;
    
    
}
.rightArr{
    color:white;
    width:50px;
    background-color:rgba(0,0,0,0.9) ;
    position: absolute;
    right:0;
    height:50px;
    cursor:pointer;
    margin-top:35px ;
    z-index:998;

}
`
const MovieWrap = Styled.div`

display: flex;
width: max-content;
gap:5px;
translate:translateX(0);
transition: all 1s ease;


`


const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    
    const listRef = useRef();
    const handleClick = (direction)=>{
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0){
            
         setSlideNumber(slideNumber - 1)
         listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === "right" && slideNumber < 10){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
           }
    }
  return (
    <Lists>
        <ListTitle>Continue to Watch</ListTitle>
        <ListWrap>
            <BsChevronLeft className='leftArr' onClick={()=>handleClick("left")}/>
                <MovieWrap ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </MovieWrap>
            <BsChevronRight className='rightArr' onClick={()=>handleClick("right")}/>
        </ListWrap>
        
    </Lists>
  )
}

export default List