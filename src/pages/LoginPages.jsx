import React from "react";
import { authService } from "../Service/AuthService";
import Form from "../components/LoginForm";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function LoginPages() {
  const {login} = useAuth();
  const [user1, setUser1] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleOnLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(user1);
      // if (res.status === "success") {
      //   history.push("/cars");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form user={user1} setUser={setUser1} handleOnLogin={handleOnLogin} />
    </div>
  );
}
