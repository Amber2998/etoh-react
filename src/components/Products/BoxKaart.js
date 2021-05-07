import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export class BoxKaart extends React.Component {

	render () {
		let {leftImage, title, text, listItems, prijs, rightImage} = this.props;
		return <Card className={'my-2'}>
			<div className={'d-flex flex-column flex-md-row align-items-center'}>
				{!!leftImage && <div className={'d-flex col-7 justify-content-center'} style={{padding: 0}}>
					<Card.Img
						src={leftImage}
						className={'justify-content-center'}
						style={{ objectFit: 'cover', padding:0}}
						as={e =>  <LazyLoadImage effect={'blur'} {...e}/> }
					/>
				</div>}

				<Card.Body className={'d-flex flex-column align-items-center '}>
					{!! title && <Card.Title className={'d-flex flex-row-reverse align-items-lg-end w-100 '}>
						<span style={{color: "gray", fontWeight: "bolder", fontSize: "24px"}}>{title}</span>
					</Card.Title>}

					<Card.Text className={'w-100'}>
						{ !!text && <p> {text}</p> }

						<ListGroup variant={'flush'}>
							{ listItems.map(e => <ListGroup.Item className={'pl-0'}>{e}</ListGroup.Item> ) }
						</ListGroup>
						{ !!prijs && <h4 style={{fontSize: '14px'}}>{prijs}</h4> }
					</Card.Text>
				</Card.Body>

				{!!rightImage &&<div className={'d-flex col-7 justify-content-center'} style={{padding: 0}}>
					<Card.Img
						src={leftImage}
						className={'justify-content-center'}
						style={{ objectFit: 'cover', padding:0}}
						as={e =>  <LazyLoadImage effect={'blur'} {...e}/> }
					/>
				</div>}
			</div>
		</Card>
	}
}

export default (BoxKaart)
