import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adicionarRotas from './rotas.js';
import './utils/global.js';


dotenv.config();

const servidor = express();

servidor.use(express.json());

servidor.use(cors());


adicionarRotas(servidor);

const PORTA = process.env.PORTA;

servidor.listen(PORTA, () => console.log(`API subida com sucesso na porta ${PORTA}`));