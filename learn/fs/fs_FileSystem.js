//fs File System 
//const data = fs.readFileSync('location',encoding)
//fs.writeFileSync('location',data)

//Blocking sync
const fs = require('fs') //module มีอยู่แล้ว

// const data = fs.readFileSync('../fs/file/input.txt','utf-8')
// console.log(data)
// console.log('จบการทำงาน')

// const outputText = `Hello Node.js\n${data}\nถูกเขียนเมื่อ ${new Date()}`
// fs.writeFileSync("../fs/file/output.txt",outputText)
// console.log("done")

//Non-Blocking async
fs.readFile('fs/file/input.txt','utf-8',(err,data)=>{
    if(err) return console.log("err",err)
    console.log(data);
    const outputText = `Hello Node.js\n${data}\nถูกเขียนเมื่อ ${new Date()}`
    fs.writeFile('fs/file/output.txt',outputText,err=>{
        if(err) return console.log("err",err)
        console.log("จบการทำงาน")
    })
})