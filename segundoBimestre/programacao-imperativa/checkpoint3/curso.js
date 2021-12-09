let Aluno = require('./aluno')

//Objeto literal do curso

let curso = {
    nome: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [],
    //Adicionar aluno
    adicionarAluno: function(...aluno) {
       this.listaEstudantes.push(...aluno)
   },

   //Verificar aprovação do aluno
   aprovarAluno: function(aluno) {
       const media = aluno.calcularMedia()
       if (aluno.qtdFaltas < this.faltasMaximas && media >= this.notaAprovacao) {
       return true
       }else if(aluno.qtdFaltas == this.faltasMaximas && media >= this.notaAprovacao * 1.1){
       return true
       }else{
       return false
       }
   },

   //Criar lista de aprovados
   listarAprovados: function(){
       let listaDeAprovados = [];
       this.listaEstudantes.forEach(aluno => {
          listaDeAprovados.push(this.aprovarAluno(aluno))
       })
       return listaDeAprovados
   }
}

module.exports = curso;