import "./TablaGenerica.css";

function TablaGenerica({
    columnas,
    datos,
    filaSeleccionada,
    onSeleccionarFila,
    acciones = [],
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
                        {acciones.length > 0 && (
                            <th className="columna-accion"></th>
                        )}
                    </tr>
                </thead>

                <tbody>
                    {datos.length === 0 ? (
                        <tr>
                            <td colSpan={columnas.length + (acciones.length > 0 ? 1 : 0)} className="mensaje-vacio">{mensajeVacio}</td>
                        </tr>
                    ) : (datos.map((fila)=> {
                        const estaSeleccionada = filaSeleccionada?.id ===fila.id;

                        return (
                            <tr 
                                key={fila.id} 
                                onClick={() => onSeleccionarFila(fila)} 
                                className={estaSeleccionada ? "fila-seleccionada" : ""}
                                style={{ cursor: "pointer" }}
                            >
                                {columnas.map((columna) => (
                                    <td key={columna.campo}>
                                        {formatearValor(columna, fila[columna.campo])}
                                    </td>
                                ))}

                                {acciones.length > 0 && (
                                    <td className="celda-accion">
                                        {estaSeleccionada && 
                                            acciones.map((accion) => (
                                                <button
                                                    key={accion.nombre}
                                                    type="button"
                                                    className="btn-icono-accion"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        accion.onClick(fila);
                                                    }}
                                                >{accion.icono}</button>
                                            ))
                                        }
                                    </td>
                                )}
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