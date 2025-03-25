import express from "express";
import { insertRotina, selectRotinas, updateRotina, deleteRotina } from "../db/index.js";
import verificarAutenticacao from "../middlewares/autenticacao.js";

const router = express.Router();

router.post("/rotinas", verificarAutenticacao, async (req, res) => {
  try {
    const rotina = await insertRotina(req.body);
    res.status(201).json(rotina);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/rotinas", verificarAutenticacao, async (req, res) => {
  try {
    const rotinas = await selectRotinas();
    res.status(200).json(rotinas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/rotinas/:id", verificarAutenticacao, async (req, res) => {
  try {
    await updateRotina(req.params.id, req.body);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/rotinas/:id", verificarAutenticacao, async (req, res) => {
  try {
    await deleteRotina(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
