import { Outlet } from "react-router-dom";
import Header from "../components/Inicio/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
