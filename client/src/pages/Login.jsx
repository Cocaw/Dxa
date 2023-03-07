import React from "react";
import LoginForm from "../components/Formularios/LoginForm";
function IniciodeSesion() {
  return (
    <div className="contenedor-3">
      <h1 className=" text-white uppercase font-bold text-2xl">   
        Inicia <span className="text-purple-500">Sesion</span>
      </h1>
      <p>Para utilizar el CRM</p>

      <LoginForm />
    </div>
  );
}

export default IniciodeSesion;
