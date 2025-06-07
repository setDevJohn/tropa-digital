import styled from 'styled-components';

import { device } from '../../../../styles/responsive';

export const ProfileContainer = styled.div<{$open: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-right: 1px solid #0001;
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  /* width: 215px; */
  padding: 30px 15px;
  
  @media ${device.mobileM} {
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    transition: transform 1s ease;
    transform: ${({ $open }) => `translateX(${$open ? '0%' : '-100%'})` };
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  display: none;

  @media ${device.mobileM} {
    display: block;
  }
`;

export const MenuSpan = styled.span`
  color: #A3A3A3;
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  width: 100%;
  margin: 30px 0 0 25px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: 15px;
  width: 100%;

  @media ${device.mobileM} {
    padding: 7px 15px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Item = styled.li<{$active: boolean}>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.menuSize};
  font-weight: 500;
  background-color: ${({ $active, theme }) => $active && theme.primaryColor};
  color: ${({ $active }) => $active && '#fff'};
  transition: background-color 0.4s ease;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ $active, theme }) => !$active && `${theme.primaryColor}60`};
  }

  @media ${device.mobileM} {
    font-size: 2rem;
    padding: 6px 8px;
  }
`;

export const Separate = styled.div`
  width: 90%;
  margin: 8px auto;
  height: 1px;
  background-color: #0001;
`;

export const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 10px 0 10px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.menuSize};
  font-weight: 500;
`;

export const UserSpan = styled.span`
  font-size: ${({ theme }) => theme.verySmallSize};
  color: #00000080;
`;

export const ConfigList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemConfig = styled.li`
  display: flex;
  gap: 10px;
  font-size: ${({ theme }) => theme.menuSize};
  font-weight: 500;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0001;
  }
`;