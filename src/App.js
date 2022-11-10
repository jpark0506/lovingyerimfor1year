import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import LetterContainer from "./Container/LetterContainer"


const App = () => {
  
  return (
    <div>
      <Routes>
        {
          process.env.NODE_ENV === "development" ? 
          <Route path = "/absproxy/3000" element = {<LetterContainer/>}></Route>:
          <Route path = "/" element = {<LetterContainer/>}></Route> 
        }
       
      </Routes>
    </div>

  )
}
		  
export default App