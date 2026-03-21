import { Routes, Route } from "react-router-dom";
import Login from "../modules/auth/pages/Login";
import Perfil from "../modules/usuarios/pages/Perfil";
import Rutaprotegida from "./RutaProtejida";
import ListarEmpleados from "../modules/empleados/pages/ListaEmpleados";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../modules/admin/pages/Dashboard";

function AppRutas() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/perfil" element={<Rutaprotegida><Perfil /></Rutaprotegida>}/>
            <Route path="/admin" element={<Rutaprotegida rolPermitido="Sistemas"><AdminLayout/></Rutaprotegida>}> 
                <Route index element={<Dashboard />} />
                <Route path="empleados" element={<ListarEmpleados />} />
            </Route>
        </Routes>
    );
}

export default AppRutas;