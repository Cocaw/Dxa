import React, { useState } from 'react';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
   
    // envía los datos del formulario al servidor
    const res = await fetch('/api/auth/LoginForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    // si la respuesta es exitosa, almacena el token en localstorage
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      setFormData({
        email: '',
        password: ''
      });
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label className="text-gray-20d block hover:text-white transition-all">Correo Electrónico</label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label className="text-gray-20d block hover:text-white transition-all">Contraseña</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button className='mt-10 mb-4 md:mb-0 md:mr-6 inline-flex items-center justify-center front-bold no-underline focus:outline-none focus:rising-2 focus:ring-offet-2 focus:ring-offset-transparent transition-colors duration-200 px-5 py-3 lg:px-6 bg-blue-500 hover:bg-blue-600 border-2 border-blue-500 hover:border-blue-700 focus:ring-blue-500 focus:ring-opacity-60 text-white hover:text-white text-xl rounded'>
        ingresar  </button> 
      </form>
    </div>
  );
};

export default LoginForm;
