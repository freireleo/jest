/*
Testes para:
1 - verificar a raiz quadrada de um numero
2 - verificar elevação ao quadrado de um numero
*/
const {funcoes}  = require('./funcoes');

test('soma de 2 numeros', () => {
    expect(funcoes.quad (2,3)).toBe(8);
})

test('subtração de 2 numeros', () => {
    expect(funcoes.raiz (81)).toBe(9);
});