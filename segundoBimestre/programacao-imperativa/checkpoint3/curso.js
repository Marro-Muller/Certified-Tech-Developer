const aluno = require('./aluno');
const arrayEstudantes = [];
arrayEstudantes.push(new aluno.Aluno('Matheus Galvão', 2, [7, 8, 9]));
arrayEstudantes.push(new aluno.Aluno('Maria Rosa', 3, [8, 8, 9]));
arrayEstudantes.push(new aluno.Aluno('Fabrina Nunes', 2, [7, 8, 8]));
arrayEstudantes.push(new aluno.Aluno('Jonathas Magalhães', 3, [9, 8, 9]));
arrayEstudantes.push(new aluno.Aluno('Nicholas Ruas', 4, [7, 8, 8]));
arrayEstudantes.push(new aluno.Aluno('Matheus Afonso', 2, [7, 8, 7]));

const curso = {
    nome: 'Programação Imperativa',
    nota: 6,
    faltas: 4,
    estudantes: arrayEstudantes,
    adicionarEstudante: (nome, nota, faltas) => {
        this.estudantes.push(new aluno.Aluno(nome, nota, faltas));
    },
    calculaAprova: (Aluno) => {
        let media = Aluno.notas.reduce((a, b) => a + b, 0)/Aluno.notas.length);

        if (media >= this.nota && Aluno.faltas < this.faltas) {
            return true;
        }
        if (Aluno.faltas === this.faltas && media >= this.nota*1.1) {
            return true;
        } else {
            return false;
    },
};

module.exports = curso;
console.log(curso.estudantes);