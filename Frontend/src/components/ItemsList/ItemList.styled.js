import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 21.75rem;
  top: 7.5rem;
  width: 69rem;
  height: 29.6rem;
  background-color: #FFFFFF;
  border-radius: 11px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;
