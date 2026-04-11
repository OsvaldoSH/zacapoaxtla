import "./TablaGenerica.css";

function TablaGenerica({
    columnas,
    datos,
    filaSeleccionada,
    onSeleccionarFila,
    mensajeVacio = "No hay registros",
}) {
    const formatearValor = (columna, valor) => {
        if (valor === null || valor === undefined) return "";

        if (columna.tipo === "moneda") {
            return new Intl.NumberFormat("es-MX", {
                style: "currency",
                currency: "MXN"
            }).format(valor);
        }

        if (columna.tipo === "fecha") {
            return new Date(valor).toLocaleDateString("es-MX");
        }
        return valor;
    };

    return (
        <div className="tabla-contenedor">
            <table className="tabla-generica">
                <thead>
                    <tr>
                        {columnas.map((columna) => (
                            <th key={columna.campo}>{columna.titulo}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {datos.length === 0 ? (
                        <tr>
                            <td colSpan={columnas.length} className="mensaje-vacio">{mensajeVacio}</td>
                        </tr>
                    ) : (datos.map((fila)=> {
                        const estaSeleccionada = filaSeleccionada?.id ===fila.id;

                        return (
                            <tr key={fila.id} onClick={() => onSeleccionarFila(fila)} style={{ cursor: "pointer", backgroundColor: estaSeleccionada ? "#f5e6a9" : "",}}>
                                {columnas.map((columna) => (
                                    <td key={columna.campo}>
                                        {formatearValor(columna, fila[columna.campo])}
                                    </td>
                                ))}
                            </tr>
                        );
                    })
                )}
                </tbody>
            </table>
        </div>
    );
}

export default TablaGenerica;