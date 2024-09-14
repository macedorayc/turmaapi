import connection from './controller.js';


export async function adicionarTurma(turma){
    let comando = `insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
    value(?,?,?,?,?,?);`


    let [info] = await connection.query(comando, [turma.turma, turma.curso, turma.ano_letivo, turma.capacidade, turma.ativo, turma.inclusao]);


    let msg = info.insertId;
    return msg;

}

export async function selecionarTurma(){
    let comando = `SELECT
    id_turma  AS        id,
    nm_turma  AS       nome,
    ds_curso  AS       curso,
    nr_ano_letivo AS    ano_letivo,
    qtd_capacidade AS   capacidade,
    bt_ativo AS        ativo,
    dt_inclusao AS      data_inclusao
    FROM tb_turma;`

    let [info] = await connection.query(comando)

    return info;

}


export async function mudarTurma(turma, id){
    let comando = `
    UPDATE tb_turma
    SET 
    nm_turma = ?,
    ds_curso = ?,      
    nr_ano_letivo = ?,   
    qtd_capacidade = ?,  
    bt_ativo = ?,     
    dt_inclusao = ?     
    WHERE id_turma = ?;`


    let [info] = await connection.query(comando, [turma.turma, turma.curso, turma.ano_letivo, turma.capacidade, turma.ativo, turma.inclusao, id]);


    let resultado = info.affectedRows;
    return resultado;

}

export async function removerTurma(id){
    let comando = `DELETE FROM tb_turma
    WHERE id_turma = ?;`


    let [info] = await connection.query(comando, [id])


    
    let resultado = info.affectedRows;
    return resultado

}



export async function anoLetivo(ano) {
    let comando = `
    SELECT
    id_turma  AS        id,
    nm_turma  AS       nome,
    ds_curso  AS       curso,
    nr_ano_letivo AS    ano_letivo,
    qtd_capacidade AS   capacidade,
    bt_ativo AS        ativo,
    dt_inclusao AS      data_inclusao
    FROM tb_turma
    WHERE nr_ano_letivo =  ?`


    let [info] = await connection.query(comando, [ano])

    let resultado = info;
    return resultado

}

export async function filtrarCurso(ano, curso) {
    let comando = `
    SELECT
    id_turma  AS        id,
    nm_turma  AS       nome,
    ds_curso  AS       curso,
    nr_ano_letivo AS    ano_letivo,
    qtd_capacidade AS   capacidade,
    bt_ativo AS        ativo,
    dt_inclusao AS      data_inclusao
    FROM tb_turma
    WHERE nr_ano_letivo = ? and ds_curso = ?;`


    let [info] = await connection.query(comando, [ano, curso])

    let resultado = info;
    return resultado

}























