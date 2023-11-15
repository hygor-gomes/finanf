import styled from 'styled-components';

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1c1c1c;
  color: #ffffff;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
`;

export const RegisterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px;
  background-color: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const RegisterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const RegisterTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
