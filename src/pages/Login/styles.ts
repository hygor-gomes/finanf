import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1c1c1c;
  color: #ffffff;
`;

export const LoginBox = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const InputField = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color:
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;