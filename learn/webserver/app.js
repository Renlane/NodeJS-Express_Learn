// const http = require('http')
const port = process.env.PORT
const express = require('express')
const path = require('path')
const router = require('./router/myRouter.js')

const app = express()

app.use(express.static(path.join(__dirname,'test')))
// const server = http.createServer((req,res)=>{
//     const pathName = req.url
//     console.log('url:',pathName)
//     res.write("<h1>hello Renlane</h1>")
//     res.end()
// })

// server.listen(port,()=>{
//     console.log(`start server in port : ${port}`)
// })

app.use(router)

app.listen(port,()=>{console.log(`port ${port}`)})
