import React from "react";
import { authService } from "../Service/AuthService";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RegisterPages() {
  const{register} = useAuth();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const history = useHistory();

  const handleOnRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await register(user);
      // if (res.status === "success") {
      //   history.push("/login");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <RegisterForm user={user} setUser={setUser} handleOnRegister={handleOnRegister} />
    </div>
  );
}
