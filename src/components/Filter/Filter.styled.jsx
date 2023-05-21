import styled from '@emotion/styled';

export const Head = styled.h3`
  font-size: 24px;
  text-align: center;
`;

export const Input = styled.input`
  transition: box-shadow 0.3s ease-in-out;
  padding: 5px;
  border-radius: 8px;
  border-color: #add8e6;
  margin-top: 10px;
`;

export const Label = styled.label`
  display: flex;

  flex-direction: column;

  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;

  &:hover Input,
  &:focus Input {
    box-shadow: 0 0 5px #000;
  }
`;
