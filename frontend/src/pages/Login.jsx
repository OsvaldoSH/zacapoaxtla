import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import  { guardarToken } from "../utils/auth.js";

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
            setMensaje("Login correcto");
            navigate("/perfil");
        } catch (error){
            console.error(error);
            setMensaje("Error al iniciar sesion");
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario</label>
                    <input
                        type="text"
                        name="usuario"
                        value={form.usuario}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Contrasena</label>
                    <input
                        type="password"
         
               name="contrasena"
                        value={form.contrasena}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Iniciar sesion</button>
            </form>

            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}
export default Login;