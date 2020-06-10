import React from 'react';
import { Link } from 'react-router-dom';

import { BackButtonStyle } from './style';

export const BackButton = props => {

    return (
        <Link to={props.where}>
            <BackButtonStyle>Voltar</BackButtonStyle>
        </Link>
    )
}