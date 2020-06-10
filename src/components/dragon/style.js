import styled from 'styled-components';
import colors from '../../common/colors';

export const DragonCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 2px solid ${colors.lightGreen};
    height: 180px;
    width: 15vw;
    min-width: 90px;
    border-radius: 5%;
    margin: 20px;
    padding: 20px;
    transition: box-shadow 0.3s;
    background-color: #fff;

    @media (max-width: 540px) {
        height: 200px;
    }

    :hover {
        box-shadow: 5px 5px 43px -15px rgba(255,255,255,1);
    }

    .dragon__infoWrapper {
        display: flex;
        flex-direction: column;
    }

    span {
        color: ${colors.darkBlue}
    }

    span a {
        text-decoration: none;
        color: ${colors.lightBlue};
        margin-top: 8px;
    }

    .dragon__image-wrapper {
        width: 65px;
        margin: 0 auto 15px auto;
    }

    img {
        border-radius: 100%;
        width: 100%;
    }

    .dragon__dragon-name {
        font-size: 20px;
    }

    .dragon__dragon-data {
        font-size: 10px;
        margin: 10px auto;
    }

    .dragon__dragon-tipo {
        /* position: relative;
        top: 22px;
        background-color: ${colors.lightBlue};
        padding: 4px 0 6px 0;
        color: ${colors.darkBlue};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
    }

`