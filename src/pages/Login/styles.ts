import styled from 'styled-components';

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
  width: 100%;
`;

export const LoginContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 100px 200px #0004;
  padding: 10px;
  margin: 20px;
  min-height: 500px;
  width: 100%;
  max-width: 755px;
`;

export const LoginFormContainer = styled.div`
  display: flex;  
  flex-direction: column;
  flex: 1;
  gap: 35px;
  padding: 40px 20px;
`;

export const TitleGroup = styled.div`
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
  flex: 1;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 20px;
`;

export const LoginImage = styled.img`
  transform: translateX(-40px);
`;
