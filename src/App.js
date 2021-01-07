import './App.css';
import Experience from './containers/Experience/Experience';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import { Element } from 'react-scroll';
import Landing from './containers/Landing/Landing';
import NavBar from './components/Navigation/NavBar/NavBar';

function App() {
	return (
		<div className="app">
			<NavBar />
			<div className="app__container">
				<Element name="landing">
					<Landing />
				</Element>
				<Element name="about">
					<About />
				</Element>
				<Element name="experience">
					<Experience />
				</Element>
				<Element name="projects">
					<Projects />
				</Element>
				<Element name="contact">
					<Contact />
				</Element>
			</div>
		</div>
	);
}

export default App;
