import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import LetterPage from '../Components/LetterPage'
import NavPage from '../Components/NavPage';
const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color : #fa7070;
  font-family: var(--font-EF_WAKEUP);
`;

const LetterContainer = () => {
  
  const [number, setNumber] = useState(0)
  
  useEffect(()=>{
    console.log(number)
  },[number])
  
  const increaseNumber = () => {
    setNumber(number+1)
  }
  const decreaseNumber = () => {
    setNumber(number-1)
  }

  return (
    <Container>
      
        <LetterPage page = {number} incrNum = {increaseNumber}></LetterPage>
        <NavPage page = {number} incrNum = {increaseNumber} decrNum = {decreaseNumber}></NavPage>
    </Container>

  )
}

export default LetterContainer