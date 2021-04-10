import React from 'react';
import { Form as BForm } from 'react-bootstrap';

const SelectField = ({field, form, id, label, onChange,  ...props}) => {
	return <div className={'d-flex'}>
		<BForm.Switch id={id} onChange={e => onChange(e, field, form)} {...props} />
		{label}
	</div>
}

export default SelectField;
