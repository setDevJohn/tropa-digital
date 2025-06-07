import { useState } from 'react';

import searchIcon from '../../../assets/icons/search.svg';
import { DefatultInput } from '../Default';

import { SearchContainer, SearchIconContainer } from './styles';

export const SearchInput = ({ placeholder }: { placeholder: string }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContainer>
      <DefatultInput 
        name='search'
        value={search}
        handleChange={({ value }) => setSearch(value)}
        placeholder={placeholder}
        style={{ width: '200px', paddingLeft: '40px' }}
      />

      <SearchIconContainer src={searchIcon} alt='Ícone de pesquisa'/>
    </SearchContainer>
  );
};