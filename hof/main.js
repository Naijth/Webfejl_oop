const fv1 = (a, b) => {
    return a + b;
}

const fv2 = (a, b, cb) => {
    const v1 = cb(a, 2);
    const v2 = cb(b, 4);
    return cb(v1, v2);
}
const res1 = fv2(5, 7, (a, b) => {
    return a + b;
})

const fv3 = (op) => {
    if (op == '-'){
        return (a, b) => {
            return a - b;
        }
    } else if (op == '*2'){
        const multi = 2;
        return (a, b) => {
            return multi * (a + b);
        }
    }
}
const fv4 = fv3('-');

console.log(res1);
console.log(fv4(5, 7));
console.log(fv2(5, 7, fv3('-')));
console.log(fv2(0, 7, fv3('*2')));