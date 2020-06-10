import styled from 'styled-components';

export const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
    }

    img {
        width: 100px;
    }

    span {
        @media (max-width: 768px) {
            display: none;
        }
    }
`