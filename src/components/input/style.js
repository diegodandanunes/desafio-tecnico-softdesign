import styled from 'styled-components';
import colors from '../../common/colors';

export const InputStyle = styled.input`

    display: block;
    width: 30vw;
    max-width: 100%;
    border-radius: 5px;
    border: 2px solid ${colors.lightBlue};
    background-color: ${colors.darkBlue};
    padding: 15px 10px;
    margin-bottom: 15px;
    color: ${colors.lightBlue};
    transition: all 0.3s;
    text-indent: 30px;

    &.no-indent {
        text-indent: 8px;
    }

    @media (max-width: 540px) {
        width: 100%;
        padding: 15px 0;
        text-indent: 36px;
    }

    ::placeholder {
        color: #4099d2;  
    }

    :focus {
        background-color: ${colors.lightBlue};
        color: ${colors.darkBlue};
        border: 2px solid ${colors.darkBlue};
        outline: none;
    }

    :focus::placeholder {
        color: ${colors.darkBlue}
    }
`