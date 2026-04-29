import { Outlet, Link } from "react-router-dom";
import Topbar from "../components/navigation/Topbar";
import { eliminarToken } from "../modules/auth/utils/auth";
import "./AdminLayout.css"

function AdminLayout() {
    const cerrarSesion = () => {
        eliminarToken();
        window.location.href = "/";
    };

    return (
        <div className="admin-container">
            <div className="desktop-only">
                <Topbar cerrarSesion={cerrarSesion} />
            </div>

            <main className="admin-contenido">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;