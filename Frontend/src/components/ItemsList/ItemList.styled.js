import styled from 'styled-components';


export const Container = styled.div`
  position: absolute;
  left: 21.75rem;
  top: 7.5rem;
  width: 70%;
  height: 29.6rem;
  background-color: #FFFFFF;
  border-radius: 11px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  overflow: auto; /* Add scroll if content overflows */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #EFC000;
  color: white;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableBody = styled.tbody``;
