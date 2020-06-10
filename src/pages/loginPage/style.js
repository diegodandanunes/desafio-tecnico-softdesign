import styled from 'styled-components';
import colors from '../../common/colors';

export const LoginForm = styled.div`
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

    .login__submit {
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

    .login__submit:disabled {
        opacity: 0.3;
    }

    .login__signup {
        background: transparent;
        box-sizing: border-box;
        padding: 10px 30px;
        border-radius: 5px;
        border: 2px solid ${colors.lightBlue};
        color: ${colors.lightBlue};
        cursor: pointer;
        margin-left: 5px;

        @media (max-width: 540px) {
            width: 100%;
            display: block;
            margin: 5px 0 0 0;
        }
    }

    h5 {
        color: #ff4545;
        margin-top: 10px;
    }

    .fa-user, .fa-key {
        color: ${colors.lightGreen};
        position: absolute;
        top: 17px;
        left: 17px;
    }
`

export const SuccessMessage = styled.div`
    color: ${colors.lightBlue};
    margin-top: 10vh;

    span {
        margin: 0;
    }
`