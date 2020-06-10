import styled from 'styled-components';

import colors from '../../common/colors';

export const DragonDetails = styled.div`

    color: ${colors.lightBlue};

    h1 {
        color: ${colors.lightGreen};
        display: inline-block;
    }

    h1 + span {
        font-size: 13px;
        color: #fff;
        padding-left: 10px;
        font-style: italic;

        @media(max-width: 540px) {
            display: block;
            padding-left: 0px;
        }
    }

    a {
        color: ${colors.lightBlue};
        display: block;
        font-style: italic;
        text-decoration: none;
    }

    .dragon__action-wrapper {
        display: flex;
        justify-content: left;
        align-items: center;

        @media (max-width: 540px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    
    .dragon__action-wrapper button:nth-child(1) {
        margin-right: 15px;

        @media (max-width: 540px) {
            margin-bottom: 10px;
        }
    }

    .dragon__save-changes {
        background: linear-gradient(90deg, rgba(64,153,210,1) 0%, rgba(61,230,175,1) 100%);
        padding: 10px 15px;
        border-radius: 5px;
        border: 2px solid ${colors.lightGreen};
        color: ${colors.darkBlue};
        cursor: pointer;
    }

    .dragon__delete-dragon {
        background-color: ${colors.red};
        padding: 10px 15px;
        border-radius: 5px;
        border: 2px solid red;
        color: #fff;
        cursor: pointer;
    }
`

export const DeleteSuccess = styled.div`

    margin-top: 20vh;

    h2 {
        color: ${colors.lightBlue};
        text-align: center;
    }

    span {
        margin: 0;
    }
`