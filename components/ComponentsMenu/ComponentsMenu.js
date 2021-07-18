import { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AddCircle } from '@material-ui/icons';
import classes from './ComponentsMenu.module.scss';
import { ComponentType } from '../../shared/enums/component-type.enum';

const ComponentsMenu = (props) => {
  const { selectHandler } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const selectComponent = (type) => {
    selectHandler(type);
    closeMenu();
  }

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
        <MenuItem
          onClick={() => selectComponent(ComponentType.TEXT)}
        >
          Text
        </MenuItem>
        <MenuItem
          onClick={() => selectComponent(ComponentType.TEXT_IMAGE)}
        >
          Text-Image
        </MenuItem>
        <MenuItem
          onClick={() => selectComponent(ComponentType.IMAGE_TEXT)}
        >
          Image-Text
        </MenuItem>
        <MenuItem
          onClick={() => selectComponent(ComponentType.IMAGE)}
        >
          Image
        </MenuItem>
      </Menu>
    </div>
  )
}

ComponentsMenu.propTypes = {
  selectHandler: PropTypes.func
}

export default ComponentsMenu;
