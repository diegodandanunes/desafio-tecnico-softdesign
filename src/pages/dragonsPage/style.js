import styled from 'styled-components';
import colors from '../../common/colors';

export const Dragons = styled.div`
    text-align: center;

    h1 {
        margin: 35px 0 10px 0;
        color: ${colors.lightGreen};
        font-size: 26px;
        text-align: center;
    }

    .dragons__create-dragon {
        margin: 15px auto;
        text-align: center;
        color: ${colors.lightBlue};
        cursor: pointer;
        display: inline-block;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid ${colors.lightBlue};
    }

    .dragons__create-dragon .fa-plus {
        margin-right: 5px;
        color: ${colors.lightGreen};
    }
`