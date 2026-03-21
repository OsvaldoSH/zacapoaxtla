import express from "express";
import { getUsuarios } from "../controllers/usuarios.controller.js";
import { verificarToken } from "../middlewares/auth.middlewares.js";

const router = express.Router();
router.get("/", verificarToken, getUsuarios);

export default router;