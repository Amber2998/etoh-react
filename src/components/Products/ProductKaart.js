import React from 'react';
import { Card } from 'react-bootstrap';

export default class ProductKaart extends React.Component {

	render () {
		let {leftImage, appleImage, title, subtitle, text, rightImage, titleColor, prijs} = this.props;
		return <Card className={'my-2'}>
				<div className={'d-flex flex-column flex-md-row'}>
					<Card.Img className={'container-fluid'} src={leftImage} style={{height:'14em', width: 'auto', objectFit: 'cover'}}/>

					<div className={'d-flex'}>
						<Card.Body>
							<Card.Title className={'d-flex flex-row-reverse'}>
								<span className='d-flex flex-column' style={{color: titleColor, fontWeight: "bolder", fontSize: "24px"}}>
									<div className={'apple-text'}>
										<img src={appleImage} alt="apple" height="24px"/>
										{title}
									</div>
									<i className={'sub-text'}>{subtitle}</i>
								</span>
							</Card.Title>

							<Card.Text>
								<p>{text}</p>
								<h4 style={{fontSize: '14px'}}>{prijs}</h4>
							</Card.Text>
						</Card.Body>

						<Card.Img src={rightImage} style={{height:'14em', width: 'auto', objectFit: 'cover'}}/>

					</div>
				</div>
			</Card>
	}
}
