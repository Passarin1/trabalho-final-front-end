import { insertUsuario } from "../src/db/index.js";
import { criarUsuario } from "../src/services/usuarioService.js";

jest.mock("../src/db/index.js");

test("Deve lançar erro ao criar usuário sem nome", async () => {
  const data = { email: "teste@email.com", senha: "123456" };
  await expect(criarUsuario(data)).rejects.toThrow("Os campos nome, email e senha são obrigatórios.");
});

test("Deve criar usuário com sucesso", async () => {
  const data = { nome: "Teste", email: "teste@email.com", senha: "123456" };
  insertUsuario.mockResolvedValue({ id: 1 });
  const result = await criarUsuario(data);
  expect(result).toEqual({ id: 1 });
});
