import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import endpoints from '../../common/endpoints'
import { DragonDetails, DeleteSuccess } from './style'
import { Container } from '../../common/containers';
import Spinner from '../../components/spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { BackButton } from '../../components/backButton';

const DragonPage = props => {
    let { id } = useParams();
    const [dragon, setDragon] = useState([{id: '...', type: '...', history: '...', name: '...', createdAt: '...'}]);
    const [isLoading, setLoading] = useState(false);
    const [isDeleted, setDeleted] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(endpoints.DRAGONS_ENDPOINT + `/${id}`)
            .then(response => {
                setDragon(response.data);
                setLoading(false);
            });
    }, [id]);

    const saveChanges = () => {
        setLoading(true);
        const changes = {
            name: document.getElementById('dragonName').innerText, 
            type: document.getElementById('dragonType').innerText,
            history: document.getElementById('dragonHistory').innerText
        }
        axios.put(endpoints.DRAGONS_ENDPOINT + `/${id}`, changes)
            .then(() => {
                setLoading(false);
                setDragon(changes);
            })
            .catch(err => console.log('Houve um erro ao editar esse dragão', err));
    }

    const deleteDragon = () => {
        axios.delete(endpoints.DRAGONS_ENDPOINT + `/${id}`)
            .then(() => setDeleted(true))
            .catch(err => console.log('Houve um erro ao deletar esse dragão'));
    }

    return (
        <Container>
            {
                isDeleted 
                    ?
                    <DeleteSuccess>
                        <h2>Dragão deletado com sucesso</h2>
                        <BackButton where="/dragons"/>
                    </DeleteSuccess>
                    :
                    <>
                        { isLoading 
                            ?
                            <Spinner />
                            :
                            <DragonDetails>
                                <h1 contentEditable={true} suppressContentEditableWarning={true} id="dragonName">{dragon.name}</h1>
                                <span>
                                    <FontAwesomeIcon icon={faEdit} />  Para editar esse dragão, basta clicar em qualquer campo e editá-lo
                                </span>
                                <h6 contentEditable={true} suppressContentEditableWarning={true} id="dragonType">{dragon.type}</h6>
                                <p contentEditable={true} suppressContentEditableWarning={true} id="dragonHistory">
                                    {dragon.history ? dragon.history : 'Nenhuma história para esse dragão por enquanto.'}
                                </p>
        
                                <div className="dragon__action-wrapper">
                                    <button className="dragon__save-changes" onClick={() => saveChanges()}>Salvar alterações</button>
                                    <button className="dragon__delete-dragon" onClick={() => deleteDragon()}>Excluir Dragão</button>
                                    <BackButton where="/dragons"/>
                                </div>
                            </DragonDetails>
                        }
                    </>
            }

        </Container>
    )
}

export default DragonPage;