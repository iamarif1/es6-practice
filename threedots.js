const ages = [12, 14, 16, 17, 19];
const ages2 = [11, 13, 15, 16, 18];

const allAges = [...ages, 5, ...ages2];
console.log(allAges);

const richParson = [450, 550, 350, 760];
const maximum = Math.max(...richParson);
console.log(maximum);