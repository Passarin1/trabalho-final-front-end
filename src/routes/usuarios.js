import express from "express";
import { criarUsuario, listarUsuarios, atualizarUsuario, removerUsuario } from "../services/usuarioService.js";
import verificarAutenticacao from "../middlewares/autenticacao.js";

const router = express.Router();

router.post("/usuarios", async (req, res) => {
  try {
    const usuario = await criarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/usuarios", verificarAutenticacao, async (req, res) => {
  try {
    const usuarios = await listarUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/usuarios/:id", verificarAutenticacao, async (req, res) => {
  try {
    await atualizarUsuario(req.params.id, req.body);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/usuarios/:id", verificarAutenticacao, async (req, res) => {
  try {
    await removerUsuario(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
