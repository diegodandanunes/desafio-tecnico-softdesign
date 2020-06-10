import React, { useEffect, useState } from 'react';
import axios from 'axios';

import endpoints from '../../common/endpoints';
import Spinner from '../../components/spinner';
import { ContainerDragons } from '../../common/containers';
import Dragon from '../../components/dragon';
import { Dragons } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DragonsPage = props => {

    const [dragons, setDragons] = useState([{id: '', type: '', name: ''}]);
    const [isLoading, setLoading] = useState(true);

    const sortDragons = dragons => {
        return dragons.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    useEffect(() => {  
        setLoading(true);
        axios.get(endpoints.DRAGONS_ENDPOINT)
            .then(response => {
                setLoading(false);
                setDragons(sortDragons(response.data));
            })
            .catch(err => console.log('Erro ao buscar dragões ', err))
    }, []);

    return (
        <Dragons>
            <h1>Lista de dragões disponíveis</h1> 
            <span className="dragons__create-dragon" onClick={() => props.history.push('/create')}> 
                <FontAwesomeIcon icon={faPlus} />
                Criar dragão
            </span>

            <ContainerDragons>
                { isLoading 
                    ? 
                    <Spinner />
                    :
                    dragons.map(dragon => {
                        return <Dragon key={dragon.id} data={dragon} />
                    })
                }
            </ContainerDragons>
        </Dragons>
    )
}

export default DragonsPage;