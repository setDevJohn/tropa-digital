import plusIcon from '../../../../assets/icons/plus.svg';
import { DefaultButton } from '../../../Button/Default';
import { SearchInput } from '../../../Inputs';

import { ButtonContainer } from './styles';

export const TableFilters = () => {
  return (
    <ButtonContainer>
      <SearchInput placeholder='Buscar eventos'/>

      <DefaultButton
        text="Inserir novo"
        width='fit-content'
        icon={plusIcon}
      />
    </ButtonContainer>
  );
};