import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello from express app');
});

app.listen(3000, () => {
	console.log('Express app listening on port 3000');
});
