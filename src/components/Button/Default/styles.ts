import styled from 'styled-components';

export const ButtonContainer = styled.button<{ $width?: string}>`
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  font-size: ${({ theme }) => theme.normalSize};;
  font-weight: 500;
  border: none;
  border-radius: 100px;
  padding: 12px 20px;
  width: ${({ $width }) => $width ? $width : '100%'};
`;