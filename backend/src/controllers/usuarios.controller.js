import pool from "../config/db.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
    const { nombre, usuario, contrasena, rol} = req.body;

    if (!nombre || !usuario || !contrasena || !rol ) {
        return res.status(400).json({ error: "Faltan datos"})
    }

    try {
        const passwordHash = await bcrypt.hash(contrasena, 10);
        await pool.query(
            `insert into usuarios(nombre, usuario, contrasena, rol)
                values (?,?,?,?)`,
            [nombre, usuario, passwordHash, rol]
        );
        
        res.status(201).json({ mensaje:"Usuario registrado"})
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor"});
    }
};

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
