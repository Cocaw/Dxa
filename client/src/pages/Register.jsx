import React from "react";
import RegisterForm from "../components/Formularios/RegisterForm";
function CreateunaCuenta() {
  return (
    <div className="contenedor-3">
      <h1 className=" text-white uppercase font-bold text-2xl">
        
        Inicia <span className="text-purple-500">Sesion</span>
      </h1>
      <p>Para utilizar el CRM</p>

      <RegisterForm />
    </div>
  );
}

export default CreateunaCuenta;
