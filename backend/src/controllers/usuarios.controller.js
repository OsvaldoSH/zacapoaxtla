import pool from "../config/db.js"

export const getUsuarios = async (req, res) => {
    try {
        const rows = await pool.query(
            "SELECT id, nombre, usuario, rol, estado, fecha_registro FROM usuarios"
        );

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al obtener informacion de usuarios"});
    }
};

