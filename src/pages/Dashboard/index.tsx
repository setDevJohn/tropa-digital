import optionsIcon from '../../assets/icons/options.svg';
import { Table } from '../../components/Table';
import { ActiveComponentTable, Pagination } from '../../components/Table/components';
import { TableFilters } from '../../components/Table/components/Filters';
import { StyledImage } from '../../styles/globalComponents';

export const Dashboard = () => {
  const tableHeader = ['Nome da transação', 'Total de vezes', 'Status', 'Data', ''];
  const tableBody = [
    ['Finaceiro', '07', <ActiveComponentTable />, '10 a 11 de Junho', <StyledImage src={optionsIcon}/>],
    ['Administrativo', '07', <ActiveComponentTable />, '10 a 11 de Junho', <StyledImage src={optionsIcon}/>],
  ];

  return (
    <>
      <TableFilters placeholder='Buscar transação'/>

      <Table tableHeader={tableHeader} tableBody={tableBody}/>
      
      <Pagination />
    </>
  );
};