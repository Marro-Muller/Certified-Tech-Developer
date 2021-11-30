// Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:

// Nome// Sobrenome//// Idade// Peso (KG)// Altura// Plano
// José// da Silva// 27// 83.5// 1.70// Ouro
// Carlos// de Souza// 28// 80.1// 1.76// Diamante
// Aline// Ferreira// 33// 63.7// 1.53// Não Possui
// Ana// Paula// 26// 55.0// 1.62// Prata


// Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null segundo estes dados?
//Variáveis são as presentes na linha 3 (cabeçalho da tabela)
//Não há constantes.
//Os tipos são string (nome, sobrenome, plano) e number (idade, peso, altura)
//A variável plano, no caso de Aline, poderia ser null.

// O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura^2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

// Você deverá criar 6 variáveis:
// Nome
// Idade
// Peso
// Altura
// Plano (só nos interessa saber se TEM ou NÃO TEM)
// Índice de Massa Corporal (IMC)

let name, lastname, age, weigth, height, plan;

 name = "Carlos";
 lastname = "de Souza";
 age = 28;
 weigth = 80.1;
 height = 1.76;
 plan = true;

let imc = weigth / (height*height);

console.log(name + " " + lastname + " tem " + age + " anos e seu índice de massa corporal é de " + imc)

name = "José";
lastname = "da Silva";
age = 27;
weigth = 83.5;
height = 1.70;
plan = true;

imc = weigth / (height*height);

console.log(name + " " + lastname + " tem " + age + " anos e seu índice de massa corporal é de " + imc)


name = "Aline";
lastname = "Ferreira";
age = 33;
weigth = 63.7;
height = 1.53;
plan = false;

imc = weigth / (height*height);

console.log(name + " " + lastname + " tem " + age + " anos e seu índice de massa corporal é de " + imc)


name = "Ana";
lastname = "Paula";
age = 26;
weigth = 55.0;
height = 1.62;
plan = true;

imc = weigth / (height*height);

console.log(name + " " + lastname + " tem " + age + " anos e seu índice de massa corporal é de " + imc)