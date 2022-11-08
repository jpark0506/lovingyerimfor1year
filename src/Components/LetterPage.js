import React, { useEffect } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import Data from '../Data/LetterData';
import Photo from '../Images/photo.png'
import './Transition.css'
const Background = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
font-size: 60px;
width: 80%;
height: 80%;
`;
//white-space: pre;가 줄바꿈 허용 핵심
const Description = styled.div`
  background-color: #c6ebc5;
  width: 100%;
  height: 80%;
  display: flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  white-space: pre;
  line-height:1.5em;
  color:#3D8361;
  font-family: var(--font-EF_WAKEUP);
  flex-direction:column;
`;
const Description2 = styled.div`
  background-color: #c6ebc5;
  width: 100%;
  height: 100%;
  display: flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  white-space: pre;
  line-height:1.5em;
  font-size: 45px;
  color:#3D8361;
  pagging:20%;
  font-family: var(--font-EF_WAKEUP);
  flex-direction:column;
`;
const Present = styled.div`
  background-color: #c6ebc5;
  width: 100%;
  height: 80%;
  display: flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  color:#3D8361;
  font-family: var(--font-EF_WAKEUP);
`;
const Title=styled.div`
  background-color: #fbf2cf;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  width: 100%;
  height: 20%;
  color:#fa7070;
  font-family: var(--font-EF_WAKEUP);
`;
const ImageContainer = styled.img`
height:45%;
width:80%;
`
const LetterPage = ({page,incrNum}) => {
  useEffect(()=>{
    console.log(page)
  },[page])
  const increaseNumber = () =>{
    incrNum()
  }
  return (
    
    <SwitchTransition>
      <CSSTransition key={page} classNames="slide" timeout={500} appear>
        <Background>
          
          {
            page < 3 ? <Title>{Data.Titles[page]}</Title> : <div></div>
          }
          

          { 
            page < 3 ?
            (page === 0 ? 
            <Present onClick={increaseNumber}>
              {Data.Descriptions[page]}
            </Present>: <Description>
              {
                Data.Photos[page] === 0 ? <div></div>:
                 <ImageContainer src={Photo}>

                 </ImageContainer>
              }
              {Data.Descriptions[page]}
            </Description>) : (page === 0 ? 
            <Present onClick={increaseNumber}>
              {Data.Descriptions[page]}
            </Present>: <Description2>
              {
                  Data.Photos[page] !== 0 ? 
                  <ImageContainer src={Photo}>

                  </ImageContainer>:<div></div>
              }
              {Data.Descriptions[page]}
            </Description2>)
            
          }
              
        </Background>
        </CSSTransition>
    </SwitchTransition>
      
    
  )
}

export default LetterPage