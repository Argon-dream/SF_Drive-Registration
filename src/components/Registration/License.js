import React from 'react';

import Field from './Field';

function License(props) {
	return (
		<>
			<h3 className="InfoHeader">Водительское удостоверение</h3>
			<div className="inputs">
            	<Field value={props.value[0]} change={props.change[0]} className="field" name="Серия и номер" inputType="text" placeholder="0000 000000" identificator="license"/>
            	<Field value={props.value[1]} change={props.change[1]} className="field" name="Дата выдачи" inputType="date" identificator="licenseDate"/>
			</div>
		</>
	);
}

export default License;