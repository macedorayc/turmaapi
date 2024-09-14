import * as db from '../repository/turmasRepository.js';
import { Router } from "express";
const endpoint = Router();

endpoint.post('/turma', async (req, resp) => {

    try {
        let turma = req.body

        let id = await db.adicionarTurma(turma);

        resp.status(200).json({ id: id });

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }


});

endpoint.get('/turma', async (req, resp) => {

    try {


        let registro = await db.selecionarTurma();

        resp.status(200).json(registro);

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }


});


endpoint.put('/turma/:id', async (req, resp) => {

    try {
        let turma = req.body
        let id = req.params.id

        await db.mudarTurma(turma, id);

        resp.status(200).json();

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }


});


endpoint.delete('/turmad/:id', async (req, res) => {

    try {

        let id = req.params.id

        await db.removerTurma(id);

        res.status(200).json();

    }
    catch (err) {


        logError(err);
        res.status(500).json(err);

    }


});

endpoint.get('/turma/buscar/ano', async (req, resp) => {

    try {

        let ano = req.query.ano
        let registro = await db.anoLetivo(ano);

        resp.status(200).json(registro);

    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    }


});

endpoint.get('/turma/:ano/curso', async (req, resp) => {
    
    let ano = req.params.ano
    let curso = req.query.curso
   
 try{
    let registro = await db.filtrarCurso(ano, curso);

        resp.status(200).json(registro);
    }
    catch (err) {


        logError(err);
        resp.status(500).json(err);

    } 
});



export default endpoint