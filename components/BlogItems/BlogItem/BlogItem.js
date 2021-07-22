
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import classes from './BlogItem.module.scss';
import { formatDate, toSlug } from '../../../helpers';

const BlogItem = (props) => {
  const { blog } = props;
  const router = useRouter();
  
  const showDetails = () => {
    router.push(`/blogs/${toSlug(blog.title)}`);
  }

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${blog.headerImage})`
        }}
        onClick={() => showDetails()}
      />
      <div className={classes.info}>
        <p className={classes.date}>
          {formatDate(blog.datePublished)}
        </p>
        <p className={classes.title}>
          {blog.title} 
        </p>
        <p className={classes.description}>
          {blog.excerpt}
        </p>
      </div>
    </div>
  )
}

BlogItem.propTypes = {
  blog: PropTypes.object
}

export default BlogItem;
