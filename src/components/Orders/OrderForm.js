import React from 'react';
import { Form, Formik, Field } from 'formik'
import axios from 'axios';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const config = {
	cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
	// formUrl: 'https://docs.google.com/forms/d/e/19DIkyyEclnAOMkg5xzQcyE-Zylrvg2ADB0uxietJE4M/formResponse'
	formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSelNyws3oJTpKF0n8Icz0UZ7GZBO2gEuU6v6a64xI1qWxCBdg/formResponse'

};

const ControlledInput = ({field, form, value, label, onChange, prepend, append, ...props}) => {
	return (
		<React.Fragment>
			<label>{label}</label>
			<InputGroup className={'mb-3'}>
				{ !!prepend &&<InputGroup.Prepend>
					<InputGroup.Text>{prepend}</InputGroup.Text>
				</InputGroup.Prepend>}

				<FormControl value={value(field, form)} onChange={e => onChange(e.target.value, field, form)} {...props}/>

				{ !!append && <InputGroup.Append >
					<InputGroup.Text>{append(field,form)}</InputGroup.Text>
				</InputGroup.Append> }
			</InputGroup>
		</React.Fragment>
	)
}

class OrderForm extends React.Component {
	initialValues = {
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

	updateValue = (key, value) => this.setState({form: {...this.state.form, [key]: {...this.state.form[key], value}}});

	submit = async(e) => {
		const formData = new FormData();

		Object.keys(e.form).forEach(i => {
			formData.append(`entry.${e.form[i].id}`, e.form[i].value)
		})
		formData.append('emailAddress', e.emailAddress);

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

	updateValue = (value, field, formik) => {
		formik.setValues ({
			...formik.values,
			'form': {
				...formik.values.form,
				[field.name]: {
					...formik.values.form[field.name], value
				}
			}
		})
	}

	getFieldValue = (field, formik) => formik.values.form[field.name].value;

	countPrice = (field, formik, price) => (parseInt (formik.values.form[field.name].value) * price).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'});

	render () {
		return <React.Fragment>
			<Formik initialValues={this.initialValues} onSubmit={this.submit}>
				{ (props) => (
					<Form className={'w-75'}>
						<Field name={'emailAddress'} label={'E-mailadres'} component={ControlledInput}
							onChange={(value, field, form) => form.setFieldValue(field.name, value)}
							value={(field, form) => form.values[field.name]}
						/>

						<Field value={this.getFieldValue} label={'Voornaam'} name={'voorNaam'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} label={'Achternaam'} name={'achterNaam'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} label={'Straat'} name={'straat'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} label={'Huisnummer'} name={'huisNummer'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} label={'Postbus'} name={'postBus'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} label={'Postcode'} name={'postCode'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} label={'Plaats'} name={'plaats'} component={ControlledInput} onChange={this.updateValue}/>

						<h3>Bestelling</h3>

						<Field name={'ladyBarbaraCounter'} type={'number'} min={0}
							label={'Lady Barbara 500ml (17%) - € 14,95/stuk'}
							component={ControlledInput}
							prepend={'Aantal'}
							onChange={this.updateValue}
							value={this.getFieldValue}
							append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'madamCherryCounter'} type={'number'} min={0}
							label={'Madam Cherry 500ml (17%) - € 14,95/stuk'}
							component={ControlledInput}
							prepend={'Aantal'}
							onChange={this.updateValue}
							value={this.getFieldValue}
							append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'duchessFranCounter'} type={'number'} min={0}
							label={'Duchess Fran 500ml (17%) - € 14,95/stuk'}
							component={ControlledInput}
							prepend={'Aantal'}
							onChange={this.updateValue}
							value={this.getFieldValue}
							append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'missGingerCounter'} type={'number'} min={0}
							label={'Miss Ginger 500ml (17%) - € 14,95/stuk'}
							component={ControlledInput}
							prepend={'Aantal'}
							onChange={this.updateValue}
							value={this.getFieldValue}
							append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'tasteBoxCounter'} type={'number'} min={0}
							label={'Taste Box - € 24,95'}
							component={ControlledInput}
							prepend={'Aantal'}
							onChange={this.updateValue}
							value={this.getFieldValue}
							append={(field, formik) => this.countPrice(field, formik, 24.95)}
						/>
						<label className={'text-muted'}>Vergeet niet om bij opmerkingen aan te geven welke smaak u verkiest, keuze uit: Madam Cherry, Lady Barbara, Miss Ginger, Empress Fran</label>

						{/* TODO: textArea */}
						<Field name={'vragenOpmerking'} as={'textarea'}
							label={'Vragen/opmerkingen bij de bestelling'}
							component={ControlledInput}
							onChange={this.updateValue}
							value={this.getFieldValue}
						/>

						{/* TODO: Ik ben 18+ */}

						<Button type={'submit'}>Bestel!</Button>
					</Form>
				)}
			</Formik>
		</React.Fragment>
	}
}


export default OrderForm;
