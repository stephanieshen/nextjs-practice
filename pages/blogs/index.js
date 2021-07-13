import { useEffect } from 'react';
import BlogItems from '../../components/BlogItems/BlogItems';
import BlogSearch from '../../components/BlogSearch/BlogSearch';
import Button from '../../components/Button/Button';
import SectionLayout from '../../components/Layout/Section/SectionLayout';
import classes from './Blogs.module.scss';

const Blogs = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  return (
    <div>
      <SectionLayout
        title="My Blogs"
        bgColor="#222831"
        paddingBottom="185px"
      >
        <BlogSearch />
      </SectionLayout>

      <div>
        <BlogItems />
      </div>

      <div className={classes.moreBlogs}>
        <Button
          type="button"
          classes={['primary']}
          clicked={() => console.log('test')}
        >
          Load more
        </Button>
      </div>
    </div>
  );
}

export default Blogs;
