import React from "react";

export default function AppCarForm({handleBrand, handleModel, handleMaxSpeed,
        handleNumberOfDoors, handleIsAutomatic, handleYear, handleEngine, reset,
         brand, model, engine, years, maxSpeed, isAutomatic, numberOfDoors, addingCar}){
    
    return ( 
        <div>
        <form onSubmit={addingCar}>
            <label>Brand:
                <input type='text'
                value={brand}
                onChange={(e) => {
                handleBrand(e.target.value);
                }}
                />
            </label>
            <label>
                Model:
                <input
                type='text'
                value={model}
                onChange={(e) => {
                handleModel(e.target.value);
                }}
                />  
            </label>
            <label>
                Max speed:
                <input
                type='number'
                value={maxSpeed}
                onChange={(e) => {
                handleMaxSpeed(e.target.value);
                }}
                />  
            </label>
            <label>
                Number of doors:
                <input
                type='number'
                value={numberOfDoors}
                onChange={(e) => {
                handleNumberOfDoors(e.target.value);
                }}
                />  
            </label>
            <label>
                Is Automatic:
                <input type="checkbox" value={isAutomatic} checked={isAutomatic} onChange = {()=>handleIsAutomatic(isAutomatic)}/>Automatic
            </label>
           
            <fieldset>
                <legend>
                    Choose Your Engine:
                </legend>
                <label>
                    Diesel
                <input type="radio" value='diesel' checked={engine === 'diesel'} onChange={()=>handleEngine('diesel')} />
                </label>
                <label>
                    Petrol
                    <input type="radio" value='petrol' checked={engine === 'petrol'} onChange={()=>handleEngine('petrol')} />
                </label>
                <label>
                    Hybrid
                    <input type="radio" value='hybrid' checked={engine === 'hybrid'} onChange={()=>handleEngine('hybrid')} />
                </label>
                
            </fieldset>
            <select  onChange={(e) => handleYear(e.target.value)}  >
                    <option >Please Choose...</option>  
                    {years().map((year, index) => (
                    
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
      
            <button>Submit</button>
            
        </form>
        <button onClick = {() => reset()}>Reset</button>
        </div>
    )
}