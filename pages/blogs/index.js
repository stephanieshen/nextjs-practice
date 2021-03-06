import { useEffect, useState } from 'react';
import { cloneDeep, filter } from 'lodash';
import BlogItems from '../../components/BlogItems/BlogItems';
import BlogSearch from '../../components/BlogSearch/BlogSearch';
import SectionLayout from '../../components/Layout/Section/SectionLayout';
import { getBlogs } from '../../firebase';
import classes from './Blogs.module.scss';
import Seo from '../../components/Seo/Seo';

const Blogs = (props) => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  const searchBlog = (searchTerm) => {
    const result = filter(cloneDeep(props.blogs), blog => (
      blog.title.toLowerCase().includes(searchTerm)
    ));
    setFilteredBlogs(result);
  }

  const getSeoData = () => {
    return {
      title: 'Blogs - Juan Dela Cruz',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: '/assets/images/profile-pic.png'
    }
  }

  return (
    <div>
      <Seo data={getSeoData()} />
      <SectionLayout
        title="My Blogs"
        bgColor="#222831"
        paddingBottom="185px"
      >
        <BlogSearch
          onSearch={searchBlog}
        />
      </SectionLayout>

      <div className={classes.blogCards}>
        <BlogItems
          blogs={filteredBlogs.length ? filteredBlogs : props.blogs}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await getBlogs();
  const blogs = await res.json();

  return {
    props: {
      blogs: blogs
    }
  }
}

export default Blogs;
