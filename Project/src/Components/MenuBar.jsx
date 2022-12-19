import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
const MenuBar = () => {
  return (
    <Menu isLazy>
      <MenuButton>Open menu</MenuButton>
      <MenuList>
        {/* MenuItems are not rendered unless Menu is open */}
        <MenuItem>New Window</MenuItem>
        <MenuItem>Open Closed Tab</MenuItem>
        <MenuItem>Open File</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuBar;
