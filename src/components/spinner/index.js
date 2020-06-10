import React from 'react';
import { SpinnerStyle } from './style';

const Spinner = () => {

    return (
        <SpinnerStyle>
            <div className="lds-dual-ring"></div>
        </SpinnerStyle>
    )
}

export default Spinner;