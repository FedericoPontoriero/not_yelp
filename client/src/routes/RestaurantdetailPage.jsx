import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

function RestaurantdetailPage() {
	const { id } = useParams();
	const { selectedRestaurant, setSelectedRestaurant } =
		useContext(RestaurantsContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantFinder.get(`/${id}`);
				setSelectedRestaurant(response.data.data.restaurant);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			{selectedRestaurant && (
				<>
					<div className='mt-3'>
						<Reviews />
					</div>
					<AddReview />
				</>
			)}
		</div>
	);
}

export default RestaurantdetailPage;
