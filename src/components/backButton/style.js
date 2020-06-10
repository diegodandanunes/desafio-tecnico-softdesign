import styled from 'styled-components';
import colors from '../../common/colors';

export const BackButtonStyle = styled.span`

    color: ${colors.lightGreen};
    cursor: pointer;
    margin-left: 15px;

    @media(max-width: 540px) {
        margin: 10px 0 0 0;
        display: block;
    }

`