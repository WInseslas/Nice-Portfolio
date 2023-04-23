/* eslint-disable no-unused-vars */
import React, { Component }  from 'react';
import Login from "./components/Login.jsx"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx";


function App() {
	return (
		<main>
			<Routes>
				<Route 
					exact
					path='/Dashboard' 
					element={<Dashboard />}		
					 />
				<Route path='/*' element={<Login />} />
			</Routes>
		
		</main>
	);
}

export default App;
