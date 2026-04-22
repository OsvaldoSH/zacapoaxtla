import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api.js";
import  { guardarToken, obtenerUsuario } from "../utils/auth.js";
import "./login.css"

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        usuario: "",
        contrasena: "",
    });

    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await api.post("/auth/login", form);
            guardarToken(respuesta.data.token);
            const usuario = obtenerUsuario();
            
            if (usuario?.rol === "Sistemas") {
                navigate("/admin");
            } else {
                navigate("/perfil");
            }

        } catch (error){
            console.error(error);
            setMensaje("Error al iniciar sesion");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">LOGIN</h2>

                <form onSubmit={handleSubmit} className="login-form">

                    <input
                        type="text"
                        name="usuario"
                        placeholder="usuario"
                        value={form.usuario}
                        onChange={handleChange}
                    />

                    <input 
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                        value={form.contrasena}
                        onChange={handleChange}
                    />

                    <button type="submit">LOGIN</button>
                </form>
                {mensaje && <p className="login-error">{mensaje}</p>}
            </div>
        </div>
    );
}
export default Login;