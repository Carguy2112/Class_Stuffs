// * IMPORTS
const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.resolve(__dirname, './ex1')))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./frontend/home.html'))
})

app.post('/')


app.all('*',(req,res)=>{
    res.status(404).send('you obviously typed that wrong!')
})
app.listen(5000,()=>{
    console.log('Server is up')
})