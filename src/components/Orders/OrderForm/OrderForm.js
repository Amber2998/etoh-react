import React from 'react';
import { Form, Formik, Field } from 'formik'
import axios from 'axios';
import { Button, Spinner, Form as BForm, Alert } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';
import { config, ControlledInput, initialValues, ValidationSchema } from './OrderFormUtils';
import SelectField from './SelectField';
import SuccessAlert from './ConfirmationButton';


class OrderForm extends React.Component {
	state= {
		submitted: false,
		submissionState: 'failure'
	}

	submit = async(e) => {
		const formData = new FormData();

		Object.keys(e).forEach(i => {
			typeof e[i] ==='object'
				? formData.append(`entry.${e[i].id}`, e[i].value)
				: formData.append(i, e[i]);
		})

		await axios({
			url: `${config.formUrl}`,
			method: 'post',
			data: formData,
			responseType: 'json'
		})
			.then(response => {
				console.log('response', response);
				this.setState({submitted: true, submissionState: 'success'})
			})
			.catch(err => {
				console.log('err', err);
				this.setState({submitted: true, submissionState: 'failure'})
			})
	}

	updateValue = (value, field, formik) => {
		formik.setValues ({
			...formik.values,
			[field.name]: {
				...formik.values[field.name], value
			}
		})
	}

	getFieldValue = (field, formik) => formik.values[field.name].value;

	countPrice = (field, formik, price) => (parseInt (formik.values[field.name].value) * price).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'});

	touchField = (field, form) => form.setTouched({...form.touched, [field.name]: true});

	render () {
		let {t} = this.props
		return <React.Fragment>
			<Formik initialValues={initialValues} onSubmit={this.submit} validationSchema={ValidationSchema}>
				{ (props) => {
					return <Form className={'col-lg-9 col-md-10 col-sm-11 col-12'}>
						<Field name={'emailAddress'} label={t('E-mailadres')} component={ControlledInput}
							   disabled={this.state.submitted}
							   onChange={(value, field, form) => form.setFieldValue(field.name, value)}
							   value={(field, form) => form.values[field.name]}
						/>

						<Field value={this.getFieldValue} disabled={this.state.submitted} label={t('Voornaam')} name={'voorNaam'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={t('Achternaam')} name={'achterNaam'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={t('Straat')} name={'straat'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={t('Huisnummer')} name={'huisNummer'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={t('Postbus')} name={'postBus'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={t('Postcode')} name={'postCode'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={t('Plaats')} name={'plaats'} component={ControlledInput} onChange={this.updateValue}/>

						<h3>Bestelling</h3>

						<Field name={'ladyBarbaraCounter'} type={'number'} min={0}
							   label={t('Lady Barbara 500ml (17%) - € 16,95/stuk')}
							   disabled={this.state.submitted}
							   component={ControlledInput}
							   prepend={t('Aantal')}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 16.95)}
						/>

						<Field name={'madamCherryCounter'} type={'number'} min={0}
							   label={t('Madam Cherry 500ml (17%) - € 16,95/stuk')}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={t('Aantal')}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 16.95)}
						/>

						<Field name={'duchessFranCounter'} type={'number'} min={0}
							   label={t('Duchess Fran 500ml (17%) - € 16,95/stuk')}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={t('Aantal')}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 16.95)}
						/>

						<Field name={'missGingerCounter'} type={'number'} min={0}
							   label={t('Miss Ginger 500ml (17%) - € 16,95/stuk')}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={t('Aantal')}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 16.95)}
						/>

                                                         
                        	<Alert variant={''}>
							<Alert.Heading style={{fontSize:'1em'}}>{t('Cadeautip!')}</Alert.Heading>

								<hr style={{margin: '0.5em 0'}}/>
							<Field name={'moederdagBoxCounter'} type={'number'} min={0}
								   label={t('Aperobox - € 49,95')}
								   component={ControlledInput}
								   disabled={this.state.submitted}
								   prepend={t('Aantal')}
								   onChange={this.updateValue}
								   value={this.getFieldValue}
								   append={(field, formik) => this.countPrice(field, formik, 49.95)}
							/>
						</Alert>

                        <Alert variant={''}>
							<Alert.Heading style={{fontSize:'1em'}}>{t('')}</Alert.Heading>
								<hr style={{margin: '0.5em 0'}}/>
	<Field name={'tasteBoxCounter'} type={'number'} min={0}
							   label={t('Taste Box - € 24,95')}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={t('Aantal')}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 24.95)}
						/>

						<label className={'text-muted'}>{t('Vergeet niet om bij opmerkingen aan te geven welke smaak u verkiest, keuze uit: Lady Barbara, Madam Cherry, Duchess Fran, Miss Ginger')}</label>
                         </Alert>


						{/* TODO: textArea */}
						<Field name={'vragenOpmerking'} as={'textarea'}
							   label={t('Vragen/opmerkingen bij de bestelling')}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
						/>

						<Field name={'verzending'} >
							{ ({field, form}) => {
								return <BForm.Group>
									<BForm.Label>{t('Verzending')}</BForm.Label>
									<BForm.Control as={"select"}
										onChange={e => this.updateValue(e.target.value, field, form)}
										onBlur={e => form.setTouched({...form.touched, [field.name]: true})}
										disabled={this.state.submitted}
									>
										<option value={'Gratis ophalen - Free pick up in Glabbeek (bij Amber)'}>{t('Gratis ophalen in Glabbeek (bij Amber)')}</option>
										<option value={'Gratis ophalen - Free pick up in Boortmeerbeek (bij Dylan)'}>{t('Gratis ophalen in Boortmeerbeek (bij Dylan)')}</option>
										<option value={'Gratis ophalen - Free pick up in Leuven (bij Elvira)'}>{t('Gratis ophalen in Leuven (bij Elvira)')}</option>
										<option value={'Gratis ophalen - Free pick up in Heusden-Zolder (bij Wout)'}>{t('Gratis ophalen in Heusden-Zolder (bij Wout)')}</option>
										<option value={'Verzending in België (+verzendkost) - Shipping in Belgium (+shipping cost)'}>{t('Verzending in België (+verzendkost) - Shipping in Belgium (+shipping cost)')}</option>
										<option value={'Tijdelijk gratis verzending in Leuven (postcode 3000)'}>{t('Tijdelijk gratis verzending in Leuven (postcode 3000)')}</option>
									</BForm.Control>
								</BForm.Group>
							} }
						</Field>

						<Field
							name={'eighteenPlus'}
							component={SelectField}
							id={"plusEighteenSwitch"}
							disabled={this.state.submitted}
							onChange={(e, field, form) => {
								this.updateValue(e.target.checked ? 'Ja, ik ben ouder dan 18 jaar - Yes, I am over 18 years old': '', field, form);
								this.touchField(field, form)
							}}
							label={t('Ja, ik ben ouder dan 18 jaar')}
						/>

						{
							!props.values.eighteenPlus.value
							? <Alert className={'my-3'} variant={'danger'}>{t('Je moet minstens 18 jaar oud zijn om te mogen bestellen.')}</Alert>
							: <div className={'d-flex justify-content-end my-3'}>
								{
									props.isSubmitting
										? <Spinner animation={'border'} variant={'secondary'}/>
										: this.state.submitted
											? <SuccessAlert
												variant={'success'}
												heading={t("De bestelling is geplaatst!")}
												text={t("Wij nemen je bestelling zo snel mogelijk in behandeling")}
												style={{width: '100%'}}
											/>
											: <Button
												disabled={props.isSubmitting || this.state.submitted}
												variant={'success'}
												type={'submit'}> {t('Bestel!')} </Button>
								}
							</div>
						}
					</Form>
				}}
			</Formik>
		</React.Fragment>
	}
}


export default withNamespaces ('orderform') (OrderForm);
