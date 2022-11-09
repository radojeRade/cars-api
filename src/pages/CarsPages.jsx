import React, { useState, useEffect } from "react";
import AppCars from "../components/AppCars";

import CarsService from "../Service/CarsService";


export default function CarsPages() {
  const [cars, setCars] = useState();

  const getAllCars = async () => {
    const cars = await CarsService.getAll('/cars');
    setCars(cars);
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div>
      <ul>
      <li>
        {cars && cars.map((car) =>
          
            <AppCars  key={car.id}
                      id = {car.id}
                      brand={car.brand} />
            
            )}
            </li>
        
      </ul>
    </div>
  );
}