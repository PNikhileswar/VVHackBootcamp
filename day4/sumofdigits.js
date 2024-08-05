function sumOfDigits(num) {
    return num
        .toString()        
        .split('') 
        .map(Number)      
        .reduce((acc, curr) => acc + curr, 0);  
}
console.log(sumOfDigits(1234));  
console.log(sumOfDigits(5678)); 
