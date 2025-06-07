import styled from 'styled-components';

export const ButtonContainer = styled.button<{ $width?: string; $secondary?: boolean}>`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme, $secondary }) => $secondary ? theme.buttonLightColor : theme.primaryColor};
  color: ${({ $secondary }) => $secondary ? '#000' : '#fff'};
  font-size: ${({ theme }) => theme.normalSize};;
  font-weight: 500;
  border: none;
  border-radius: 100px;
  padding: 12px 20px;
  width: ${({ $width }) => $width ? $width : '100%'};
`;