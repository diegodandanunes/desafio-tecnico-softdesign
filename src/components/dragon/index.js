import React from 'react';
import {Link} from 'react-router-dom';

import { DragonCard } from './style';
import DragonImage from '../../images/dragon.jpg';

const Dragon = props => {


    const linkStyle = {
        textDecoration: 'none'
    }

    const formatDate = date => {
        const isoDate = new Date(date);
        return `${isoDate.getDate()}/${isoDate.getMonth()+1}/${isoDate.getFullYear()}`;
    }
    
    return (
        <Link style={linkStyle} to={`/dragon/${props.data.id}`}>
            <DragonCard>
                <div className="dragon__infoWrapper">
                    <div className="dragon__image-wrapper">
                        <img src={DragonImage} alt="Dragon"/>
                    </div>
                    <span className="dragon__dragon-name">{props.data.name}</span>
                    <span className="dragon__dragon-data">{props.data.createdAt ? formatDate(props.data.createdAt) : ''}</span>
                    <span className="dragon__dragon-tipo">{props.data.type}</span>
                </div>
            </DragonCard>
        </Link>
    )
}

export default Dragon;