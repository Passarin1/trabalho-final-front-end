import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import roteadorLogin from "./routes/login.js";
import roteadorUsuario from "./routes/usuarios.js";

dotenv.config();

const app = express();                        // Instancia o Express
const port = 3000;                            // Define a porta

app.use(cors()); // Middleware para CORS
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

app.use(roteadorUsuario);
app.use(roteadorLogin);

// Rota raiz
app.get("/", (req, res) => {
  console.log("Rota GET / solicitada");
  res.json({
    nome: "Trabalho Final - Backend", // Nome ajustado
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Serviço escutando na porta: ${port}`);
});