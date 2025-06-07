import optionsIcon from '../../assets/icons/options.svg';
import { Table } from '../../components/Table';
import { ActiveComponentTable, Pagination } from '../../components/Table/components';
import { TableFilters } from '../../components/Table/components/Filters';
import { StyledImage } from '../../styles/globalComponents';

export const Events = () => {
  const tableHeader = ['Nome do evento', 'Total de equipes', 'Status', 'Data', ''];
  const tableBody = [
    ['Clube do Laço Coração Pantaneiro', '10', <ActiveComponentTable />, '09 a 11 de Junho', <StyledImage src={optionsIcon}/>],
    ['Clube do Laço Coração Pantaneiro', '10', <ActiveComponentTable />, '09 a 11 de Junho', <StyledImage src={optionsIcon}/>],
  ];

  return (
    <>
      <TableFilters placeholder='Buscar eventos'/>

      <Table tableHeader={tableHeader} tableBody={tableBody}/>
      
      <Pagination />
    </>
  );
};