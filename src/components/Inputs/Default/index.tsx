import { DefaultInputContainer } from './styles';

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
  error?: boolean
}

export const DefatultInput = ({ 
  type,
  name,
  value,
  placeholder,
  handleChange,
  error
}: IDefatultInput
) => {
  return (
    <DefaultInputContainer  
      name={name}
      value={value}
      $error={error}
      placeholder={placeholder}
      type={type ? type : 'text'}
      onChange={({ target: { name, value } }) => handleChange({ name, value })}
    />
  );
};