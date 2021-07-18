import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AddCircle } from '@material-ui/icons';
import classes from './ComponentsMenu.module.scss';

const ComponentsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const closeMenu = () => {
    setAnchorEl(null);
  };    

  return (
    <div>
      <AddCircle
        className={classes.addIcon}
        fontSize="large"
        onClick={openMenu}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem>
          Text
        </MenuItem>
        <MenuItem>
          Text-Image
        </MenuItem>
        <MenuItem>
          Image-Text
        </MenuItem>
        <MenuItem>
          Image
        </MenuItem>
      </Menu>
    </div>
  )
}

export default ComponentsMenu;
