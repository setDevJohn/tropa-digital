import loginImage from '../../assets/images/login-image.png';
import logoImage from '../../assets/images/logo.png';
import { StyledImage } from '../../styles/globalComponents';

import { 
  ImageContainer,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormContainer,
  LoginImage
} from './styles';

export const Login = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginFormContainer>
          <StyledImage 
            src={logoImage}
            alt="Logo Tropa Digital"
            $width="160px"
          />
            
          <LoginForm>
          </LoginForm>
        </LoginFormContainer>

        <ImageContainer>
          <LoginImage src={loginImage} alt="Imagem de login"/>
        </ImageContainer>
      </LoginContent>

    </LoginContainer>
  );
};