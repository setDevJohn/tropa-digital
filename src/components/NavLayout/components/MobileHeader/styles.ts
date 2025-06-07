import styled from 'styled-components';

import { device } from '../../../../styles/responsive';

export const MobileHeaderContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  display: none;
  padding: 10px 15px;

  @media ${device.tablet} {
    display: block;
  }
`;
