import React,{useEffect} from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import LetterContainer from "./Container/LetterContainer"


const App = () => {
 useEffect(()=>{
  console.log(`build mode : ${process.env.NODE_ENV}`)
 },[])
  return (
    <div>
      <Routes>
        {
          process.env.NODE_ENV === "development" ? 
          <Route path = "/" element = {<LetterContainer/>}></Route>:
          <Route path = "/" element = {<LetterContainer/>}></Route> 
        }
       
      </Routes>
    </div>

  )
}
		  
export default App