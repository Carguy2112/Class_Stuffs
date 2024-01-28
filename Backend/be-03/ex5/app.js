const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.resolve(__dirname,'./public')));


app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./home.html'))
})

app.get('/detail',(req, res)=>{
    res.sendFile(path.resolve(__dirname, './detail.html'))
})


app.get('/new',(req, res)=>{
    res.sendFile(path.resolve(__dirname, './new.html'))
})

app.get('/edit',(req, res)=>{
    res.sendFile(path.resolve(__dirname, './edit.html'))
})


app.get('*',(req, res)=>{
    return res.status(404).send('You obviously typed that wrong.')
})

app.listen(5000, ()=>{})