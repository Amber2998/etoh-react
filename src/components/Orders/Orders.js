import React from 'react';


export default () => {
	return (
		<div >
			<div>
				<h1> Via dit formulier kan je je bestelling plaatsen.</h1>
				<h2> Hoe werkt het?</h2>
				<ol>
					<li> Vul onderstaand formulier in.</li>
					<li> Je ontvangt van ons een e-mail met de betaalgegevens.</li>
					<li> Maak de betaling in orde.</li>
					<li> Wij sturen je een mail om de betaling de bevestigen en de details voor de verzending of ophaling van jouw bestelling.</li>
				</ol>
			</div>
			<div >
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelNyws3oJTpKF0n8Icz0UZ7GZBO2gEuU6v6a64xI1qWxCBdg/viewform?embedded=true" style={{display:"inline-block", width:"100%", height: "203em", border:"hidden"}}>Laden…</iframe>
			</div>
			<div style={{display:"flex", justifyContent: "center"}}>
				<img src="Images/alcoholverbod.jpg" />
			</div>
		</div>
	)
}
