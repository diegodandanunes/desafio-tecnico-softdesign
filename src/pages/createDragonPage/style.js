import styled from 'styled-components';
import colors from '../../common/colors';

export const CreateDragon = styled.div`
    margin-top: 10vh;
    display: flex;
    align-content: center;
    justify-content: center;

    @media (max-width: 540px) {
        width: 100%;
    }

    h2 {
        color: ${colors.lightGreen}
    }

    form {
        @media (max-width: 540px) {
            width: 100%;
        }
    }

    .create__submit {
        background: rgb(64,153,210);
        background: linear-gradient(90deg, rgba(64,153,210,1) 0%, rgba(61,230,175,1) 100%);
        padding: 10px 30px;
        border-radius: 5px;
        border: 2px solid ${colors.lightGreen};
        color: ${colors.darkBlue};
        cursor: pointer;

        @media (max-width: 540px) {
            width: 100%;
            display: block;
        }
    }

    .create__submit:disabled {
        opacity: 0.3;
    }

    .create__return {
        color: #4099d2;
        font-style: italic;
        text-decoration: none;
        margin-left: 15px;
        cursor: pointer;

        @media (max-width: 540px) {
            margin-top: 10px;
            margin-left: 0;
            display: block;
        }
    }

    h5 {
        color: #ff4545;
        margin-top: 10px;
    }
`

export const SuccessMessage = styled.div`
    color: ${colors.lightGreen};
    margin-top: 10vh;

    p {
        color: ${colors.lightBlue};
        font-size: 13px;
    }
`