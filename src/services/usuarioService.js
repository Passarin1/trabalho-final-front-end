import { insertUsuario, selectUsuarios, updateUsuario, deleteUsuario } from "../db/index.js";

async function criarUsuario(data) {
  // Validação de dados
  if (!data.nome || !data.email || !data.senha) {
    throw new Error("Os campos nome, email e senha são obrigatórios.");
  }
  return await insertUsuario(data);
}

async function listarUsuarios() {
  return await selectUsuarios();
}

async function atualizarUsuario(id, data) {
  return await updateUsuario(id, data);
}

async function removerUsuario(id) {
  return await deleteUsuario(id);
}

export { criarUsuario, listarUsuarios, atualizarUsuario, removerUsuario };