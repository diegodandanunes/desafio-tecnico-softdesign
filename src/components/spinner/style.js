import styled from 'styled-components';

export const SpinnerStyle = styled.div`
    .lds-dual-ring {
    display: inline-block;
    width: 45px;
    height: 45px;
    margin-top: 15vh;
    }

    .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

    }

`