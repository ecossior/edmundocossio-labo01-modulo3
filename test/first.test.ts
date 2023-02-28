import { Calculadora } from "../ts-jest-unitest/src/calculadora";

test('adds 1 + 2 to equal 3', () => {
    //expect(sum(1, 2)).toBe(3);
    const calc = new Calculadora()
    const actual =calc.sumNumero(1,2);
    const expc =3;

    expect(actual).toBe(expc);
  });

  test('rest 1 - 2 to equal -1', () => {
  /*  
    const calc = new Calculadora()
   
*/

    //const restNum = jest.fn((a: Number, b:Number)=>-1);
    const calc = new Calculadora()
    const actual = calc.restNumero(1,2);
    //const actual =restNum(1,2);
    const expc =-1;
    expect(actual).toBe(expc);
  });