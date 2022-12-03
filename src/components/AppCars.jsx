import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchingCars, selectedCars, selectedCarsCounterSelector } from '../store/cars/selectors';


export default function AppCars({car, select} ){

    // const selectedCarsNumber = useSelector(selectedCarsCounterSelector);
    const selectedCarsStore = useSelector(selectedCars);
    // const dispatch = useDispatch();
    
    return ( 
        <div style={{border: "1px solid " + (selectedCarsStore.includes(car.id) ? "red" : 'white')}}>
            
            <h2> Car Brand is: {car.brand}</h2> 
            <h2> Car Model is: {car.model}</h2> 
            <h2> Car Engine is: {car.engine}</h2> 
            <h2> Car Max Speed is: {car.maxSpeed}</h2> 
            <Link to = {`/edit/${car.id}`}><button>Edit</button></Link>
            <button onClick={()=>select(car.id)}>Select</button>
            {/* <button onClick={() => remove(car.id)}>Delete</button>   */}
        </div>
    )
}