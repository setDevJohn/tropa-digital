import styled from 'styled-components';

import { device } from '../../styles/responsive';

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100svh;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  overflow: auto;
  width: 100%;
  height: 100%;

  @media ${device.mobileM} {
    padding: 60px 15px 15px 15px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100% ;
  height: 38px;
`;

export const WelcomeText = styled.p`
  color: #00000099;
  font-size: ${({ theme }) => theme.bigSize};
  margin-bottom: 13px;

  span {
    font-weight: 500;
    color: #000;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 0;
  width: 100%;
  max-height: 100svh;

  @media ${device.mobileM} {
    padding: 15px;
  }
`;