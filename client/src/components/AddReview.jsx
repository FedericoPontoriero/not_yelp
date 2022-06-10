import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

function AddReview() {
	const [name, setName] = useState('');
	const [reviewText, setReviewText] = useState('');
	const [rating, setRating] = useState('Rating');

	const { id } = useParams();

	const navigate = useNavigate();

	const location = useLocation();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await RestaurantFinder.post(`/${id}/addReview`, {
				name,
				review: reviewText,
				rating,
			});
			navigate('/');
			navigate(location.pathname);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='mb-2'>
			<form action=''>
				<div className='form-row'>
					<div className='form-group col-8'>
						<label htmlFor='name'>Name</label>
						<input
							value={name}
							onChange={e => setName(e.target.value)}
							type='text'
							className='form-control'
							id='name'
							placeholder='Name'
						/>
					</div>
					<div className='form-group col-4'>
						<label htmlFor='rating'>Rating</label>
						<select
							id='rating'
							className='custom-select'
							value={rating}
							onChange={e => setRating(e.target.value)}>
							<option disabled>Rating</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='Review'>Review</label>
					<textarea
						value={reviewText}
						onChange={e => setReviewText(e.target.value)}
						id='Review'
						className='form-control'></textarea>
				</div>
				<button className='btn btn-primary' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default AddReview;
