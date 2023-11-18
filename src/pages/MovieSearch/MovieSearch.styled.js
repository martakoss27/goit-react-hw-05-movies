import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 800px;
  background-color: #f2f2f2;
  border-radius: 25px;
  padding: 5px 15px;
  margin: 20px 0 20px 0;
`;

export const InputStyled = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: orangered;
  padding: 8px 15px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
