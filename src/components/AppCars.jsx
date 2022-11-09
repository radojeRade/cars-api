import React from "react";
import { Link } from "react-router-dom";


export default function AppCars({id, brand, remove} ){
    
    return ( 
    <div>
        
        <h2> Car Brand is: {brand}</h2> 
        <Link to = {`/edit/${id}`}><button>Edit</button></Link>
        <button onClick={() => remove(id)}>Delete</button>  
    </div>
    )
}