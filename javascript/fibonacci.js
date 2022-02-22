let fibonacci = function(n) {        
    let goldenRatio = 1.61803398874989484820;
    return Math.round(Math.pow(goldenRatio, n) / Math.sqrt(5));
}

console.log(fibonacci(20));  // 6765