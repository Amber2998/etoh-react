import './App.css';
import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import i18n from './i18n';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AgeDenial from './components/AgeDenial/AgeDenial';
import AgeModal from './components/AgeModal/AgeModal';


class App extends React.Component {
	state = { oldEnough: false, checkedAge: false };

	render () {
		return (
			<Router>
				<div className='opperDiv' style={{
					backgroundImage: `url(Images/Img_back.png)`,
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'scroll',
					backgroundSize: '62%',
					height: '100%'
				}}>
					<div className={"container"} style={{
					}}>
						<div className={'d-flex justify-content-end'}>
							<div style={{ margin: '0.5em 0' }}>
								<img src={'Icons/be.svg'} onClick={() => i18n.changeLanguage('nl')}
									 alt={'nl-translation'} style={{ width: '1em', margin: '0 1em' }}/>
								<img src={'Icons/gb.svg'} onClick={() => i18n.changeLanguage('en')}
									 alt={'en-translation'} style={{ width: '1em' }}/>
							</div>
						</div>
						<Navbar/>

						<AgeModal
							show={!this.state.oldEnough && !this.state.checkedAge}
							yesFn={() => this.setState(s => ({ ...s, oldEnough: true, checkedAge: true }))}
							noFn={() => this.setState(s => ({ ...s, checkedAge: true }))}
						/>

						{this.state.oldEnough  ? <div className={"content"}>
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
							: this.state.checkedAge ? <AgeDenial/>:
								<div className='d-flex justify-content-center'> Goed geprobeerd :) </div>
						}
						<Footer/>
					</div>
				</div>
			</Router>
		);

	}
}

export default App;
