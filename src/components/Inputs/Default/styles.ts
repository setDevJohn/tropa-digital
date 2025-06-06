import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DefaultInputContainer = styled.input<{$error?: boolean; $width?: string}>`
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.lightColorFont};
  border-radius: 100px;
  border: none;
  outline: ${({ $error }) => $error ? '1px solid red' : 'none'};
  padding: 12px 20px;
  width: ${({ $width }) => $width ? $width : '100%'};

  &::placeholder {
    color: ${({ theme }) => theme.lightColorFont};
  }

  &:focus {
    border: none;
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;