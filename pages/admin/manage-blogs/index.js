import BlogItems from '../../../components/BlogItems/BlogItems';
import classes from './ManageBlogs.module.scss';

const ManageBlogs = () => {
  return (
    <div className={classes.blogCards}>
      <BlogItems itemsEditable={true} />
    </div>
  )
}

export default ManageBlogs;
