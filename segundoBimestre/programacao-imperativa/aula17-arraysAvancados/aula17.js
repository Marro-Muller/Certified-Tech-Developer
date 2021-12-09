let numeros = [1,2,3,4];

let dobro = numeros.map(function(item){
    // console.log(item);
    return item * 2;
});

console.log(dobro);

let soma = numeros.reduce(function(acumulador, item) {
    // console.log(acumulador, item);
    return acumulador+ item;
});

