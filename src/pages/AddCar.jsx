import React, {useCallback, useState} from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AddCarForm from "../components/AddCarForm";
import CarsService from "../Service/CarsService";


export default function AddCar(){

    const history = useHistory();

    const carId = useParams();

    const [obj, setObj] = useState({brand:"", model:"", maxSpeed: 0, year: 0, 
                                    isAutomatic: false,
                                    engine: "", numberOfDoors: 0});
    
    
    //api calls

    const getCar =  async () => {
        let id = Number(carId.carId);
        const res = await CarsService.get(id)
        .then((result) => {       //malo sam se poigrao sa then i catch uz async i await
            if (result.status === 200){
                return result.data;
            }
        }).catch(e => console.log(e));

        setObj({...res});
        

    };

    useEffect(() => { 
        if(Object.keys(carId).length > 0){ 
            getCar();
        }
        
    }, []);

    const edit = async (e) => {
        e.preventDefault(); //mora da bi radio history
        let id = Number(carId.carId);
        const response = await CarsService.edit(id, obj);
        console.log(response);
        if(response.status === 200){
            history.push('/cars');
        }
    }

    const addingCar = async () => {
        //e.preventDefault();
        const response = await CarsService.add( obj);

        console.log(response);
        if(response.status === 200){
            history.push('/cars');
        }
    }
    
    //form methods
    const handleModel = (model1) => {
            setObj({ ...obj, model: model1});
    }
    
    const handleBrand = (brand1) =>{
        setObj({ ...obj, brand: brand1});
    }
    const handleMaxSpeed = (maxSpeed1) => {
        setObj({ ...obj, maxSpeed: Number(maxSpeed1)});
    }
    //pravi niz
    const years = (start = 1990, end = 2018) => {
        return Array.apply(0, Array(end - start + 1))
            .map((element, index) => index + start);
    }
    const handleYears= (years1) => {
        console.log(years1);
        setObj({ ...obj, year: years1});
    }
    const handleIsAutomatic = (isAutomatic1) => {
        console.log(isAutomatic1)
        setObj({ ...obj, isAutomatic: !isAutomatic1});
    }
    const handleEngine= (engine1) => {
        console.log(engine1)
        setObj({ ...obj, engine: engine1});
    }
    const handleNumberOfDoors = (numOfDoors) => {
        setObj({ ...obj, numberOfDoors: Number(numOfDoors)}); 
    }
    //buttons
    const reset = () => {
        setObj({brand:"", model:"", maxSpeed: 0,  
        isAutomatic: false,
        engine: "", numberOfDoors: 0});
    }
    const preview = () => {
        alert(JSON.stringify(obj));
    }

    return ( 
    <div>
        <h1>Add or Edit Car</h1>
        <div>
       
                <AddCarForm handleBrand = {handleBrand}
                              handleModel = {handleModel}
                              handleMaxSpeed = {handleMaxSpeed}
                              handleNumberOfDoors = {handleNumberOfDoors}
                              handleIsAutomatic = {handleIsAutomatic}
                              handleYear = {handleYears}
                              handleEngine = {handleEngine}
                              brand = {obj.brand}
                              model = {obj.model}
                              engine = {obj.engine}
                              years = {years}
                              maxSpeed = {obj.maxSpeed}
                              isAutomatic = {obj.isAutomatic}
                              numberOfDoors = {obj.numberOfDoors}
                              addingCar = {addingCar}
                              edit = {edit}
                              reset = {reset}
                              preview = {preview}/>
           
        </div>
    </div>
    )  
}