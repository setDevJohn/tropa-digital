import { useState } from 'react';

import { DefaultButton } from '../../../Button/Default';

import { PageNavigationContainer } from './styles';

export const Pagination = () => {
  const [currrentPage, setCurrentPage] = useState(1);

  const handleChangePage = (type: 'previous' | 'next') => {
    if (type === 'previous') {
      setCurrentPage(prev => Math.max(prev - 1, 1)); 
    } else { {
      setCurrentPage(prev => Math.min(prev + 1, 3));
    } }
  };
  
  return (
    <PageNavigationContainer>
      <DefaultButton
        width='fit-content'
        text='Anterior'
        action={() => handleChangePage('previous')}
        secondary 
      />

      {[1, 2, 3].map(page => (
        <DefaultButton 
          key={page}
          round
          text={page.toString()}
          width='fit-content'
          action={() => setCurrentPage(page)} 
          secondary={page !== currrentPage}
        />
      ))}

      <DefaultButton 
        width='fit-content'
        text='Próxima'
        action={() => handleChangePage('next')} 
      />
    </PageNavigationContainer>
  );
};