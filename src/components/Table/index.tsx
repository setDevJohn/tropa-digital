import { TableBody, TableContainer, TableData, TableHead, TableHeader, TableRow } from './styles';

interface ITable {
  tableHeader: string[];
  tableBody: React.ReactNode[][];
};

export const Table = ({ tableHeader, tableBody }: ITable) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          {tableHeader.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
    
      <TableBody>
        {tableBody.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableData key={cellIndex}>{cell}</TableData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};