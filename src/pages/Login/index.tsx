import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import loginImage from '../../assets/images/login-image.png';
import logoImage from '../../assets/images/logo.png';
import { DefaultButton } from '../../components/Button/Default';
import { DefaultInputWithLabel } from '../../components/Inputs';
import { StyledImage, Text, Title } from '../../styles/globalComponents';
import { toastWarn } from '../../utils/utils';

import { 
  ImageContainer,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormContainer,
  LoginImage,
  LogoContainer,
  TitleGroup
} from './styles';

import type { HandleChangeProps } from '../../components/Inputs/Default';
import type { DefaultTheme } from 'styled-components/dist/types';

export const Login = () => {
  const [formData, setFormData] = useState({ login: '', password: '' });
  const [fieldsError, setFieldsError] = useState<string[]>([]);

  const theme = useTheme() as DefaultTheme;
  const navigate = useNavigate();

  const handleInputChange = ({ name, value }: HandleChangeProps) => {
    setFieldsError(prev => prev.filter(field => field !== name));
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.login || !formData.password) {
      toastWarn('Preencha todos os campos');
      return setFieldsError([
        ...(formData.login ? [] : ['login']),
        ...(formData.password ? [] : ['password'])
      ]);
    }

    if (formData.password.length < 6) {
      toastWarn('A senha deve ter no mínimo 6 caracteres');
      return setFieldsError(['password']);
    }

    navigate('/events');
  };

  const formFields = [
    {
      label: 'E-mail',
      name: 'login', 
      placeholder: 'seunome@seuservidor.com', 
      type: 'email'
    },
    { 
      label: 'Senha', 
      name: 'password',
      placeholder: 'Digite aqui',
      type: 'password',
    },
  ];

  return (
    <LoginContainer>
      <LoginContent>
        <LoginFormContainer>
          <LogoContainer>
            <StyledImage 
              src={logoImage}
              alt="Logo Tropa Digital"
              $width="160px"
            />
          </LogoContainer>

          <TitleGroup>
            <Title> Bem-vindo de volta </Title>
            
            <Text $color={theme.lightColorFont} $opacity={0.5}>
              Entre com sua conta para acessar o painel.
            </Text>
          </TitleGroup>

          <LoginForm onSubmit={handleSubmit}>
            {formFields.map(({ label, name, placeholder, type }) => (
              <DefaultInputWithLabel
                key={name}
                label={label}
                name={name}
                type={type}
                error={fieldsError.includes(name)}
                value={formData[name as keyof typeof formData]}
                placeholder={placeholder}
                showTogglePasswordIcon={name === 'password'}
                handleChange={handleInputChange}
              />
            ))}

            <DefaultButton text='Enviar'/>
          </LoginForm>
        </LoginFormContainer>

        <ImageContainer>
          <LoginImage src={loginImage} alt="Imagem de login"/>
        </ImageContainer>
      </LoginContent>

    </LoginContainer>
  );
}; 