import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js"

function Registro() {
    const navigate = useNavigate();
    const ROLES = ["Administracion", "Bodega", "Sistemas"]

    const [form, setForm] = useState({
        nombre: "",
        usuario: "",
        contrasena: "",
        rol: "",
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
            const respuesta = await api.post("/auth/register", form);
            setMensaje(respuesta.data.mensaje || "Usuario registrado correctamente");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.error(error);
            setMensaje(error.response?.data?.mensaje || "Error al registrar")
        }
    };

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={form.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Usuario</label>
                    <input type="text" name="usuario" value={form.usuario}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Contrasena</label>
                    <input type="password" name="contrasena" value={form.contrasena}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <select name="rol" value={form.rol} onChange={handleChange} required>
                        <option value="">Selecciona un rol</option>
                        {ROLES.map((rol) => (
                            <option key={rol} value={rol}>
                                {rol}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Regitrar</button>
            </form>

            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default Registro;