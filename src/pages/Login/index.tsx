import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import {
    LoginPageContainer,
    LoginBox,
    LoginTitle,
    InputField,
    LoginButton,
    RegisterButton,
  } from './styles';

  export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/main');
            } else {
                alert("Falha no login");
            }
        }
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <LoginPageContainer>
            <LoginBox>
                <LoginTitle>Seja bem-vindo!</LoginTitle>

                <InputField
                    type="text"
                    value={email}
                    onChange={handleEmailInput}
                    placeholder="Digite seu e-mail"
                />
                <InputField
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                    placeholder="Digite sua senha"
                />

                <LoginButton onClick={handleLogin}>Logar</LoginButton>
                <RegisterButton onClick={handleRegister}>Registrar</RegisterButton>
            </LoginBox>
        </LoginPageContainer>
    );
};
