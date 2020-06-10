import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/input';
import { Container, ContainerInput } from '../../common/containers';
import { LoginForm, SuccessMessage } from '../loginPage/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { BackButton } from '../../components/backButton';

const RegisterPage = () => {
    const { handleSubmit, register, formState } = useForm({ mode: 'onChange' });
    const [isSubmitted, setSubmitted] = useState(false);

    const onCreateProfile = data => {
        localStorage.setItem(data.usuario, data.password);
        setSubmitted(true);
    }

    return (
        <Container>
            { !isSubmitted ? 
                <LoginForm>
                    <form onSubmit={handleSubmit(onCreateProfile)}>
                        <h2>Cadastrar usuário</h2>
                        <ContainerInput>
                            <FontAwesomeIcon icon={faUser} />
                            <Input 
                                ref={
                                    register({
                                        required: true
                                    })
                                }
                                type="text" 
                                name="usuario" 
                                id="usuario" 
                                placeholder="Usuário" 
                                autoComplete="off" 
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <FontAwesomeIcon icon={faKey} />
                            <Input 
                                ref={
                                register({
                                    required: true
                                })
                                }
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Senha"
                            />
                        </ContainerInput>
                        
                        <button disabled={!formState.isValid} className="login__submit" type="submit">Criar usuário</button>
                        <BackButton where="/" />
                    </form>
                </LoginForm>
            : 
            <SuccessMessage>
                <h2>Usuário cadastrado com sucesso.</h2>
                <BackButton where="/" />
            </SuccessMessage>
            }
        </Container>
    )
}

export default RegisterPage;