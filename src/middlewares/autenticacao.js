import jwt from "jsonwebtoken";

function verificarAutenticacao(req, res, next) {
  const token = req.headers["x-access-token"];
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (!process.env.SECRET) {
      return res.status(500).json({ message: "Chave SECRET não configurada no .env" }).end();
    }
    if (err)
      return res.status(401).json({ message: "Usuário não Autenticado" }).end();
    req.userId = decoded.user;
    next();
  });
}

export default verificarAutenticacao;