const express = require('express');

const app = express();


app.get('/', (req, res)=>{
	res.send('teste ok');
});

app.listen(3000, ()=>{
	console.log('servidor rodando')
});