const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

const db = require('./db');
// Middlewares
app.use(express.json());
app.use(cors());
//Routes

// Get routes
app.get('/api/v1/restaurants', async (req, res) => {
	try {
		const results = await db.query('select * from restaurants');
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

app.get('/api/v1/restaurants/:id', async (req, res) => {
	try {
		const results = await db.query('select * from restaurants where id = $1', [
			req.params.id,
		]);

		res.status(200).json({
			status: 'success',
			data: {
				restaurants: results.rows[0],
			},
		});
	} catch (error) {
		console.log(error);
	}
});

// Post routes
app.post('/api/v1/restaurants', async (req, res) => {
	try {
		const results = await db.query(
			'insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *',
			[req.body.name, req.body.location, req.body.price_range]
		);
		res.status(201).json({
			status: 'success',
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (error) {
		console.log(error);
	}
});

// Update routes
app.put('/api/v1/restaurants/:id', async (req, res) => {
	try {
		const results = await db.query(
			'update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *',
			[req.body.name, req.body.location, req.body.price_range, req.params.id]
		);
		res.status(200).json({
			status: 'success',
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (error) {
		console.log(error);
	}
});

// Delete routes
app.delete('/api/v1/restaurants/:id', async (req, res) => {
	try {
		const results = await db.query('delete from restaurants where id = $1', [
			req.params.id,
		]);
		res.status(204).json({
			status: 'success',
		});
	} catch (error) {
		console.log(error);
	}
});

// Server initialization
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server active in port: ${port}`);
});
