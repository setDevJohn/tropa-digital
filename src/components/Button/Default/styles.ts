import styled from 'styled-components';

import { device } from '../../../styles/responsive';

export const ButtonContainer = styled.button<{ $width?: string; $secondary?: boolean; $round?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${({ theme, $secondary }) => $secondary ? theme.buttonLightColor : theme.primaryColor};
  color: ${({ $secondary }) => $secondary ? '#000' : '#fff'};
  font-size: ${({ theme }) => theme.normalSize};;
  font-weight: 500;
  border: none;
  border-radius: 100px;
  padding: ${({ $round }) => $round ? '15px 20px' : '12px 20px' };
  width: ${({ $width }) => $width ? $width : '100%'};

  @media ${device.mobileM} {
    padding: ${({ $round }) => $round ? '10px 12px' : '10px 15px'};
  }
`;