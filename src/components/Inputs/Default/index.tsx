import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useTheme } from 'styled-components';

import { DefaultInputContainer, EyeButton, InputWrapper } from './styles';

import type { CSSObject } from 'styled-components';
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
  style?: CSSObject
}

export const DefatultInput = ({ 
  type,
  name,
  value,
  placeholder,
  handleChange,
  showTogglePasswordIcon = false,
  error,
  style,
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
        style={style}
        onChange={({ target: { name, value } }) => handleChange({ name, value })}
      />

      {isPasswordType && showTogglePasswordIcon && (
        <EyeButton onClick={() => setShowPassword(prev => !prev)} type="button">
          {showPassword 
            ? <FaEyeSlash size={21} fill={theme.primaryColor} /> 
            : <FaEye size={20} fill={theme.primaryColor} />
          }
        </EyeButton>
      )}
    </InputWrapper>
  );
};