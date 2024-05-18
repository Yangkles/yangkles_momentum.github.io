const carculator = {
    add : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    multi : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    },
    square : function(a,b){
        return a**b;
    },
};

const plusResult = carculator.add(213123, 51351);
const minusResult = carculator.minus(plusResult, 4);
const multiplyResult = carculator.multi(123, minusResult);
const divideResult = carculator.divide(minusResult,plusResult);
const squareResult = carculator.square(divideResult,minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(divideResult);
console.log(multiplyResult);
console.log(squareResult);