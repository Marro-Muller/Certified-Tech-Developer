function acaoCarro(callback) {
    return callback();
}

console.log (acaoCarro(function() {
    return "ola"
}) );

function andar() {
    console.log("Carro andando");
}

function parar() {
    console.log("Carro parou");
}

acaoCarro(andar);
// andar();
// parar();
