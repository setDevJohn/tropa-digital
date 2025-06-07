import optionsIcon from '../../assets/icons/options.svg';
import { Table } from '../../components/Table';
import { ActiveComponentTable, Pagination } from '../../components/Table/components';
import { TableFilters } from '../../components/Table/components/Filters';
import { StyledImage } from '../../styles/globalComponents';

export const Subscriptions = () => {
  const tableHeader = ['Tipo da inscrição', 'Qtd. Total', 'Status', 'Data', ''];
  const tableBody = [
    ['Mensal', '05', <ActiveComponentTable />, '07 a 11 de Junho', <StyledImage src={optionsIcon}/>],
    ['Semestral', '05', <ActiveComponentTable />, '07 a 11 de Junho', <StyledImage src={optionsIcon}/>],
  ];

  return (
    <>
      <TableFilters placeholder='Buscar inscrição'/>

      <Table tableHeader={tableHeader} tableBody={tableBody}/>
      
      <Pagination />
    </>
  );
};