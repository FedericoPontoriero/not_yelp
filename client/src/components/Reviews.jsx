import React from 'react';
import StarRating from './StarRating';

function Reviews() {
	return (
		<div>
			<div
				className='card text-white bg-primary mb-3 mr-4'
				style={{ maxWidth: '30%' }}>
				<div className='card-header d-flex justify-content-between'>
					<span>Juan</span>
					<span>
						<StarRating rating={3} />
					</span>
				</div>
				<div className='card-body'>
					<p className='card-text'>review</p>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
