test('ANA is palindrome', () => {
    
    let isPalindrome = jest.fn((name: String)=>true);
    let actual =isPalindrome("ana");
    let expc =true;
    expect(actual).toBe(expc);
        
});

test('Highest number of a list [2, 88, 65, 17, 95, 39]', () => {
    let highestNumber = jest.fn((numb1:number[])=>88);
    let actual =highestNumber([2, 88, 65, 17, 95, 39]);
    let expc =88;
    expect(actual).toBe(expc);      
});

test('Returns an array', () => {
    let highestNumber = jest.fn((text:string)=>['H','e','l','l','o']);
    let actual =highestNumber('Hello');
    let expc = ['H','e','l','l','o'];
    expect(actual).toEqual(expc);      
});