import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppCars from "../components/AppCars";

import CarsService from "../Service/CarsService";
import { /* selectCars,  */searchingCars, selectPageCars, selectedCarsCounterSelector, page } from '../store/cars/selectors';
import { setCars, selectedCarsAction, selectAllCarsAction, deselectAllCarsAction, changePage} from "../store/cars/slice";


export default function CarsPages() {
  const selectedCarsNumber = useSelector(selectedCarsCounterSelector);
  // const allCars = useSelector(selectCars);
  const searchedCars = useSelector(searchingCars);
  const pageCars = useSelector(selectPageCars);
  const pageObj = useSelector(page);
  const dispatch = useDispatch();
  
  // const [cars, setCars] = useState();
  

  const getAllCars = async () => {
    const cars = await CarsService.getAll('/cars');
    dispatch(setCars(cars));
  };

  const selectCar = (id) => {
    dispatch(selectedCarsAction(id));
  }

  const numberOfPages = Array(Math.ceil(searchedCars.length / pageObj.itemPerPage)).fill(null).map((e, i) => i + 1);
  // for (let i = 1; i <= Math.ceil(pageCars.length / pageObj.itemPerPage); i++) {
  //   numberOfPages.push(i);
  // }

  // const remove = async(id) => {
  //   //e.preventDefault();
  //   console.log(id);
  //   const res = await CarsService.delete(id);
  //   // if(res.status === 200){
      
  //   // }

  // }

  useEffect(() => {
    getAllCars();


  }, []);

  return (
    <div>
      <h3>Number of selected cars: {selectedCarsNumber}</h3>
      <button onClick={() => dispatch(selectAllCarsAction())}>Select All</button>
      <button onClick={() =>dispatch(deselectAllCarsAction())}>Deselect All</button>
      <ul>
     
        {pageCars && pageCars.map((car) =>
           <li key={car.id}>
            <AppCars  car={car} 
                      select={selectCar}
                      // remove={remove} 
                      />
            </li>
        
            )}
            
      </ul>
      {numberOfPages.map((number) => (
               <button key={number} onClick={() => dispatch(changePage(number))}>
                  {number}
               </button>
            ))}
    </div>
  );
}