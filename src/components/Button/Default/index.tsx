import { StyledImage } from '../../../styles/globalComponents';

import { ButtonContainer } from './styles';

import type { CSSObject } from 'styled-components';

interface IDefaultButton {
  text: string;
  action?: () => void;
  width?: string;
  icon?: string;
  round?: boolean;
  secondary?: boolean;
  style?: CSSObject
}

export const DefaultButton = ({ 
  text,
  action,
  width,
  icon,
  round,
  secondary,
  style
}: IDefaultButton) => {
  return (
    <ButtonContainer 
      $width={width}
      onClick={() => action?.()}
      $secondary={secondary}
      type={action ? 'button' : 'submit'}
      $round={round}
      style={style}
    >
      {icon && <StyledImage src={icon}/>}
      {text}
    </ButtonContainer>
  );
};