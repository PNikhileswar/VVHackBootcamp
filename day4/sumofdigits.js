function sumOfDigits(num) {
    return num
        .toString()        
        .split('') 
        .map(Number)      
        .reduce((acc, curr) => acc + curr, 0);  
}
console.log(sumOfDigits(9345));  
console.log(sumOfDigits(68509298)); 
