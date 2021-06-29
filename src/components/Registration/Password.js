import React from 'react';

import Field from './Field';

function Password(props) {
	return (
		<>
			<h3 className="Password">Пароль</h3>
			<div className="inputs">
            	<Field value={props.value[0]} change={props.change[0]} className="field" name="Придумайте пароль" inputType="text" placeholder="•••••••••••••••••••" identificator="passwordText"/>
            	<Field value={props.value[1]} change={props.change[1]} className="field" name="Повторите пароль" inputType="password" placeholder="•••••••••••••••••••" identificator="password"/>
			</div>
		</>
	);
}

export default Password;