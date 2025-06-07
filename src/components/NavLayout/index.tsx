import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Title } from '../../styles/globalComponents';

import { Navigation } from './components/Navigation';
import { navList } from './navList';
import { ContentContainer, LayoutContainer, PageContainer, WelcomeText } from './styles';

export const NavLayout = () => {
  const [sideBar, setSideBar] = useState(true);

  const location = useLocation();
  const title = navList.find(({ path }) => path === location.pathname)?.pageName;

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setTimeout(() => setSideBar(false), 1000);
  // },[]);

  return (
    <LayoutContainer>
      <Navigation sideBar={sideBar} setSideBar={setSideBar}/>

      <ContentContainer>
        <WelcomeText>Bem vindo de volta, <span>Kaique Steck</span></WelcomeText>
        {/* <MobileHeader sideBar={!sideBar} setSideBar={setSideBar} /> */}

        <Title $small>{title}</Title>

        <PageContainer>
          <Outlet/>
        </PageContainer>
      </ContentContainer>
    </LayoutContainer>
  );
};