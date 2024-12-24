import React from "react";

import "../Styles/login.css";
import { Routes, Route, useNavigate, Router } from "react-router";
import Home from "./Home";

const Login = () => {
  const navigate = useNavigate();
  const validCredentials = {
    email: "netrix@gmail.com",
    password: "mario1",
  };

  const onSubmitForm = (formData, e) => {
    // e.preventDefault();
    navigate("/Home");

    // let formTrueData = [];
    // const formFieldsEntries = Object.entries(formData.target);

    // formFieldsEntries.forEach((item) => {
    //   formTrueData.push(item[1].value);
    // });

    // if (
    //   formTrueData[0] === validCredentials.email &&
    //   formTrueData[1] === validCredentials.password
    // ) {
    //   // alert("De verdad te loggeaste");
    //   navigate("/Home");
    // } else {
    //   event.preventDefault();
    //   alert("Credenciales invalidas");
    // }
  };

  return (
    <div id="loginCard" className="loginCard">

      <h3>Esto es un login</h3>
      <p>Ingresa tus credenciales para iniciar sesión</p>
      <form onSubmit={onSubmitForm}>
        <input name="email" type="email" placeholder="e-mail" />
        <input name="pass" type="password" placeholder="password" />
        <input
          className="inputButton"
          name="submit"
          type="submit"
          value="Gooo"
        />
      </form>
      {/* <Routes>
        <Route element={<Home />} path="/Home" />
      </Routes> */}
    </div>
  );
};

export default Login;
