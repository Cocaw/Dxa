import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <header className="header">
      <div className="header__contenedor">
      <nav className="navegacion">

        <Link
          to="/"
          className="text-white uppercase font-bold text-2xl text-center"
        >
          <span className="text-purple-600">CRM - </span>
          Clientes

          
        </Link>


          
          <Link

            className={`${urlActual === "/"
              ? "text-gray-200 font-bold blockhover:text-white transition-all"
              : "text-gray-20d block hover:text-white transition-all"
              }`}
            to="/register"

          >


          </Link>


          <Link

            className={`${urlActual === "/Iniciar Sesion"
              ? "text-gray-200 font-bold blockhover:text-white transition-all"
              : "text-gray-20d block hover:text-white transition-all"
              }`}
            to="/login"

          >

            Iniciar Sesion

          </Link>


          <Link
            className={`${urlActual === "/clientes"
              ? "text-gray-200 font-bold blockhover:text-white transition-all"
              : "text-gray-20d block hover:text-white transition-all"
              }`}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className={`${urlActual === "/clientes/nuevo"
              ? "text-gray-200  font-bold block hover:text-white transition-all"
              : "text-gray-200d block hover:text-white transition-all"
              }`}
            to="/clientes/nuevo"
          >
            Nuevo Clientes
          </Link>
          <Link
            className={`${urlActual === "/clientes/search"
              ? "text-gray-200 font-bold block hover:text-white transition-all"
              : "text-gray-20d block hover:text-white transition-all"
              }`}
            to="/clientes/search"
          >
            Buscar Cliente
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
