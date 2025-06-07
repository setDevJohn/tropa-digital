import styled from 'styled-components';

import { device } from './../../../../styles/responsive';

export const PageNavigationContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 30px 0 10px 0;
  width: 100%;

  @media ${device.mobileM} {
    justify-content: center;
  }
`;