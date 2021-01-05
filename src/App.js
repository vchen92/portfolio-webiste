import './App.css';
import Experience from './components/Experience/Experience';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { Element } from 'react-scroll';
import Landing from './components/Landing/Landing';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Landing />
			<Element name="about">
				<About />
			</Element>
			<Element name="experience">
				<Experience />
			</Element>
			<Element name="work">
				<Work />
			</Element>
			<Element name="contact">
				<Contact />
			</Element>
		</div>
	);
}

export default App;
