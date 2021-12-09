const Aluno = require('./aluno');
const curso = require('./curso');

const estudante1 = new Aluno('Maria Rosa Müller', 2, [7, 8, 9]);
const estudante2 = new Aluno('Fabrina Nunes', 3, [9, 7, 8]);
const estudante3 = new Aluno('Jonathas Magalhães', 1, [9, 7, 8]);
const estudante4 = new Aluno('Nicholas Viegas', 2, [9, 7, 8]);
const estudante5 = new Aluno('Matheus Galvão', 1, [6, 7, 7]);
const estudante6 = new Aluno('Mateus Afonso', 1, [6, 8, 7]);

curso.adicionarAluno(estudante1, estudante2, estudante3, estudante4, estudante5, estudante6)
console.log(curso.aprovarAluno(estudante5))
console.log(curso.listarAprovados())