import optionsIcon from '../../assets/icons/options.svg';
import { Table } from '../../components/Table';
import { ActiveComponentTable, Pagination } from '../../components/Table/components';
import { TableFilters } from '../../components/Table/components/Filters';
import { StyledImage } from '../../styles/globalComponents';

export const Teams = () => {
  const tableHeader = ['Nome da equipe', 'Total de equipes', 'Status', 'Data', ''];
  const tableBody = [
    ['Alfa', '10', <ActiveComponentTable />, '10 a 11 de Junho', <StyledImage src={optionsIcon}/>],
    ['Delta', '10', <ActiveComponentTable />, '10 a 11 de Junho', <StyledImage src={optionsIcon}/>],
  ];

  return (
    <>
      <TableFilters placeholder='Buscar equipe' />

      <Table tableHeader={tableHeader} tableBody={tableBody}/>
      
      <Pagination />
    </>
  );
};