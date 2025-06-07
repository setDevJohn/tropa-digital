import plusIcon from '../../../../assets/icons/plus.svg';
import { DefaultButton } from '../../../Button/Default';
import { SearchInput } from '../../../Inputs';

import { ButtonContainer } from './styles';

export const TableFilters = ({ placeholder }: {placeholder: string}) => {
  return (
    <ButtonContainer>
      <SearchInput placeholder={placeholder}/>

      <DefaultButton
        text="Inserir novo"
        width='fit-content'
        icon={plusIcon}
      />
    </ButtonContainer>
  );
};