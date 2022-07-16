// import React from "react" //to export default module 
// import { useCallback as hello } from "react"; //to export non  default module 
// import { useState as haneenstate } from "react";
// import './App.css'; //to export file like css extintion
import React from "react";
import { useState } from "react"; // non default 
import './css/App.css';
import Header from './Header';
import Login from "./Login";
import Register from "./Register";

const App = () =>{

  const [isLogin , setLogin ]= useState(false);

  return(
    <div>
       <Header />
      {(isLogin) ? <Login  setLogin={setLogin} /> : <Register setLogin={setLogin} />}
  </div>
  )
}
export default App;










// import './css/App.css';
// import { useState } from 'react';
// import Login from "./login";
// import Registration from "./registration";
// import Props  from './Props';
// export default function () {
//   // const [mode, setMode] = haneenstate("dark")//[read,write]
//   const [mode, setMode] = useState("dark")//[read,write]

//   const handleModeChange = () => {
//     const newMode = (mode === "dark") ? "light" : "dark"
//     setMode(newMode)
//     alert(mode ) 
  
//   }
// const Header=()=>{
//   return(     <header className={mode}>
//     {(mode === "dark") &&
//       <p>
//         show show show show
//         show show show show show
//         show show show show
//         show show show show show
//         show show show show show
//       </p>
//     }

//     {
//       (mode !== "dark") &&
//       <p >
//         light light light light light
//         light light light light light
//         light light light light light
//         light
//       </p>
//     }

//     <p className={(mode === "dark") ? 'show' : "hidden"}>
//       show show show show
//       show show show show show
//       show show show show
//       show show show show show
//       show show show show show
//     </p>

//     <p className={(mode === "dark") ? 'hidden' : "show"}>
//       light light light light light
//       light light light light light
//       light light light light light
//       light
//     </p>
//     <button onClick={handleModeChange}>{(mode === "dark") ? 'light' : "dark"}</button>
//   </header>)
// }
// const handleSetAlert=(text) =>{
// alert(text)
// } 
// const [counter,setCounter]=useState(0)
//   return (
//     <div className="App">
//      <Props name="haneen" setAlert={handleSetAlert} counter={counter} setCounter={setCounter}  />
     
//       <Header /> 
//       <Login />
//       <Registration />
//     </div>
//   );
// }
// const obj={
//   name:"haneen" ,setAlert:handleSetAlert ,counter:counter ,setCounter:setCounter
//  }
//  Props(obj)
 


// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [mode, setMode] = useState("dark")//[read,write]

//   const handleModeChange = () => {
//     const newMode = (mode === "dark") ? "light" : "dark"
//     setMode(newMode)
//     alert(mode ) 
  
//   }

  
//   return (
//     <div className="App">
//       <header className={mode}>
//         {(mode === "dark") &&
//           <p>
//             show show show show
//             show show show show show
//             show show show show
//             show show show show show
//             show show show show show
//           </p>
//         }

//         {
//           (mode !== "dark") &&
//           <p >
//             light light light light light
//             light light light light light
//             light light light light light
//             light
//           </p>
//         }

//         <p className={(mode === "dark") ? 'show' : "hidden"}>
//           show show show show
//           show show show show show
//           show show show show
//           show show show show show
//           show show show show show
//         </p>

//         <p className={(mode === "dark") ? 'hidden' : "show"}>
//           light light light light light
//           light light light light light
//           light light light light light
//           light
//         </p>
//         <button onClick={handleModeChange}>{(mode === "dark") ? 'light' : "dark"}</button>
//       </header>
//     </div>
//   );
// }

// export default App;

/**
 * 
 * import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [isDark,setIsDark]=useState(false)
const handleModeChange=()=>{
  setIsDark(!isDark)
  
}
 
  return (
    <div className="App">
      <header className={isDark ? "Dark":"Light"}>
        <p>
          lorem lorem lorem lorem lorem 
          lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem
        </p>
        <button onClick={handleModeChange}>{isDark ? "Dark":"Light"}</button>  
      </header>
    </div>
  );
}

export default App;

 */