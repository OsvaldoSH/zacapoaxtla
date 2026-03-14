import express from "express";
import pool from "./config/db.js"
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = 3000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

pool.getConnection()
    .then(conn => {
        console.log("Conectado a MariaDB");
        conn.release();
    })
    .catch(err => {
        console.error("Error de conexion:", err);
    })

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})

