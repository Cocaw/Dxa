import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function RegisterForm({ usuario }) {
  const navigate = useNavigate();
  const nuevousuarioShema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El nombre del usuario es obligatorio"),
    empresa: Yup.string().required("El nombre de la empresa es obligatorio"),
    email: Yup.string()
      .email("El email es invalido")
      .required("El email es obligatorio"),
    telefono: Yup.number()
      .integer("Numero no valido")
      .positive("El telefono debe ser mayor que 0")
      .typeError("El telefono no es valido"),
  });

 const handleSubmit = (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);

  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  // Make an asynchronous request to the backend api to register a new user with the provided data
  fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response when complete
    });
};


  return (
    <div className="bg-zinc-900 mt-10 px-5 py-10 rounded-lg shadow-md">
      <h2 className="text-white font-white font-bold uppercase text-2xl text-center">
        {usuario.id ? "Editar usuario" : "Nuevo Usuario"}
      </h2>
      <Formik
        initialValues={{
          nombre: usuario?.nombre ?? "",
          empresa: usuario?.empresa ?? "",
          email: usuario?.email ?? "",
          telefono: usuario?.telefono ?? "",
          notas: usuario?.notas ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={nuevousuarioShema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10 text-left">
              <div className="mb-4">
                <label htmlFor="nombre" className="text-white">
                  Nombre:
                </label>
                <Field
                  className="mt-2 block w-full p-2 text-zinc-800 rounded-md"
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                />
                {errors.nombre && touched.nombre ? (
                  <div className="bg-red-600 mt-2 p-1 text-center text-sm text-white">
                    <ErrorMessage name="nombre" />
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="empresa" className="text-white">
                  Empresa:
                </label>
                <Field
                  className="mt-2 block w-full p-2 text-zinc-800 rounded-md"
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Empresa"
                />
                {errors.empresa && touched.empresa ? (
                  <div className="bg-red-600 mt-2 p-1 text-center text-sm text-white">
                    <ErrorMessage name="empresa" />
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-white">
                  E-mail:
                </label>
                <Field
                  className="mt-2 block w-full p-2 text-zinc-800 rounded-md"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <div className="bg-red-600 mt-2 p-1 text-center text-sm text-white">
                    <ErrorMessage name="email" />
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="telefono" className="text-white">
                  telefono:
                </label>
                <Field
                  className="mt-2 block w-full p-2 text-zinc-800 rounded-md"
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Telefono"
                />
                {errors.telefono && touched.telefono ? (
                  <div className="bg-red-600 mt-2 p-1 text-center text-sm text-white">
                    <ErrorMessage name="telefono" />
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="notas" className="text-white">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  className="mt-2 block w-full h-20 p-2 text-zinc-800 rounded-md"
                  id="notas"
                  name="notas"
                  type="text"
                  placeholder="Notas"
                />
              </div>
              <input
                className="w-full cursor-pointer mt-10 mb-4 md:mb-0 md:mr-6 inline-flex items-center justify-center font-bold no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-colors duration-200 px-5 py-3 lg:px-6 bg-blue-500 hover:bg-blue-600 border-2 border-blue-500 hover:border-blue-700 focus:ring-blue-500 focus:ring-opacity-60 text-white hover:text-white text-xl rounded"
                type="submit"
                value={usuario.id ? "Guardar Cambios" : "Nuevo Usuario"}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

RegisterForm.defaultProps = {
  usuario: {},
};

export default RegisterForm;
