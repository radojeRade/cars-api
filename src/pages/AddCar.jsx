import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import CarsService from '../Service/CarsService';
import { AddCarForm } from '../components/AddCarForm';

const years = (start = 1990, end = 2018) => {
    return Array.apply(0, Array(end - start + 1))
        .map((element, index) => index + start);
}
const engines = ['diesel', 'petrol', 'electric', 'hybrid'];

export default function AddCar() {
    const id  = useParams();
    //console.log(id);
    const history = useHistory()

    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        year: years[0],
        maxSpeed: 0,
        numberOfDoors: 0,
        isAutomatic: false,
        engine: '',
    });


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        //console.log(newCar)
        if(Object.keys(id).length > 0){ 
            try {
                const res = await CarsService.edit(Number(id.carId), newCar);
            console.log(res)
                
            } catch (error) {
                console.log(error.response.data)
            }
            
        } 
         try {
            const res = await CarsService.add(newCar);
            if(res.status === 201){
                history.push("/cars");
            }
            
         } catch (error) {
            console.log(error.response.data)
         }  
        
        
        
    };

    const hadleResetForm = () => {
        setNewCar({
            brand: '',
            model: '',
            year: years[0],
            maxSpeed: 0,
            numberOfDoors: 0,
            isAutomatic: false,
            engine: '',    
        })
    }

    const handlePreviewForm = () => {
        alert(`
        Brand: ${newCar.brand} \n
        Model: ${newCar.model} \n
        Year: ${newCar.year} \n
        Max speed: ${newCar.maxSpeed} \n
        Number of doors: ${newCar.numberOfDoors} \n
        Automatic: ${newCar.isAutomatic ? 'Yes' : 'No'} \n
        Engine: ${newCar.engine} \n
        `);
    };

    const getSingleCar = async () => {
        if (id) {
            const response = await CarsService.get(Number(id.carId));
           
            setNewCar({...response.data});
        }
    }

    useEffect(() => {
        if(Object.keys(id).length > 0){ 
            getSingleCar(Number(id.carId))
            //console.log('effect')
         }
    }, []);

    return (
        <div>
            <AddCarForm 
                newCar={newCar}
                setNewCar={setNewCar}
                years={years}
                engines={engines}
                onSubmit={handleOnSubmit}
                onReset={hadleResetForm}
                onPreview={handlePreviewForm}
            />
        </div>
    )
}