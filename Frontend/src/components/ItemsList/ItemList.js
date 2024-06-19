import React from 'react';
import { Container, Table, TableRow, TableHeader, TableCell, TableBody } from './ItemList.styled';

const ItemList = ({ items }) => {
  return (
    <Container>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Item Name</TableHeader>
            <TableHeader>Serial Number</TableHeader>
            <TableHeader>Collection</TableHeader>
            <TableHeader>Location</TableHeader>
          </TableRow>
        </thead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.serial_number}</TableCell>
              <TableCell>{item.collection}</TableCell>
              <TableCell>{item.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ItemList;
