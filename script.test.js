const script = require('./script');

test('Calcular o gasto de combustível por km rodado com gasolina', () => {
    expect(script.CalculoCombustivel(235000, 'gasolina')).toBe(14);  // espero que chame o método calcularCombustivel com os parâmetros 235000metros (235km) e 'gasolina' e que o retorno seja de 14 litros
});

test('Calcular o gasto de combustível por km rodado com etanol', () => {
    expect(script.CalculoCombustivel(235000, 'etanol')).toBe(21);    // espero que chame o método calcularCombustivel com os parâmetros 235000m (235km) e 'etanol' e que o retorno seja de 21 litros
});