import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { searchCars } from "../store/cars/slice";
import { searchingCars } from "../store/cars/selectors";

export default function Navbar() {
  const { user, logout } = useAuth();
  const history = useHistory();

  // const searchedCars = useSelector(searchingCars);
  const dispatch = useDispatch();

  
  const handleLogout = async() => {
    await logout();
    history.push('/login');

  }
  return (
    <nav>
      <ul>
        {!user.email && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!user.email && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        <li>
          <Link to="/users">Users list</Link>
        </li>
        {user.email && (
        <li>
          <Link to="/cars">Cars list</Link>
        </li>
        )}
        {user.email && (
        <li>
          <Link to="/addCars">Add Cars</Link>
        </li>
        )}
        {user.email && (
        <li>
          <Link to="/cars/:id">Single Car</Link>
        </li>
        )}
        <li>
          <Link to="/edit/:id">Edit Car</Link>
        </li>
        {user.email && (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
        )}
      </ul>
      <label>Search Car by brand:</label>
              <input 
             
                type="text" 
                 
                onChange={({target}) => 
                dispatch(searchCars(target.value))}
                  // setNewCar({...newCar, brand: target.value})}
              />
    </nav>
  );
}