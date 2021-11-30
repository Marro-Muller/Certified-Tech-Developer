// Neste exercício, você terá que criar uma função &quot;FizzBuzz&quot; que recebe dois
// parâmetros numéricos.

// A função deve atender aos seguintes requisitos:
// ● Você deve imprimir os números de 1 a 100;
// ● Se o número a ser impresso for um múltiplo de seu PRIMEIRO
// parâmetro, você deve imprimir a palavra “Fizz” em vez do número
// correspondente;

// ● Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro,
// você deve imprimir a palavra &quot;Buzz&quot; em vez do número correspondente;
// ● Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir
// a palavra “FizzBuzz”.

// Avançado: Como crédito extra, pense em como otimizar seu programa para que
// as palavras sejam passadas de forma dinâmica e seja você quem decide quais
// palavras ele deve dizer.

function multiplo(x, y, palavra1, palavra2)

lk




let fizzOrBuzz = () => {
    for (n = 1; n <= 100; n++) {
      let fizzBuzz = ''
      if (n % 3 == 0) fizzBuzz += 'Fizz'
      if (n % 5 == 0) fizzBuzz += 'Buzz'
      console.log(fizzBuzz || n)
    }
  }
  
  fizzOrBuzz()
  