import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Auth from '../../auth';
import { Container, ContainerInput } from '../../common/containers';
import { LoginForm } from './style';
import { Input } from '../../components/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const LoginPage = props => {
    const { handleSubmit, register, formState } = useForm({ mode: 'onChange' });
    const [hasError, setError] = useState(false);

    const onLogin = data => {
        Auth.login(data);
        Auth.authenticated ? props.history.push('/dragons') : setError(true);
    };
    
    return (
        <Container>
            <LoginForm>
                <form onSubmit={(handleSubmit(onLogin))}>
                    <h2>Login</h2>
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
                    <button disabled={!formState.isValid} className="login__submit" type="submit">Login</button>

                    <Link to="/register"><button className="login__signup" type="button">Registrar</button></Link>
                    { hasError ? <h5>Usuário ou senha incorretos</h5> : '' }
                </form>
            </LoginForm>
        </Container>
    )
}

export default LoginPage;