import React from 'react'
import Styled from 'styled-components'
import NetflixBg from '../images/bg.jpg'

const Container = Styled.div` 
    background-image:url(${NetflixBg});
    background-position:center;
    background-repeat:none;
    background-size:cover;
    height:625px;

`

const Hero = () => {
  return (
    <Container>

    </Container>
  )
}

export default Hero