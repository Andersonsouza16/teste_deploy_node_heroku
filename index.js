const express = require('express');

const app = express();


app.get('/', (req, res)=>{
	res.send({
		messagem: 'Deploy do app ok!'
	});
});

//const port = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, ()=>{
	console.log('servidor rodando')
});