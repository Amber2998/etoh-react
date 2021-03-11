import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


function App () {
	return (
		<Router>
			<div className={"container"} style={{
				backgroundImage: 'url(Images/Image_back.png)',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'scroll',
				backgroundSize: '62%',
				height:'100%',
				display: 'flex',
				flexDirection: 'column'
			}}>
					<Navbar/>

				<div className={"content"}>
					<Switch>
						<Route path="/about">
							<About/>
						</Route>
						<Route path="/products">
							<Products/>
						</Route>
						<Route path="/orders">
							<Orders/>
						</Route>
						<Route path="/contact">
							<Contact/>
						</Route>
						<Route path="/">
							<Home/>
						</Route>
					</Switch>
				</div>
				<Footer/>
			</div>

		</Router>
	);
}

export default App;
