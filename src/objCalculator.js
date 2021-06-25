/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (n1, n2) => {
    const sum = n1 + n2;
    return Math.trunc(sum);
  },
  mult: (n1, n2) => {
    const multiplication = n1 * n2;
    return Math.trunc(multiplication);
  },
  div: (n1, n2) => {
    const division = n1 / n2;
    return Math.trunc(division);
  },
  sub: (n1, n2) => {
    const subtraction = n1 - n2;
    return Math.trunc(subtraction);
  },
};

module.exports = calculator;
