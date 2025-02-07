const sum = (a, b) => {
    return a + b;
}

const obj = {}
obj.calculate1 = sum;

obj.calculate2 = (calcCb) => {
    const sum = calcCb(3, 5)
    return sum;
}

obj.calculate3 = (num1, num2, cb) => {
    const res = cb(num1, num2);
    return res;
}

const theFunction = () => {
    const a = 10;
    const res = obj.calculate2((num1, num2) => {
        return (num1 + num2) * a;
    })
    console.log(res);
}

// this is where the magic happens

console.log(sum(3, 5))
console.log(obj.calculate1(3, 5));

const res1 = obj.calculate2((num1, num2) => {
    return num1 + num2;
})
console.log(res1);

const res2 = obj.calculate2((num1, num2) => {
    return num1 - num2;
})
console.log(res2);

const res3 = obj.calculate3(3, 5, (num1, num2) => {
    return num1 + num2;
})
console.log(res3);

theFunction();