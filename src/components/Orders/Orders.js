import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Button, Dropdown, DropdownButton, Form, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios';

const config = {
	cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
	// formUrl: 'https://docs.google.com/forms/d/e/19DIkyyEclnAOMkg5xzQcyE-Zylrvg2ADB0uxietJE4M/formResponse'
	formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSelNyws3oJTpKF0n8Icz0UZ7GZBO2gEuU6v6a64xI1qWxCBdg/formResponse'

};

const ControlledInput = ({label, onChange, prepend, append, ...props}) => {
	return (
		<React.Fragment>
			<label>{label}</label>
			<InputGroup className={'mb-3'}>
				{ !!prepend &&<InputGroup.Prepend>
					<InputGroup.Text>{prepend}</InputGroup.Text>
				</InputGroup.Prepend>}

				<FormControl onChange={e => onChange(e.target.value)} {...props}/>

				{ !!append && <InputGroup.Append >
						<InputGroup.Text>{append}</InputGroup.Text>
				</InputGroup.Append> }
			</InputGroup>
		</React.Fragment>
	)
}

class Orders extends React.Component {
	state = {

		emailAddress: '',
		form:{
			voorNaam: {id: 1612816974, value:''},
			achterNaam: {id: 95838241, value:''},
			straat: {id: 1252622776, value:''},
			huisNummer: {id: 2029748559, value:''},
			postBus: {id: 1796339265, value:''},
			postCode: {id: 507427680, value:''},
			plaats: {id: 215792322, value:''},
			ladyBarbaraCounter: {id: 2031162540, value: 0},
			madamCherryCounter: {id: 159461287, value: 0},
			duchessFranCounter: {id: 1009742711, value: 0},
			missGingerCounter: {id: 1580922975, value: 0},
			tasteBoxCounter: {id: 1420066394, value: 0},
			vragenOpmerking: {id: 1750870435, value: ''},
			verzending: {id: 50357737, value: ''},
			eighteenPlus: {id: 69530754, value: true}
		},
	}

	updateValue = (key, value) => {
		console.log(key, value)
		this.setState({form: {...this.state.form, [key]: {...this.state.form[key], value}}});
	}

	submit = async(e) => {
		e.preventDefault();

		const formData = new FormData();

		Object.keys(this.state.form).forEach(i => {
			formData.append(`entry.${this.state.form[i].id}`, this.state.form[i].value)
		})
		formData.append('emailAddress', this.state.emailAddress);

		await axios({
			url: `${config.cors}${config.formUrl}`,
			method: 'post',
			data: formData,
			responseType: 'json'
		})
			.then(response => {
				console.log('response', response);
			})
			.catch(err => {
				console.log('err', err);
			})
	}

	render () {
		let {t} = this.props;

		console.log (this.state)
		return (
			<div >
				<div>
					<h1>{t('Via dit formulier kan je je bestelling plaatsen.')}</h1>
					<h3>{t('Hoe werkt het?')}</h3>
					<p className={'apple-text'}><img src="Images/greenapple.png" alt="apple" height="16px"/>{t('Vul onderstaand formulier in.')}</p>
					<p className={'apple-text'}><img src="Images/redapple.png" alt="apple" height="16px"/>{t('Je ontvangt van ons een e-mail met de betaalgegevens.')}</p>
					<p className={'apple-text'}><img src="Images/pinkapple.png" alt="apple" height="16px"/>	{t('Maak de betaling in orde.')}</p>
					<p className={'apple-text'}><img src="Images/yellowapple.png" alt="apple" height="16px"/>{t('Wij sturen je een mail om de betaling de bevestigen en de details voor de verzending of ophaling van jouw bestelling.')}</p>
				</div>

				<h2>{t('Binnenkort kan je hier bestellen')}</h2>

				<div className={'d-flex justify-content-center'}>
					<Form className={'w-75'} onSubmit={this.submit}>
						<h3>Persoonlijke data</h3>
						<ControlledInput label={'E-mailadres'} value={this.state.emailAddress} onChange={e => this.setState({'emailAddress': e})} />
						<ControlledInput label={'Voornaam'} value={this.state.form.voorNaam.value} onChange={e => this.updateValue('voorNaam', e)} />
						<ControlledInput label={'Achternaam'} value={this.state.form.achterNaam.value} onChange={e => this.updateValue('achterNaam', e)} />
						<ControlledInput label={'Straat'} value={this.state.form.straat.value} onChange={e => this.updateValue('straat', e)} />
						<ControlledInput label={'Huisnummer'} value={this.state.form.huisNummer.value} onChange={e => this.updateValue('huisNummer', e)} />
						<ControlledInput label={'Postbus'} value={this.state.form.postBus.value} onChange={e => this.updateValue('postBus', e)} />
						<ControlledInput label={'Postcode'} value={this.state.form.postCode.value} onChange={e => this.updateValue('postCode', e)} />
						<ControlledInput label={'Plaats'} value={this.state.form.plaats.value} onChange={e => this.updateValue('plaats', e)} />

						<h3>Bestelling</h3>

						<ControlledInput type={'number'} min={0}
							label={'Lady Barbara 500ml (17%) - € 14,95/stuk'}
							value={this.state.form.ladyBarbaraCounter.value}
							prepend={'Aantal'}
							onChange={e => this.updateValue('ladyBarbaraCounter', e)}
							append={(this.state.form.ladyBarbaraCounter.value * 14.95).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'})}
						/>

						<ControlledInput type={'number'} min={0}
							label={'Madam Cherry 500ml (17%) - € 14,95/stuk'}
							value={this.state.form.madamCherryCounter.value}
							prepend={'Aantal'}
							onChange={e => this.updateValue('madamCherryCounter', e)}
							append={(this.state.form.madamCherryCounter.value * 14.95).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'})}
						/>

						<ControlledInput type={'number'} min={0}
							label={'Duchess Fran 500ml (17%) - € 14,95/stuk'}
							value={this.state.form.duchessFranCounter.value}
							prepend={'Aantal'}
							onChange={e => this.updateValue('duchessFranCounter', e)}
							append={(this.state.form.duchessFranCounter.value * 14.95).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'})}
						/>

						<ControlledInput type={'number'} min={0}
							label={'Miss Ginger 500ml (17%) - € 14,95/stuk'}
							value={this.state.form.missGingerCounter.value}
							prepend={'Aantal'}
							onChange={e => this.updateValue('missGingerCounter', e)}
							append={(this.state.form.missGingerCounter.value * 14.95).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'})}
						/>

						<ControlledInput type={'number'} min={0}
							label={'Taste Box - € 24,95'}
							value={this.state.form.tasteBoxCounter.value}
							prepend={'Aantal'}
							onChange={e => this.updateValue('tasteBoxCounter', e)}
							append={(this.state.form.tasteBoxCounter.value * 24.95).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'})}
						/>
						<label className={'text-muted'}> Vergeet niet om bij opmerkingen aan te geven welke smaak u verkiest, keuze uit: Madam Cherry, Lady Barbara, Miss Ginger, Empress Fran </label>

						<ControlledInput as={'textarea'}
							label={'Vragen/opmerkingen bij de bestelling'}
							value={this.state.form.vragenOpmerking.value}
										 max={100}
							onChange={e => this.updateValue('vragenOpmerking', e)}
						/>

						<label>Verzending</label>
						<InputGroup>
							<DropdownButton title={'verzending'} variant={'outline'} onSelect={e => {
								this.updateValue('verzending', e)
							}}>
								<Dropdown.Item href={"Gratis ophalen - Free pick up in Glabbeek (bij Amber)"}>Gratis ophalen - Free pick up in Glabbeek (bij Amber)</Dropdown.Item>
								<Dropdown.Item>Gratis ophalen - Free pick up in Boortmeerbeek (bij Dylan)</Dropdown.Item>
								<Dropdown.Item>Gratis ophalen - Free pick up in Leuven (bij Elvira)</Dropdown.Item>
								<Dropdown.Item>Gratis ophalen - Free pick up in Heusden-Zolder (bij Wout)</Dropdown.Item>
								<Dropdown.Divider/>
								<Dropdown.Item>Verzending in België (+verzendkost) - Shipping in Belgium (+shipping cost)</Dropdown.Item>
							</DropdownButton>
						</InputGroup>

						{/* TODO: Ik ben ouder dan 18 jaar vinkje */}

						<Button type={'submit'}>Bestel!</Button>

					</Form>

				</div>
				<div>
					<iframe title={'google-form-to-order'} src="https://docs.google.com/forms/d/e/1FAIpQLSelNyws3oJTpKF0n8Icz0UZ7GZBO2gEuU6v6a64xI1qWxCBdg/viewform?embedded=true" style={{display:"inline-block", width:"100%", height: "203em", border:"hidden"}}>Laden…</iframe>
				</div>

				<div style={{display:"flex", justifyContent: "center"}}>
					<img src="Images/alcoholverbod.jpg" alt={'banner-alcoholwet-10-dec-2009'}/>
				</div>
			</div>
		)

	}
}

export default withNamespaces ('orders') (Orders);
