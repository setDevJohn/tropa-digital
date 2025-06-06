import { DefatultInput, type IDefatultInput } from '../Default';

import { InputContainer, InputLabel } from './styles';

interface IDefaultInputWithLabel extends IDefatultInput {
  label: string
}

export const DefaultInputWithLabel = ({ label, ...inputProps }: IDefaultInputWithLabel) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>

      <DefatultInput {...inputProps}/>
    </InputContainer>
  );
};