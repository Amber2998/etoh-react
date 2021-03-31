import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import i18n from './i18n';
import React from 'react';
import AgeDenial from './components/AgeDenial/AgeDenial';
import AgeModal from './components/AgeModal/AgeModal';
import {withCookies, Cookies} from 'react-cookie';
import { instanceOf } from 'prop-types';
import CookieBanner from './components/CookieBanner/CookieBanner';


class App extends React.Component {

	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	}

	state = {
		oldEnough: this.props.cookies.get("oldEnough") === "true" || false,
		checkedAge: this.props.cookies.get("checkedAge") === "true" || false,
		allowsCookies: this.props.cookies.get("allowsCookies") === "true" || false,
		checkedCookies: this.props.cookies.get("checkedCookies") === "true" || false
	};

	handleModal = (oldEnough, checkedAge) => {
		let {cookies} = this.props;
		let {allowsCookies} = this.state;

		if (allowsCookies) {
			cookies.set("oldEnough", oldEnough, { path:'/'});
			cookies.set("checkedAge", checkedAge, { path:'/'});
		}
		this.setState({oldEnough})
		this.setState({checkedAge})
	}

	cookieYesFn = () => {
		let {cookies} = this.props;
		let {oldEnough} = this.state;
		cookies.set("oldEnough", oldEnough, { path:'/'});
		cookies.set("allowsCookies", true, {path:'/'})
		cookies.set("checkedCookies", true, {path:'/'})

		this.setState({allowsCookies: cookies.get("allowsCookies")})
		this.setState({checkedCookies: cookies.get("checkedCookies")})
	}

	cookieNoFn = () => {
		this.props.cookies.remove("oldEnough");
		this.props.cookies.remove("allowsCookies");
		this.props.cookies.remove("checkedCookies");
		this.props.cookies.remove("checkedAge");
		this.setState({checkedCookies: true, allowsCookies: false});
	}

	render () {
		let {checkedCookies, allowsCookies, oldEnough} = this.state;
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
						<div className={'d-flex justify-content-end'} style={{flex: '0 0 auto'}}>
							<div style={{ margin: '0.5em 0' }}>
								<img src={'Icons/be.svg'} onClick={() => i18n.changeLanguage('nl')}
									 alt={'nl-translation'} style={{ width: '1em', margin: '0 1em' }}/>
								<img src={'Icons/gb.svg'} onClick={() => i18n.changeLanguage('en')}
									 alt={'en-translation'} style={{ width: '1em' }}/>
							</div>
						</div>
						<Navbar />

						<AgeModal
							show={!this.state.oldEnough && !this.state.checkedAge}
							noFn={() => this.setState(s => ({ ...s, checkedAge: true }))}
							yesFn={() => this.handleModal(true, true)}
						/>

						{this.state.oldEnough ? <div className={"content"}>
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

						<div className={'d-flex flex-column align-items-stretch'}>
							{!this.state.checkedCookies && <CookieBanner yesFn={this.cookieYesFn} noFn={this.cookieNoFn} />}
							<Footer
								cookieState={{checkedCookies, allowsCookies, oldEnough, cookieNoFn: this.cookieNoFn}}
							/>
						</div>
					</div>
				</div>
			</Router>
		);

	}
}

export default withCookies(App);
