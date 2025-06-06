import styled from 'styled-components';

import { device } from '../../../../styles/responsive';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 12px 0;
  width: 100%;


  @media ${device.mobileM} {
    justify-content: center;
  }
`;
