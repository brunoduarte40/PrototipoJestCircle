const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    let verify = '';
    const verifyIsArray = productDetails('string1', 'string2');
    if (Array.isArray(verifyIsArray) === true) {
      verify = 'array';
    }
    assert.strictEqual(verify, 'array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('string1', 'string2').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('string1', 'string2')[0], 'object');
    assert.strictEqual(typeof productDetails('string1', 'string2')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('string1', 'string2')[0], productDetails('string1', 'string2')[1]);
    // Teste que os dois productIds terminam com 123.
    const terminationCheck1 = productDetails('string1', 'string2')[0].details.productId;
    let termination1 = '';
    for (let i = 0; i < terminationCheck1.length; i += 1) {
      if (i > (terminationCheck1.length - 4)) {
        termination1 += terminationCheck1[i];
      }
    }
    assert.strictEqual(termination1, '123');

    const terminationCheck2 = productDetails('string1', 'string2')[1].details.productId;
    let termination2 = '';
    for (let i = 0; i < terminationCheck2.length; i += 1) {
      if (i > (terminationCheck2.length - 4)) {
        termination2 += terminationCheck2[i];
      }
    }
    assert.strictEqual(termination2, '123');
  });
});
