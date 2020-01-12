console.log('detail');
let a = 1;
console.log('a', a);
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('ewqeqw');
        resolve('12');
    }, 1000);
});