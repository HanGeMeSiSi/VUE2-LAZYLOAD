const express = require("express");
const {resolve} = require("path");
const { readFileSync } = require("fs");



const app = express();

app.all('*',(req,res,next)=>{
    // 设置跨域
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access-Control-Allow-methods",'POST,GET');
    next();
});

app.get('/images/:filename',(req,res)=>{
    console.log(req.params,'====');
    res.sendFile(resolve(__dirname,'./images/' + req.params.filename));
})

app.get('/images/circle/:filename',(req,res)=>{
    console.log(req.params,'====');
    res.sendFile(resolve(__dirname,'./images/circle/' + req.params.filename));
})
app.get('/images/goods/:filename',(req,res)=>{
    console.log(req.params,'====');
    res.sendFile(resolve(__dirname,'./images/goods/' + req.params.filename));
})
app.get('/images/emoji/:filename',(req,res)=>{
    console.log(req.params,'====');
    res.sendFile(resolve(__dirname,'./images/emoji/' + req.params.filename));
})

app.get("/imgs",(req,res)=>{
    const imagesData = JSON.parse(readFileSync(resolve(__dirname,'./data/images.json'),"utf8"));
    res.send(imagesData);
})

app.listen(3000,()=>{
    console.log('welcom to use Express server')
});