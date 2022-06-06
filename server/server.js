const express = require('express');

require('dotenv').config();

const app = express();

app.get('/getRestaurants', (req, res) => {
	console.log('getRestaurants');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server active in port: ${port}`);
});
