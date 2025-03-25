import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_DB,
  });
  return pool.connect();
}

// CRUD para usuários
async function insertUsuario(data) {
  const client = await connect();
  const query = "INSERT INTO usuario (email, senha) VALUES ($1, $2)";
  const values = [data.email, data.senha];
  const res = await client.query(query, values);
  client.release();
  return res.rows[0];
}
async function autenticarUsuario(email, senha) {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE email = $1 AND senha = $2";
  const usuario = [email, senha];
  const res = await client.query(query, usuario);
  return res.rows[0];
}


async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  client.release();
  return res.rows;
}

async function selectUsuario(id) {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario WHERE id = $1", [id]);
  client.release();
  return res.rows;
}

async function updateUsuario(data) {
  const client = await connect();
  const query = `UPDATE usuario SET nome = $1, email = $2, senha = $3, tipo_de_pele = $4, horario = $5 
                 WHERE id = $6`;
  const values = [data.nome, data.email, data.senha, data.tipo_de_pele, data.horario, data.id];
  await client.query(query, values);
  client.release();
}

async function deleteUsuario(id) {
  const client = await connect();
  await client.query("DELETE FROM usuario WHERE id = $1", [id]);
  client.release();
}

// CRUD para rotinas
async function insertRotina(data) {
  const client = await connect();
  const query = `INSERT INTO rotina (tipo_de_pele, passos, rotina_id, usuario_id) 
                 VALUES ($1, $2, $3, $4) RETURNING id`;
  const values = [data.tipo_de_pele, data.passos, data.rotina_id, data.usuario_id];
  const res = await client.query(query, values);
  client.release();
  return res.rows[0];
}

async function selectRotinas() {
  const client = await connect();
  const res = await client.query("SELECT * FROM rotina");
  client.release();
  return res.rows;
}

async function updateRotina(id, data) {
  const client = await connect();
  const query = `UPDATE rotina SET tipo_de_pele = $1, passos = $2, rotina_id = $3 WHERE id = $4`;
  const values = [data.tipo_de_pele, data.passos, data.rotina_id, id];
  await client.query(query, values);
  client.release();
}

async function deleteRotina(id) {
  const client = await connect();
  await client.query("DELETE FROM rotina WHERE id = $1", [id]);
  client.release();
}

export {
  insertUsuario, selectUsuarios, updateUsuario, deleteUsuario,
  selectUsuario,
  insertRotina, selectRotinas, updateRotina, deleteRotina,autenticarUsuario
};