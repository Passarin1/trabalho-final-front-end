import Joi from "joi";

const usuarioSchema = Joi.object({
  nome: Joi.string().max(100).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(),
  tipo_de_pele: Joi.string().valid("normal", "oleosa", "seca", "sensivel").required(),
  horario: Joi.string().valid("diurno", "noturno").required(),
  rotina_id: Joi.number().integer().required(),
});

export default usuarioSchema;
