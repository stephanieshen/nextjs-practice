import PropTypes from 'prop-types';
import BlogItem from './BlogItem/BlogItem';
import classes from './BlogItems.module.scss';

const BlogItems = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.blogs.map((blog, index) => (
        <div className={classes.item} key={index}>
          <BlogItem blog={blog} />
        </div>
      ))}
    </div>
  );
}

BlogItems.propTypes = {
  blogs: PropTypes.array
}

export default BlogItems;
