/*
Testes para:
1 - verificar a raiz quadrada de um numero
2 - verificar elevação ao quadrado de um numero
*/
const {funcoes}  = require('./funcoes');

test('elevacao ao quadrado', () => {
    expect(funcoes.quad (2,3)).toBe(8);
})

test('raiz quadrada do numero', () => {
    expect(funcoes.raiz (81)).toBe(9);
});