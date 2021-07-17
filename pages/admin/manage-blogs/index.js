import { useRouter } from 'next/dist/client/router';
import BlogItems from '../../../components/BlogItems/BlogItems';
import Button from '../../../components/Button/Button';
import classes from './ManageBlogs.module.scss';

const ManageBlogs = () => {
  const router = useRouter();

  const addBlog = () => {
    router.push('/admin/manage-blogs/add-blog');
  }

  return (
    <div>
      <Button
        type="button"
        classes={['primary']}
        clicked={addBlog}
      >
        Add Blog
      </Button>
      <div className={classes.blogCards}>
        <BlogItems itemsEditable={true} />
      </div>
    </div>
  )
}

export default ManageBlogs;
