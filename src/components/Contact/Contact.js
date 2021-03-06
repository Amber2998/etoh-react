import React from 'react';
import { withNamespaces } from 'react-i18next';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Contact extends React.Component {
	render () {
		let {t} = this.props;
		return (
			<div>
				<h1>{t('Contacteer ons!')}</h1>
				<div className="card" style={{ margin: "1em 0", padding: "1em 1em" }}>
						<div className="card-body d-flex justify-content-between flex-wrap">
							<div className="">
								<div className="card-text ">
									<p> Team EtOH<br/>
										etohbeverages@gmail.com<br/>
										Geheime locatie <br/>
										Ergens in Vlaams-Brabant
									</p>
                        <LazyLoadImage effect={'blur'} src="Images/greenapple.png" alt="apple" height="24px"/>
            <LazyLoadImage effect={'blur'} src="Images/redapple.png" alt="apple" height="24px"/>
            <LazyLoadImage effect={'blur'} src="Images/pinkapple.png" alt="apple" height="24px"/>
            <LazyLoadImage effect={'blur'} src="Images/yellowapple.png" alt="apple" height="24px"/>
            <p></p>
								</div>
							</div>
								<iframe
									title={'facebook-page-reference'}
									src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEtOHBeverages%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
									width="340" height="130" style={{border:'none'}}
									scrolling="no"
									allowFullScreen={true}
									allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
						</div>
				</div>
			</div>
		)
	}
}

export default withNamespaces('contact') (Contact);
