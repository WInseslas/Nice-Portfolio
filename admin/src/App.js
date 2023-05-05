/* eslint-disable no-unused-vars */
import React, { Component }  from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx"
import Profile from './pages/Profile.jsx';

function App() {
	return (
		<main>
			<Routes>
				<Route 
					exact
					path='/Dashboard' 
					element={<Dashboard />}		
				/>
				<Route
					exact
					path='/'
					element={<Login />} />
				<Route
					exact
					path='/Profile'
					element={ <Profile />} />
				<Route path='/*' element={<Dashboard />} />
			</Routes>
		
		</main>
	);
}

export default App;
