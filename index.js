const express = require('express');

const app = express();


app.get('/', (req, res)=>{
	res.send('teste ok!');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('servidor rodando')
});