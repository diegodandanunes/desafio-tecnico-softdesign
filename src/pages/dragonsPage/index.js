import React, { useEffect, useState } from 'react';
import axios from 'axios';

import endpoints from '../../common/endpoints';
import Spinner from '../../components/spinner';
import { ContainerDragons } from '../../common/containers';
import Dragon from '../../components/dragon';
import { Dragons } from './style';

const DragonsPage = props => {

    const [dragons, setDragons] = useState([{id: '', type: '', history: '', name: ''}]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {  
        setLoading(true);
        axios.get(endpoints.DRAGONS_ENDPOINT)
            .then(response => {
                setLoading(false);
                setDragons(response.data);
            })
            .catch(err => console.log('Erro ao buscar dragões ', err))
    }, []);

    return (
        <Dragons>
            <h1>Dragon List</h1> 
            <p onClick={() => props.history.push('/create')}>Criar dragão</p>

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