import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 35px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
      Super Deal! Gain maximum from it!!!
    </Container>
  )
}

export default Announcement
