import express from "express";
import jwt from "jsonwebtoken";
import { selectUsuarios } from "../db/index.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuarios = await selectUsuarios();
    const usuario = usuarios.find((u) => u.email === email && u.senha === senha);
    if (!usuario) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }
    const token = jwt.sign({ user: usuario.id }, process.env.SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
