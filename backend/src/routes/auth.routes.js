import express from "express";
import { login } from "../controllers/auth.controller.js"
import { verificarToken } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/login", login);

router.get("/perfil", verificarToken, (req, res) => {
    res.json({
        mensaje: "Acceso permitido",
        usuario: req.usuario
    });
});


export default router;