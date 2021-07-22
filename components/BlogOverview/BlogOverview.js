import PropTypes from 'prop-types';
import { formatDate } from '../../helpers';
import classes from './BlogOverview.module.scss';

const BlogOverview = (props) => {
  const { blog } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <h4>
          {blog.title}
        </h4>
        <p>
          {formatDate(blog.datePublished)}
        </p>
        <p className={classes.description}>
          {blog.excerpt}
        </p>
      </div>

      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${blog.headerImage})`
        }}
      />
    </div>
  )
}

BlogOverview.propTypes = {
  blog: PropTypes.object
}

export default BlogOverview;
