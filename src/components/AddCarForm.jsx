import React from "react";

export default function AppCarForm({handleBrand, handleModel, handleMaxSpeed,
        handleNumberOfDoors, handleIsAutomatic, handleYear, handleEngine, reset, preview,
         brand, model, engine, years, maxSpeed, isAutomatic, numberOfDoors, addingCar}){
    
    return ( 
        <div>
        <form onSubmit={addingCar}>
            <label>Brand:
                <input type='text'
                required
                minLength="2"
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
                required
                minLength="2"
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
                required
                value={numberOfDoors}
                onChange={(e) => {
                handleNumberOfDoors(e.target.value);
                }}
                />  
            </label>
            <label>
                Is Automatic:
                <input type="checkbox" required value={isAutomatic} checked={isAutomatic} onChange = {()=>handleIsAutomatic(isAutomatic)}/>Automatic
            </label>
           
            <fieldset>
                <legend>
                    Choose Your Engine:
                </legend>
                <label>
                    Diesel
                <input type="radio" required value='diesel' checked={engine === 'diesel'} onChange={()=>handleEngine('diesel')} />
                </label>
                <label>
                    Petrol
                    <input type="radio" required value='petrol' checked={engine === 'petrol'} onChange={()=>handleEngine('petrol')} />
                </label>
                <label>
                    Hybrid
                    <input type="radio" required value='hybrid' checked={engine === 'hybrid'} onChange={()=>handleEngine('hybrid')} />
                </label>
                
            </fieldset>
            <select required onChange={(e) => handleYear(e.target.value)}  >
                    <option >Please Choose...</option>  
                    {years().map((year, index) => (
                    
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
            
            <button>Submit</button>
            
        </form>
        <button onClick = {() => reset()}>Reset</button>
        <button onClick = {() => preview()}>Preview</button>
        </div>
    )
}