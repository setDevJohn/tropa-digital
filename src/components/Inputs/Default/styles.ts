import styled from 'styled-components';

export const DefaultInputContainer = styled.input<{$error?: boolean}>`
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.lightColorFont};
  border-radius: 100px;
  border: none;
  outline: ${({ $error }) => $error ? '1px solid red' : 'none'};
  padding: 12px 20px;

  &::placeholder {
    color: ${({ theme }) => theme.lightColorFont};
  }

  &:focus {
    border: none;
  }
`;