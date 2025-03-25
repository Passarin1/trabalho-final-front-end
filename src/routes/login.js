import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routerUsuarios from "./routes/usuarios.js";
import routerRotinas from "./routes/rotinas.js";
import authRouter from "./routes/auth.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routerUsuarios);
app.use("/api", routerRotinas);
app.use("/api", authRouter);

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "API de Cuidados com a Pele.",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta: ${port}`);
});