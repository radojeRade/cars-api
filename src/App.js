// import React, { useEffect, useState } from 'react';
// import './App.css';
// import {Link} from 'react-router-dom';



// function App() {
//   const [load, setLoad] = useState();
 
// const token = localStorage.getItem("token");
  
// const removeUser=()=>{
//     localStorage.removeItem("token");
    
//   }

//   // useEffect( () => {
//   //   if(load === false){
//   //    token()
//   //   }
    
//   // }, [load]);
  
//   return (
//     <div className="App">
//      <nav>  
//           <Link to="/cars">Cars</Link><br></br>
//           <Link to="/add">Add car</Link><br></br>
//           {!token && 
//             <Link to = {`/register`}><button>Register</button></Link>

//           }
//           { (!token) ? 
//           <Link to = {`/login`}><button>Login</button></Link>:
//           <button onClick={removeUser}>Logout</button>
          
//         }
//      </nav>
     
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
