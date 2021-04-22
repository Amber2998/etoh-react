import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export class BoxKaart extends React.Component {

	render () {
		let {leftImage, title, text, listItems, prijs} = this.props;
		return <Card className={'my-2'}>
			<div className={'d-flex flex-column flex-md-row align-items-center'}>
				<Card.Img src={leftImage} style={{width: '16em', objectFit: 'cover'}}/>

				<Card.Body className={'d-flex flex-column align-items-lg-end align-items-center'}>
					<Card.Title className={'d-flex flex-row-reverse'}>
						<span style={{color: "gray", fontWeight: "bolder", fontSize: "24px"}}>{title}</span>
					</Card.Title>

					<Card.Text >
						<p> {text}</p>

						<ListGroup variant={'flush'}>
							{ listItems.map(e => <ListGroup.Item className={'pl-0'}>{e}</ListGroup.Item> ) }
						</ListGroup>
						<h4 style={{fontSize: '14px'}}>{prijs}</h4>
					</Card.Text>
				</Card.Body>
			</div>
		</Card>
	}
}

export default (BoxKaart)
