import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { Container } from '../../common/containers';
import { Input } from '../../components/input';
import { CreateDragon } from './style';
import endpoints from '../../common/endpoints';
import Spinner from '../../components/spinner';
import { BackButton } from '../../components/backButton';

const CreateDragonPage = props => {
    const { handleSubmit, register, formState } = useForm({ mode: 'onChange' });
    const [isLoading, setLoading] = useState(false);

    const onSaveDragon = data => {
        setLoading(true);
        axios.post(endpoints.DRAGONS_ENDPOINT, data)
            .then(response => {
                setLoading(false);
                props.history.push('/dragons');
            })
            .catch(err => console.log(err))
    }
    
    return (
        <Container>
            {
                isLoading 
                    ? 
                    <Spinner />
                    :
                    <CreateDragon>
                        <form onSubmit={(handleSubmit(onSaveDragon))}>
                            <h2>Criar Dragão</h2>
                            <Input 
                                ref={
                                    register({
                                        required: true,
                                        maxLength: 20
                                    })
                                }
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Nome" 
                                autoComplete="off"
                                noIndent
                                />
                            <Input 
                                ref={
                                register({
                                    required: true,
                                    maxLength: 20
                                })
                                }
                                type="type" 
                                name="type" 
                                id="type" 
                                placeholder="Tipo"
                                noIndent
                            />
                            <Input 
                                ref={
                                register({
                                    required: true
                                })
                                }
                                type="history" 
                                name="history" 
                                id="history" 
                                placeholder="História"
                                noIndent
                            />

                            <button disabled={!formState.isValid} className="create__submit" type="submit">Criar</button>
                            <BackButton where="/dragons"/>
                        </form>
                    </CreateDragon>
            }
        </Container>
    )
}

export default CreateDragonPage;