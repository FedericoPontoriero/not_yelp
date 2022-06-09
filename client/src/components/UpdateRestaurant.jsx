import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

function UpdateRestaurant(props) {
	const { id } = useParams();
	let navigate = useNavigate();
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState('');
	const { restaurants } = useContext(RestaurantsContext);

	useEffect(() => {
		const fetchData = async () => {
			const response = await RestaurantFinder.get(`/${id}`);
			setName(response.data.data.restaurant.name);
			setLocation(response.data.data.restaurant.location);
			setPriceRange(response.data.data.restaurant.price_range);
		};
		fetchData();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
			name,
			location,
			price_range: priceRange,
		});
		navigate('/');
	};

	return (
		<div>
			<h1>{restaurants[0].name}</h1>
			<form action=''>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						className='form-control'
						onChange={e => setName(e.target.value)}
						value={name}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='location'>Location</label>
					<input
						type='text'
						className='form-control'
						id='location'
						onChange={e => setLocation(e.target.value)}
						value={location}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='price_range'>Price Range</label>
					<input
						type='number'
						id='price_range'
						className='form-control'
						onChange={e => setPriceRange(e.target.value)}
						value={priceRange}
					/>
				</div>
				<button className='btn btn-primary' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default UpdateRestaurant;
