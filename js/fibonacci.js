//First method
function fibonacci(n) { 
    let a = 1; 
    let b = 1;
    for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    }
    return b;
 }
alert( fibonacci(4) ); // 2




//Second method
function fibonacci(n) { 
    let a = 1; 
    let b = 1;
    let i = 3;
    while (n>=i) {
        let c = a + b;
        a = b;
        b = c;
        i++;
    }
    return b;
}
alert( fibonacci(5) ); // 5




//////getFibonachi///////
function getFibonachi(n)
{
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
var result = getFibonachi(8); //21 
console.log(result); // 21
//////getFibonachi///////




//////getFactorial///////
function getFactorial(n){
    if (n === 1){
        return 1;
    }
    else{
         
        return n * getFactorial(n - 1);
    }
}
var result = getFactorial(4); 
console.log(result); // 24
//////getFactorial///////


