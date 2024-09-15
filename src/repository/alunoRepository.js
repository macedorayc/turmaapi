import endpoint from '../controller/alunoController.js';
import connection from './controller.js';


export async function adicionarAluno(aluno) {
    let comando = `insert into tb_matricula_aluno ( nm_aluno , ds_sexo, dt_nascimento, ds_email, bt_ativo, id_turma)
    value(?,?,?,?,?,?);`


    let [info] = await connection.query(comando, [aluno.aluno, aluno.sexo, aluno.nascimento, aluno.email, aluno.ativo, aluno.turma]);


    let msg = info.insertId;
    return msg;

}

export async function selecionarAluno() {
    let comando = `SELECT
    id_matricula_aluno         id,
    nm_aluno                 aluno,
    ds_sexo          sexo,
    dt_nascimento    nascimento,
    ds_email         email,
    bt_ativo         ativo,
    id_turma          turma
    FROM tb_matricula_aluno;`

    let [info] = await connection.query(comando)

    let msg = info;
    return msg;

}


export async function mudarAluno(aluno, id) {
    let comando = `
    UPDATE tb_matricula_aluno
    SET 
    nm_aluno = ?,
    ds_sexo = ?,      
    dt_nascimento = ?,   
    ds_email = ?,  
    bt_ativo = ?,  
    id_turma = ?
    WHERE id_matricula_aluno = ?;`


    let [info] = await connection.query(comando, [aluno.aluno, aluno.curso, aluno.ano_letivo, aluno.capacidade, aluno.ativo, aluno.inclusao, id]);


    let resultado = info.affectedRows;
    return resultado;

}

export async function removerAluno(id) {
    let comando = `
    DELETE FROM tb_matricula_aluno
    WHERE id_matricula_aluno = ?;`


    let [info] = await connection.query(comando,[id])



    let resultado = info.affectedRows;
    return resultado

}


export async function buscarAlunos(ano, turma, alunoAtivo) {
    let comando = `
      
SELECT 
*
FROM 
    db_turmas.tb_turma ta
JOIN 
    db_turmas.tb_matricula_aluno ma ON ta.id_turma = ma.id_turma
WHERE
  ta.nr_ano_letivo = ?  AND ta.nm_turma = ? ' AND ma.bt_ativo = ?
ORDER BY 
    ta.nm_turma, ma.nm_aluno;
    `

    let info = await connection.query(comando,[ano, turma, alunoAtivo])

    let resultado = info[0]
    return resultado
}



