import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Title } from '../../styles/globalComponents';

import { MobileHeader } from './components/MobileHeader';
import { Navigation } from './components/Navigation';
import { navList } from './navList';
import { ContentContainer, LayoutContainer, PageContainer, WelcomeText } from './styles';

export const NavLayout = () => {
  const [sideBar, setSideBar] = useState(false);

  const location = useLocation();
  const title = navList.find(({ path }) => path === location.pathname)?.pageName;

  return (
    <LayoutContainer>
      <Navigation sideBar={sideBar} setSideBar={setSideBar}/>

      <ContentContainer>
        <MobileHeader setSideBar={setSideBar} />
        
        <WelcomeText>Bem vindo de volta, <span>Kaique Steck</span></WelcomeText>

        <Title $small>{title}</Title>

        <PageContainer>
          <Outlet/>
        </PageContainer>
      </ContentContainer>
    </LayoutContainer>
  );
};