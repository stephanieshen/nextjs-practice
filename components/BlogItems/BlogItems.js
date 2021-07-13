import BlogItem from './BlogItem/BlogItem';
import classes from './BlogItems.module.scss';

const BlogItems = () => {
  return (
    <div className={classes.wrapper}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div className={classes.item} key={index}>
          <BlogItem />
        </div>
      ))}
    </div>
  );
}

export default BlogItems;
