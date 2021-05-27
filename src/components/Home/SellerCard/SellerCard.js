import React from 'react';
import { Button, Card, CardImg, Image } from 'react-bootstrap';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SellerCard = ({title, image, address, addresslink, phone, email, website }) => {
	return <React.Fragment>
		<Card className={'flex-grow-1 m-3'}>
			{/*<Card.Header className={''}><span className={'m-0'} style={{fontSize: '1.25em'}}>{title}</span></Card.Header>*/}
			<Card.Header style={{color: '#E6007E'}} >{title}</Card.Header>
			<div className={'m-3'}>
				<div className={'d-flex flex-row justify-content-between align-items-center'}>
					<CardImg className={'mr-2'} src={image} style={{height: '10em', width: '10em'}} as={e => <LazyLoadImage effect={'blur'} {...e}/>}/>
					<Card.Text className={'ml-2'}>
						<div>
							{address && <Button className={'d-flex justify-content-start align-items-center'} variant={'minimal'} href={addresslink} style={{borderBottom: 'solid 1px', width: '100%'}}>
								<Image src={'Icons/map-marker-alt-solid.svg'} style={{height: '1em', width: '1em', marginRight: '0.25em', color: 'pink'}}/>
								<span className={'d-flex flex-wrap'}>{address}</span>
							</Button>}
							{phone&& <Button className={'d-flex justify-content-start align-items-center'} variant={'minimal'} href={'tel:' + phone} style={{borderBottom: 'solid 1px', width: '100%'}}>
								<Image src={'Icons/phone-alt-solid.svg'} style={{height: '1em', width: '1em', marginRight: '0.25em'}}/>
								<span >{phone}</span>
							</Button>}
							{email &&<Button className={'d-flex justify-content-start align-items-center'} variant={'minimal'} href={'mailto:'+email} style={{borderBottom: 'solid 1px', width: '100%'}}>
								<Image src={'Icons/envelope-solid.svg'} style={{height: '1em', width: '1em', marginRight: '0.25em'}}/>
								<span>{email}</span>
							</Button>}
							{website && <Button className={'d-flex justify-content-start align-items-center'} variant={'minimal'} href={'https://'+website} style={{borderBottom: 'solid 1px', width: '100%'}}>
								<Image src={'Icons/globe-solid.svg'} style={{height: '1em', width: '1em', marginRight: '0.25em'}}/>
								<span>{website}</span>
							</Button>}
						</div>
					</Card.Text>

				</div>
			</div>
		</Card>
	</React.Fragment>
}

export default SellerCard;
