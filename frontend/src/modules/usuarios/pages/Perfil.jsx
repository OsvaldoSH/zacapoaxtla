import { useEffect, useState } from "react";
import api from "../../../api/axios";
import { obtenerToken, eliminarToken } from "../../auth/utils/auth";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerPerfil = async () => {
      try {
        const respuesta = await api.get("/auth/perfil");
        setUsuario(respuesta.data.usuario);
      } catch (error) {
        console.error(error);
        setMensaje("No se pudo cargar el perfil");
      }
    };

    obtenerPerfil();
  }, []);

  const cerrarSesion = () => {
    eliminarToken();
    navigate("/");
  };

  return (
    <div>
      <h1>Perfil</h1>

      {mensaje && <p>{mensaje}</p>}

      {usuario ? (
        <div>
          <h2>Bienvenido {usuario.usuario}</h2>
          <p>Rol: {usuario.rol}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}

      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
}

export default Perfil;