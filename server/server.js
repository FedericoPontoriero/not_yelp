const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

const db = require('./db');
// Middlewares
app.use(express.json());

//Routes

// Get routes
app.get('/api/v1/restaurants', async (req, res) => {
	try {
		const results = await db.query('select * from restaurants');
		console.log(results);
		res.status(200).json({
			status: 'success',
			results: results.rows.length,
			data: {
				restaurant: results.rows,
			},
		});
	} catch (error) {
		console.log(error);
	}
});

app.get('/api/v1/restaurants/:id', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			restaurants: 'mcdonalds',
		},
	});
});

// Post routes
app.post('/api/v1/restaurants', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			restaurants: 'mcdonalds',
		},
	});
});

// Update routes
app.put('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params.id);
});

// Delete routes
app.delete('/api/v1/restaurants/:id', (req, res) => {
	console.log('delete');
	res.status(204).json();
});

// Server initialization
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server active in port: ${port}`);
});
