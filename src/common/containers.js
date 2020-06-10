import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 30px;
    flex-direction: column;

    @media (max-width: 540px) {
        padding: 20px;
    }
`

export const ContainerDragons = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ContainerFluid = styled.div`
    padding: 20px;
    color: #b4b4b4;
    background-color: #444;
    max-width: 100%;
`

export const ContainerInput = styled.div`
    position: relative;
`