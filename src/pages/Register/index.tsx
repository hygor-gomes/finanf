import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import {
  RegisterPageContainer,
  RegisterBox,
  RegisterHeader,
  BackButton,
  RegisterTitle,
  InputField,
  RegisterButton,
} from "./styles";

export const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleBackToLogin = () => {
    navigate('/');
  }

  return (
    <RegisterPageContainer>
      <RegisterBox>
        <RegisterHeader>
          <BackButton onClick={handleBackToLogin}>&lt;</BackButton>
          <RegisterTitle>Criar Conta</RegisterTitle>
        </RegisterHeader>

        <InputField
          type="text"
          value={name}
          onChange={handleNameInput}
          placeholder="Digite seu nome"
        />
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

        <RegisterButton>Registrar</RegisterButton>
      </RegisterBox>
    </RegisterPageContainer>
  );
};
