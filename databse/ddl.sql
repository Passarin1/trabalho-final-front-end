CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(45) NOT NULL,
    tipo_de_pele VARCHAR(100),
    horario VARCHAR(45),
    rotina_id INT REFERENCES rotina(id)
);

CREATE TABLE rotina (
    id SERIAL PRIMARY KEY,
    tipo_de_pele VARCHAR(100),
    passos VARCHAR(255),
    usuario_id INT REFERENCES usuario(id)
);
