let bemVindo = () => 'Olá Mundo!';

let dobro = numero => numero * 2;

let soma = (a, b) => a + b;

let horaAtual = () => {
let data = new Date();
return data.getHours() + ':' +
data.getMinutes();
}

// setTimeout(function () {
//     console.log('Olá, Mundo!');
// }, 1000);

// setInterval(function () {
//     console.log("Olá, mago");
// }, 1000);

// let print = () =>{
//     console.log("Olá novamente");
// }

// setInterval(print, 100);

function nomeCompleto(nome, sobrenome) {
    return nome+' '+sobrenome
}

console.log( nomeCompleto("Marcos", "Santana") );

function bomDia(nome, sobrenome, callback) {
    return 'Olá '+callback(nome, sobrenome)
}

console.log( bomDia("Johnny", "Pecego", nomeCompleto) )
