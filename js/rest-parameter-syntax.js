// regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

// extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('Sum2:', sum2);

// function using ... rest
const sumRest = (a, ...rest) => {
    let sum = a;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log('sum3', sum3);
