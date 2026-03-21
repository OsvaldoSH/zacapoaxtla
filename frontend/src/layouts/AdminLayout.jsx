import { Outlet, Link } from "react-router-dom";
import { eliminarToken } from "../modules/auth/utils/auth";

function AdminLayout() {
    const cerrarSesion = () => {
        eliminarToken();
        window.location.href = "/";
    };

    return (
        <div>
            <h1>Panel de administracion</h1>

            <nav>
                <Link to="/admin">Dashboard</Link>
                {" | "}
                <Link to="/admin/empleados">Empleados</Link>
                {" | "}
                <button onClick={cerrarSesion}>Cerrar sesion</button>
            </nav>

            <hr/>

            <Outlet />
        </div>
    );
}

export default AdminLayout;