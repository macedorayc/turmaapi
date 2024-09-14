
import turmaController from './controller/turmaController.js';
import alunoController from './controller/alunoController.js';

export default function adicionarRotas(servidor){

servidor.use(turmaController);
servidor.use(alunoController);

}