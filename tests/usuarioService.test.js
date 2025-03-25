import { criarUsuario } from "../src/services/usuarioService.js";

test("Deve lançar erro ao criar usuário sem nome", async () => {
  const data = { email: "teste@email.com", senha: "123456" };
  await expect(criarUsuario(data)).rejects.toThrow("Os campos nome, email e senha são obrigatórios.");
});
