import express from "express";
import { crearUsuario, getUsuarios } from "../controllers/usuarios.controller.js";
import { verificarToken } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/", verificarToken, getUsuarios);

router.post("/", verificarToken, crearUsuario);

export default router;