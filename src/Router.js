// import React from "react";
// import { Switch, Route } from "react-router-dom";

// import AddCar from './pages/AddCar';
// import CarsPages from "./pages/CarsPages";
// import LoginPages from "./pages/LoginPages";
// import RegisterPages from "./pages/RegisterPages";

// export default function Router(){

//     return ( 
//     <Switch>
//         <Route exact path="/login">
//             <LoginPages />
//         </Route>
//         <Route exact path="/register">
//             <RegisterPages />
//         </Route>
        
//         <Route exact path="/cars">
//             <CarsPages />
//         </Route>
//         <Route exact path="/add">
//             <AddCar />
//         </Route>
//         <Route exact path="/edit/:carId">
//             <AddCar />
//         </Route>  
//     </Switch>
//     )
// }

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import LoginPage from "./pages/LoginPages";
import RegisterPage from "./pages/RegisterPages";
import UsersListPage from "./pages/UsersList";
import AddCar from "./pages/AddCar";
import CarsPage from "./pages/CarsPages";

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route {...rest}>{user.name ? children : <Redirect to="/login" />}</Route>
  );
};

const GuestRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route {...rest}>{user.name ? <Redirect to="/cars" /> : children}</Route>
  );
};

export default function Router() {
  return (
    <Switch>
      <GuestRoute path="/login">
        <LoginPage />
      </GuestRoute>
      <GuestRoute path="/register">
        <RegisterPage />
      </GuestRoute>
      <AuthRoute path="/users">
        <UsersListPage />
      </AuthRoute>
      <GuestRoute path="/cars">
        <CarsPage />
      </GuestRoute>
      <GuestRoute path="/cars/:id">
        <AddCar/>
      </GuestRoute>
      <GuestRoute path="/addCars">
        <LoginPage />
      </GuestRoute>
      <GuestRoute path="/edit/:id">
        <LoginPage />
      </GuestRoute>
    </Switch>
  );
}

