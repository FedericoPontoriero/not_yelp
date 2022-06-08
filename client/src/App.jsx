import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UpdatePage from './routes/UpdatePage';
import Home from './routes/Home';
import RestaurantdetailPage from './routes/RestaurantdetailPage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App = () => {
	return (
		<RestaurantsContextProvider>
			<div className='container'>
				<BrowserRouter>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route
							exact
							path='/restaurants/:id/updates'
							element={<UpdatePage />}
						/>
						<Route
							exact
							path='/restaurants/:id'
							element={<RestaurantdetailPage />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</RestaurantsContextProvider>
	);
};

export default App;
