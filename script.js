var multiply = function (num1, num2) {
    if (typeof num1 !== "number") {
        return `Please provide this function with two numbers`;
    } else if (typeof num2 !== "number") {
        return `Please provide this function with two numbers`;
    }
return num1 * num2;
}

console.log(multiply(8, 16));
console.log(multiply(7.5, 13));
console.log(multiply(23, 24));