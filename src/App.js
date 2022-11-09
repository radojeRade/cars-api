import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <nav>  
          <Link to="/cars">Cars</Link><br></br>
          <Link to="/add">Add car</Link><br></br>
      
     </nav>
     
    </div>
  );
}

export default App;
