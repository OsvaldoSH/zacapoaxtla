import { Outlet, Link } from "react-router-dom";
import { eliminarToken } from "../modules/auth/utils/auth";
import "./AdminLayout.css"

function AdminLayout() {
    const cerrarSesion = () => {
        eliminarToken();
        window.location.href = "/";
    };

    return (
        <div className="admin-container">
            
            <header className="admin-header">
                <div className="logo">Admin</div>

                <nav className="menu">
                    <Link to="/admin">Dashboard</Link>
                    <Link to="/admin/empleados">Empleados</Link>
                </nav>

                <div className="user">
                    <button onClick={cerrarSesion}>Salir</button>
                </div>
            </header>

            <main className="admin-contenido">
                <Outlet />
            </main>

        </div>
    );
}

export default AdminLayout;