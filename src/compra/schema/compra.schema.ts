import * as mongoose from 'mongoose';
export const CompraSchema = new mongoose.Schema({

    nome: {type: String, required: true,},
    cpf: {type: String},
    cnpj: {type: String},
    email: {type: String},
    bairro: {type: String},
    cep: {type: String},
    preco:  {type: Number, required: true,},
    logradouro: {type: String},
    numero: {type: String},
    pontoReferencia: {type: String},
    telefone: {type: String},
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    estado: {type: Number, required: true, default:1},


    
    
 
});


