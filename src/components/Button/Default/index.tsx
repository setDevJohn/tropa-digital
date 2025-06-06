import { ButtonContainer } from './styles';

interface IDefaultButton {
  text: string;
  action?: () => void;
  width?: string;
}

export const DefaultButton = ({ text, action, width }: IDefaultButton) => {
  return (
    <ButtonContainer 
      $width={width}
      onClick={() => action?.()}
      type={action ? 'button' : 'submit'}
    >
      {text}
    </ButtonContainer>
  );
};