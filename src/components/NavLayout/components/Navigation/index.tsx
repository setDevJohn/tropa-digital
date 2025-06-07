import { RxCross2 } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';

import logoutIcon from '../../../../assets/icons/logout.svg';
import userIcon from '../../../../assets/icons/user.svg';
import logoImage from '../../../../assets/images/logo.png';
import userImage from '../../../../assets/images/user.png';
import { StyledImage } from '../../../../styles/globalComponents';
import { navList } from '../../navList';

import { ConfigContainer, ConfigList, Icon, Item, ItemConfig, MenuSpan, NavigationContainer, NavigationList, SideBarContainer, Separate, UserContainer, UserContent, UserName, UserSpan } from './styles';

type TSideBar = {
  sideBar: boolean
  setSideBar: (status: boolean) => void
}

export const Navigation = ({ sideBar, setSideBar }: TSideBar) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate (path: string) {
    setSideBar(false);
    navigate(path);
  }

  return (
    <SideBarContainer $open={sideBar}>
      <Icon as={RxCross2} size={30} onClick={() => setSideBar(false)}/>

      <StyledImage 
        src={logoImage}
        alt="Logo Tropa Digital"
        $width="160px"
      />

      <MenuSpan>Menu</MenuSpan>

      <NavigationContainer>
        <NavigationList>
          {navList.map(({ label, path, icon }, i) =>(
            <Item
              key={i} 
              onClick={() => handleNavigate(path)}
              $active={path === location.pathname} 
            >
              <StyledImage 
                src={icon}
                style={{ color: '#fff' }}
              />

              {label}
            </Item>
          ))}
        </NavigationList>
      </NavigationContainer>
          
      <Separate />
        
      <ConfigContainer>
        <UserContainer>
          <StyledImage src={userImage} alt='Imagem do usuário'/>

          <UserContent>
            <UserName>Kaique Steck</UserName>
            <UserSpan>Administrador</UserSpan>
          </UserContent>
        </UserContainer>

        <ConfigList>
          <ItemConfig>
            <StyledImage src={userIcon} alt='Ícone de usuário'/>
            Alterar dados
          </ItemConfig>

          <ItemConfig onClick={() => navigate('/login')}>
            <StyledImage src={logoutIcon} alt='Ícone de sair'/>
            Sair
          </ItemConfig>
        </ConfigList>
      </ConfigContainer>
    </SideBarContainer>
  );
};