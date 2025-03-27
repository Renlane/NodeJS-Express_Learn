const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../page/index.html"))
})

router.get("/product/:id",(req,res)=>{
    const id = req.params.id
    try{
        if (fs.existsSync(path.join(__dirname,`../page/page${id}.html`))){
            res.sendFile(path.join(__dirname,`../page/page${id}.html`))}
        else{
            res.redirect('/')
        }
    } catch{
        res.redirect('/')
    }
})

module.exports = router