import './App.css';
import Experience from './sections/Experience/Experience';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import { Element } from 'react-scroll';
import Landing from './sections/Landing/Landing';
import NavBar from './components/Navigation/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SocialSide from './components/SocialSide/SocialSide';
import EmailSide from './components/EmailSide/EmailSide';

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
			<SocialSide />
			<EmailSide />
			<Footer />
		</div>
	);
}

export default App;
