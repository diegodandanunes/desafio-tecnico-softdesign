import React from 'react';
import { ContainerFluid } from '../../common/containers';

import logo from '../../images/logo.png';
import { HeaderStyle } from './style';

const Header = () => {

    return (
        <header>
            <ContainerFluid>
                <HeaderStyle>
                    <span>Desafio Técnico</span>
                    <img src={logo} alt="Logo Diego Nunes"/>
                    <span>SoftDesign | Sicredi</span>
                </HeaderStyle>
            </ContainerFluid>
        </header>
    )
}

export default Header;