import styled from 'styled-components';

import { device } from '../../../../styles/responsive';

export const MobileHeaderContainer = styled.div<{$open : boolean}>`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: none;
  padding: 10px 15px;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    justify-content: end;
  }
`;
