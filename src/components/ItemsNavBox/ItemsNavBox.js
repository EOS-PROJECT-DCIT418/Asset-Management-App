import React from 'react';
import { Container, Heading, NavList, NavItem, Button } from './ItemsNavBox.styled';

const ItemsNavBox = () => {
  return (
    <Container>
      <Heading>Items</Heading>
      <NavList className='NavBoxlist'>
        <NavItem><div>All Item</div><div>0</div></NavItem>
        <NavItem><div>Tagged Item</div><div>0</div></NavItem>
        <NavItem><div>Untagged Item</div><div>0</div></NavItem>
        </NavList>
      <Button>Add New Item</Button>
    </Container>
  );
}

export default ItemsNavBox;
