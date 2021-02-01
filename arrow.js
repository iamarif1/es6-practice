// const doubleIt = num => num * 2;

// const result = doubleIt(5);
// console.log(result);

// const  addIt = (x, y) => x + y ;

// const result = addIt(6, 7);
// console.log(result);

// const giveMe5 = () => 5;

// const donate = giveMe5(5);
// console.log(donate);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const total = doMath(10, 5);
console.log(total);