import React from 'react';


const Contact = () => {
	return (
		<div>

			<h1> Contacteer ons!</h1>

			<div class="card" style={{margin: "1em 0"}}>
				<div class="row">
					<div class="col-md-8">
						<div class="card-body">
							<div class="card-text ">
								<p> Team EtOH<br/>
									etohbeverages@gmail.com<br/>
									0478/23.90.16<br/>
									Dries 12 <br/>
									3380 Glabbeek
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="fb-page" data-href="https://www.facebook.com/EtOHBeverages" data-tabs="" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
							<blockquote cite="https://www.facebook.com/EtOHBeverages" class="fb-xfbml-parse-ignore">
							<a href="https://www.facebook.com/EtOHBeverages">Et0H Beverages</a>
						</blockquote>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
