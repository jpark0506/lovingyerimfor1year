import React,{useEffect} from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import Data from '../Data/LetterData';
import './Transition.css'
const Background = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction:row;
font-size: 50px;
width: 80%;
height: 7%;
background-color: #fbf2cf;
color:#3D8361;
padding:2%;
`
const NavPage = ({page,incrNum, decrNum}) => {
  // useEffect(()=>{
  //   console.log(page)
  // },[])
    //조건에 따라 작동하는 함수 작성 예정
    const increaseNumber = () =>{
        incrNum()
    }
    const decreaseNumber = () => {
        decrNum()
    }
  return (
    <SwitchTransition>
      <CSSTransition key={page} classNames="slide" timeout={500} appear>
      <Background>
          {page!==0 &&page > 1 ?<div onClick={decreaseNumber}>back</div>:  <div></div>}
          {page!==0 && page < Data.Length-1 ? <div onClick={increaseNumber}>next</div> : <div></div>}
          
      </Background>
    </CSSTransition>
    </SwitchTransition>
  )
}

export default NavPage