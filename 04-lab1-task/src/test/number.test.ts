import { Laboratorio01 } from "./laboratorio01";


test('ANA is palindrome', () => {
    const test = new Laboratorio01();
    let actual = test.isPalindrome("ANa");
    expect(actual).toBeTruthy();        
});

test('Highest number of a list [2, 88, 65, 17, 95, 39]', () => {

    const test = new Laboratorio01();
    let actual = test.lookingHighestNumber([2, 88, 65, 17, 95, 39]);
    let expc =95;
    expect(actual).toBe(expc);      
});

test('Returns an array', () => {
    const test = new Laboratorio01();
    let actual = test.getArrayOfString('Hello');
    let expc = ['H','e','l','l','o'];
    expect(actual).toEqual(expc);      
});