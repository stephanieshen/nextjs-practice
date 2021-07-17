import PropTypes from 'prop-types';
import BlogItem from './BlogItem/BlogItem';
import classes from './BlogItems.module.scss';

const BlogItems = (props) => {
  return (
    <div className={classes.wrapper}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div className={classes.item} key={index}>
          <BlogItem isEditable={props.itemsEditable} />
        </div>
      ))}
    </div>
  );
}

BlogItems.propTypes = {
  itemsEditable: PropTypes.bool
}

export default BlogItems;
