import { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { DefaultInputContainer, EyeButton, InputWrapper } from './styles';

import type { DefaultTheme } from 'styled-components/dist/types';

export type HandleChangeProps = {
  name: string;
  value: string;
}

export interface IDefatultInput {
  type?: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange: ({ name, value }: HandleChangeProps) => void;
  showTogglePasswordIcon?: boolean;
  error?: boolean
}

export const DefatultInput = ({ 
  type,
  name,
  value,
  placeholder,
  handleChange,
  showTogglePasswordIcon = false,
  error
}: IDefatultInput
) => {
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme() as DefaultTheme;

  const isPasswordType = type === 'password';
  const inputType = isPasswordType && showPassword ? 'text' : type;

  return (
    <InputWrapper>
      <DefaultInputContainer  
        name={name}
        value={value}
        $error={error}
        placeholder={placeholder}
        type={inputType}
        onChange={({ target: { name, value } }) => handleChange({ name, value })}
      />

      {isPasswordType && showTogglePasswordIcon && (
        <EyeButton onClick={() => setShowPassword(prev => !prev)} type="button">
          {showPassword 
            ? <FiEyeOff size={20} fill={theme.primaryColor} /> 
            : <FiEye size={20} fill={theme.primaryColor} />
          }
        </EyeButton>
      )}
    </InputWrapper>
  );
};