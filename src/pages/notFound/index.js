import React from 'react';
import colors from '../../common/colors';

const NotFound = () => {
    const notFoundStyle = {
        color: colors.lightGreen,
        textAlign: 'center',
        marginTop: '20vh'
    }

    return (
        <h1 style={notFoundStyle}>Página não encontrada</h1>
    )
}

export default NotFound;