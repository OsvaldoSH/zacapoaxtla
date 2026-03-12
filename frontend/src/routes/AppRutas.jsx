import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Perfil from "../pages/Perfil";

function AppRutas() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
    );
}

export default AppRutas;