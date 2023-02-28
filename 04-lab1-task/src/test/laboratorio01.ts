export class Laboratorio01 {
    constructor() {
        
    }

   /**
    * isPalindrome
   name:string    
   */
   public isPalindrome(str:string) {
    let strLength = str.length;
    let reverseStr:string = ''; 
    
    for (let i = strLength -1; i >= 0; --i) {
        reverseStr = reverseStr + str.charAt(i);        
    }

    if (str.toLowerCase() == reverseStr.toLowerCase()) {
      return true;
    }
    else return false;
   }

   /**
    * lookingHiglestNumber
    number1: number    
    */
   public lookingHighestNumber(arr: number[]) {
    for (let i = 1; i < arr.length; ++i) {
      if (arr[0] < arr[i]) {
        arr[0] = arr[i];
      }      
    }
    return arr[0];
   }
   /**
    * getArrayOfString
    text:string    */
   public getArrayOfString(texto:string) {
    let arr: string[] = [];
    for (let i = 0; i < texto.length; ++i) {
      
        arr[i] = texto[i];
            
    }
    return arr;
   }
}