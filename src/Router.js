import React from "react";
import { Switch, Route } from "react-router-dom";

import AppCars from "./components/AppCars";
import CarsPages from "./pages/CarsPages";

export default function Router(){

    return ( 
    <Switch>
        <Route exact path="/cars">
            <CarsPages />
        </Route>
        
    </Switch>
    )
}