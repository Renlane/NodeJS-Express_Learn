//fs File System 
//const data = fs.readFileSync('location',encoding)
//fs.writeFileSync('location',data)

//Blocking sync
const fs = require('fs') //module มีอยู่แล้ว

const data = fs.readFileSync('fs/file/input.txt','utf-8')
console.log(data)
console.log('จบการทำงาน')

const outputText = `Hello Node.js\n${data} ถูกเขียนเมื่อ ${new Date()}`