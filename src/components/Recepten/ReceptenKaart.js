import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export class ReceptenKaart extends React.Component {

	render () {
		let {leftImage, title, text, listItems, prijs, rightImage, recTitle, stappenplan} = this.props;
		return <Card className={'my-2 p-4'}>
			<div className={'d-flex flex-column flex-md-row align-items-center'}>
				{!!leftImage && <div className={'d-flex col-md-5 justify-content-center'} style={{padding: 0}}>
					<Card.Img src={leftImage} className={'justify-content-center'} style={{ objectFit: 'cover', padding:0}}/>
				</div>}

				<Card.Body className={'d-flex flex-column align-items-center w-100'}>
					{!! title && <Card.Title className={'d-flex flex-row-reverse align-items-lg-end w-100 '}>
						<span style={{color: 'titleColor', fontWeight: "bolder", fontSize: "24px"}}>{title}</span>
					</Card.Title>}

					<Card.Text className={'w-100'}>
						{ !!text && text }

						{!!listItems && <ListGroup >
							{ listItems.map(e => <ListGroup.Item className={''}>{e}</ListGroup.Item> ) }
						</ListGroup>}
						{ !!prijs && <h4 style={{fontSize: '14px'}}>{prijs}</h4> }
					</Card.Text>
				</Card.Body>

				{!!rightImage &&<div className={'d-flex col-md-5 justify-content-center'} style={{padding: 0}}>
					<Card.Img src={rightImage} className={'justify-content-center'} style={{ objectFit: 'cover', padding:0}}/>
				</div>}
			</div>
			<Card.Body>
				<div className={''}>
					{!!recTitle && recTitle}
					<ListGroup variant={'flush'}>
						{ stappenplan.map(e => <ListGroup.Item className={'pl-0'}>{e}</ListGroup.Item> ) }
					</ListGroup>
				</div>
			</Card.Body>
		</Card>
	}
}

export default (ReceptenKaart)
