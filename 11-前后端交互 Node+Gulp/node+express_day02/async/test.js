const fs = require('fs');
// let p1 = new Promise((resolve, reject) => {
//     fs.readFile('./1.txt', 'utf8', (err, result) => {
//         resolve(result)
//     })
// });
// let p2 = new Promise((resolve, reject) => {
//     fs.readFile('./2.txt', 'utf8', (err, result) => {
//         resolve(result)
//     })
// });
// let p3 = new Promise((resolve, reject) => {
//     fs.readFile('./3.txt', 'utf8', (err, result) => {
//         resolve(result)
//     })
// });

// p1.then(result => {
//     console.log(result);
//     return p2;
// }).then(result => {
//     console.log(result);
//     return p3;
// }).then(result => {
//     console.log(result);
// });

function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, result) => {
            resolve(result)
        })
    });
}

async function readFiles() {
    const file1 = await readFile('1.txt');
    console.log(file1);
    const file2 = await readFile('2.txt');
    console.log(file2);
    const file3 = await readFile('3.txt');
    console.log(file3);

}

readFiles();