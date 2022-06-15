import axios from 'axios';

const baseURL =
	process.env.NODE_ENV === 'production'
		? 'https://not-yelp-fede.herokuapp.com/api/v1/restaurants'
		: 'http://localhost:5000/api/v1/restaurants';

export default axios.create({
	baseURL: baseURL,
});
