import styled from '@emotion/styled';

export const Btn = styled.button`

  width: 100px;
  padding: 5px 10px;

  border: none;
  border-radius: 8px;

  background-color: #FFC0CB;
  transition: background-color 150ms linear, box-shadow 150ms linear,
    color 150ms linear;
  color: #808080;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #FF6961;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
