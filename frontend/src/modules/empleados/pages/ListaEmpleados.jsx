import { useEffect, useState } from "react";
import { obtenerEmpleados } from "../services/empleados.api";

function ListarEmpleados() {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        const cargar = async () => {
            const data = await obtenerEmpleados();
            setEmpleados(data);
        };

        cargar();
    }, []);

    return (
        <div>
            <h2>Lista de empleados</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Registro</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.nombre}</td>
                            <td>{emp.usuario}</td>
                            <td>{emp.rol}</td>
                            <td>{emp.estado}</td>
                            <td>{new Date(emp.fecha_registro).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarEmpleados;