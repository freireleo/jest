/*
* soma
* subratração
* divisão
* multiplicação
*/
const {calculadora}  = require('./calculadora');

test('soma de 2 numeros', () => {
    expect(calculadora.soma (2,2)).toBe(4);
})

test('subtração de 2 numeros', () => {
    expect(calculadora.subtracao (5,3)).toBe(2);
});

test('divisao de 2 numeros', () => {
    expect(calculadora.divisao (6,3)).toBe(2);
});

test('multiplicacao de 2 numeros', () => {
    expect(calculadora.multiplicacao (5,3)).toBe(15);
});