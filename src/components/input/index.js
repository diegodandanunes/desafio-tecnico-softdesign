import React from 'react';

import { InputStyle } from './style';

export const Input = React.forwardRef((props, ref) => {
    return (
        <InputStyle 
            placeholder={props.placeholder} 
            type={props.type}
            id={props.id}
            name={props.name}
            ref={ref} 
            autoComplete="off"
            className={props.noIndent ? 'no-indent' : ''}
        />
    )
})