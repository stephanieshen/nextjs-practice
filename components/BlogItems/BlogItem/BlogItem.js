import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import { Delete, Edit, MoreVert } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './BlogItem.module.scss';

const BlogItem = (props) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }

  const closeMenu = () => {
      setAnchorEl(null);
  };    

  const showDetails = () => {
    router.push(`/blogs/this-is-a-sample-blog`);
  }

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${'https://i.stack.imgur.com/y9DpT.jpg'})`
        }}
        onClick={() => showDetails()}
      >
        {props.isEditable && (
          <MoreVert
            className={classes.menu}
            onClick={openMenu}
          />
        )}
      </div>
      <div className={classes.info}>
        <p className={classes.date}>
          Feb 25, 2020
        </p>
        <p className={classes.description}>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia
        </p>
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem>
          <Edit fontSize='small' />
          <span className={classes.edit}>Edit</span>
        </MenuItem>
        <MenuItem>
          <Delete fontSize='small' />
          <span className={classes.delete}>Delete</span>
        </MenuItem>
      </Menu>
    </div>
  )
}

BlogItem.propTypes = {
  isEditable: PropTypes.bool
}

export default BlogItem;
