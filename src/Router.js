import React from "react";
import { Switch, Route } from "react-router-dom";

import AddCar from './pages/AddCar';
import CarsPages from "./pages/CarsPages";

export default function Router(){

    return ( 
    <Switch>
        <Route exact path="/cars">
            <CarsPages />
        </Route>
        <Route  path="/add">
            <AddCar />
        </Route>
        
    </Switch>
    )
}