import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Perfil from "../pages/Perfil";
import Rutaprotegida from "../security/RutaProtejida";

function AppRutas() {
    return (
        <Routes>
            <Route path="/perfil" element={<Rutaprotegida><Perfil /></Rutaprotegida>}/>
            <Route path="/" element={<Login />}/>
            <Route path="/registro" element={<Registro/>}/>
        </Routes>
    );
}

export default AppRutas;