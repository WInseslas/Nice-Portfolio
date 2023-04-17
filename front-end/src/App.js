/* eslint-disable no-unused-vars */
import About from "./components/About";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import SideBar from "./components/SideBar";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<main>
			<SideBar />
			<div className="main-content">
				<NavBar />

				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/resume" element={<Resume />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/*' element={<About />} />
				</Routes>
			</div>
		</main>
	);
}

export default App;
