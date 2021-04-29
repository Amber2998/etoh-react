import React from 'react';
import { withNamespaces } from 'react-i18next';

class Recepten extends React.Component {
	render () {
		let {t} = this.props;
		return (
             <div >
					<h1>{t('Recepten')}</h1>
                         <p>{t('Hier kan je verschillende recepten vinden die gemaakt worden met onze dames. Probeer, proef en geniet!')}
            </div>
            
            
            
            
            
            
            
            
            )
	}
}

export default withNamespaces('recepten') (Recepten);
