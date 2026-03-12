import pool from "../config/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({ error: "Faltan datos"});
    }

    try {
        const rows = await pool.query(
            "select * from usuarios where usuario = ?",
            [usuario]
        );

        const passwordValida = await bcrypt.compare(
            contrasena, rows[0].contrasena
        );

        if (rows.length === 0 || !passwordValida) {
            return res.status(401).json({ error: "Usuario o contrasena incorrecta"});
        }

        if (rows[0].estado !== "activo") {
            return res.status(401).json({ error: "Usuario no activo"});
        }

        const token = jwt.sign(
            {
                id: rows[0].id,
                usuario: rows[0].usuario,
                rol: rows[0].rol
            },
            process.env.JWT_SECRET,
            { expiresIn: "8h"}
        );

        res.json({
            mensaje: "Login correcto",
            token,
            usuario: {
                id: rows[0].id,
                nombre: rows[0].nombre,
                usuario: rows[0].usuario,
                rol: rows[0].rol,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

export const register = async (req, res) => {
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
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor"});
    }
    res.json({ mensaje: "Usuario registrado"});
};