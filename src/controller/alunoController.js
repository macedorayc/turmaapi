import * as db from '../repository/alunoRepository.js';

import { Router } from "express";
const endpoint = Router();


endpoint.post('/aluno', async (req, resp) => {

    try {
        let aluno = req.body

        let id = await db.adicionarAluno(aluno);

        resp.status(200).json({ id: id });

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }
});

endpoint.get('/aluno', async (req, resp) => {

    try {


        let registro = await db.selecionarAluno();

        resp.status(200).json(registro);

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }
});


endpoint.put('/aluno/:id', async (req, resp) => {

    try {
        let aluno = req.body
        let id = req.params.id

        await db.mudarAluno(aluno, id);

        resp.status(200).json();

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }
});


endpoint.delete('/alunod/:id', async (req, res) => {

    try {

        let id = req.params.id

        await db.removerAluno(id);

        res.status(200).json();

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }
});


endpoint.get('/aluno/busca', async (req, resp) => {
    try {
        let turmal = {
            ano: req.query.ano,
            turma: req.query.turma,
            alunoAtivo: req.query.alunoAtivo
        };

        console.log("Filtros recebidos:", turmal);

        let resultado = await db.buscarAlunos(turmal);
        resp.status(200).send({
            turma: resultado
           })

    } 
    catch (err) {
        
        logError(err);
        resp.status(500).json(err);
    }
});



export default endpoint