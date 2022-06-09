import React, { useState } from 'react';
import './style.scss';
import { Navbar, SearchForm } from './components';
import { Route, HashRouter, Routes } from 'react-router-dom';
import { ForecastPage, HomePage } from './pages';
import TemperatureContext from './hooks/TemperatureContext';

function App() {

	const [isCelsiusToggled, setIsCelsiusToggled] = useState(false);

	return (
		<div>
			<HashRouter>
				<TemperatureContext.Provider
					value={[isCelsiusToggled, setIsCelsiusToggled]}>
					<Navbar />
					<div className='container'>
						<SearchForm />
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/forecast/:zipCode' element={<ForecastPage />} />
						</Routes>
					</div>
				</TemperatureContext.Provider>
			</HashRouter>
		</div>
	);
}

export default App;
