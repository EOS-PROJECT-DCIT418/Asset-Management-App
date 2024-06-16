import React, { useState } from 'react';
import { Container, Heading, NavList, NavItem, Button, PopupContainer, PopupForm, CloseButton } from './ItemsNavBox.styled';

const ItemsNavBox = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <Container>
      <Heading>Items</Heading>
      <NavList className='NavBoxlist'>
        <NavItem><div>All Items</div><div>0</div></NavItem>
        <NavItem><div>Tagged Items</div><div>0</div></NavItem>
        <NavItem><div>Untagged Items</div><div>0</div></NavItem>
      </NavList>
      <Button onClick={handleButtonClick}>Add New Item</Button>
      {isPopupVisible && (
        <PopupContainer>
          <PopupForm>
            <CloseButton onClick={handleClosePopup}>Close X</CloseButton>
            <h2>Add New Item</h2>
            <form>
              <label>
                Name of Item:
                <input type="text" name="name" />
              </label>
              <label>
                Serial Number:
                <input type="text" name="serialNumber" />
              </label>
              <label>
                Item Description:
                <textarea name="description"></textarea>
              </label>
              <label>
                Select Collection:
                <select name="collection">
                  <option value="collection1">Collection 1</option>
                  <option value="collection2">Collection 2</option>
                </select>
              </label>
              <label>
                Select Location:
                <select name="location">
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                </select>
              </label>
              <button type="submit">Submit</button>
            </form>
          </PopupForm>
        </PopupContainer>
      )}
    </Container>
  );
}

export default ItemsNavBox;
