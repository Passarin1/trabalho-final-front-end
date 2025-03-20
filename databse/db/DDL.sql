-- Criação da tabela Usuário
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo_de_pele ENUM('normal', 'oleosa', 'seca', 'sensivel') NOT NULL,
    horario_preferido ENUM('diurno', 'noturno') NOT NULL
);

-- Criação da tabela Rotina
CREATE TABLE rotinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_de_pele ENUM('normal', 'oleosa', 'seca', 'sensivel') NOT NULL,
    passos TEXT NOT NULL
);

-- Relacionamento: Cada usuário tem uma rotina baseada no tipo de pele
-- Adicionando chave estrangeira à tabela de usuários para vincular à tabela de rotinas
ALTER TABLE usuarios ADD COLUMN rotina_id INT;
ALTER TABLE usuarios ADD CONSTRAINT fk_rotina
    FOREIGN KEY (rotina_id) REFERENCES rotinas(id);

-- Inserindo rotinas
INSERT INTO rotinas (tipo_de_pele, passos)
VALUES ('oleosa', '1. Limpeza com gel de limpeza... 2. Hidratação com creme oil-free...');

INSERT INTO rotinas (tipo_de_pele, passos)
VALUES ('seca', '1. Limpeza com creme hidratante... 2. Hidratação com creme mais denso...');

-- Inserindo usuários
INSERT INTO usuarios (nome, email, senha, tipo_de_pele, horario_preferido, rotina_id)
VALUES ('João da Silva', 'joao@email.com', 'senha123', 'oleosa', 'diurno', 1);

INSERT INTO usuarios (nome, email, senha, tipo_de_pele, horario_preferido, rotina_id)
VALUES ('Maria Oliveira', 'maria@email.com', 'senha456', 'seca', 'noturno', 2);
