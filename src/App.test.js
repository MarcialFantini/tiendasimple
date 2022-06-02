import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("hola")
  expect(linkElement).toEqual(linkElement)

});

test('agregando un numero positivo que no sea 0', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('cero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

const listaDeCompras = [
  'pañales',
  'pañuelos',
  'bolsas de basura',
  'toallas de papel',
  'leche',
];

test('la leche se encuentra en la lista de compras', () => {
  expect(listaDeCompras).toContain('leche');
  expect(new Set(listaDeCompras)).toContain('leche');
});





function compilarCódigoAndroid() {
  throw new TypeError("UNKNOWN ERROR");
}

test('La compilacion de android va por buen camino', () => {
  expect(() => compilarCódigoAndroid(compilarCódigoAndroid)).toThrow(TypeError);
  expect(() => compilarCódigoAndroid()).toThrow(TypeError);

  // Puede usar también el mensaje de error exacto o una expresión regular
  expect(() => compilarCódigoAndroid()).toThrow('UNKNOWN ERROR');

});

