import styled from 'styled-components';

import { device } from '../../../styles/responsive';

export const SearchContainer = styled.div`
  position: relative;

  input {
    width: 200px;

    @media ${device.mobileM} {
      width: 175px
    }
  }
`;

export const SearchIconContainer = styled.img`
  position: absolute;
  top: 12px;
  left: 15px;
  width: 15px;
`;