import { useEffect } from 'react';
import Head from 'next/head';
import ImageBlock from '../../../components/Components/ImageBlock/ImageBlock';
import ImageTextBlock from '../../../components/Components/ImageTextBlock/ImageTextBlock';
import TextBlock from '../../../components/Components/TextBlock/TextBlock';
import TextImageBlock from '../../../components/Components/TextImageBlock/TextImageBlock';
import { getBlogBySlug, getBlogs } from '../../../firebase';
import { formatDate, toSlug } from '../../../helpers';
import { ComponentType } from '../../../shared/enums/component-type.enum';
import classes from './BlogDetails.module.scss';
import Seo from '../../../components/Seo/Seo';

const BlogDetails = (props) => {
  const { blogData } = props;

  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  const renderComponent = (component) => {
    switch (component.type) {
      case ComponentType.TEXT:
        return <TextBlock fields={component.fields} />
      case ComponentType.IMAGE:
        return <ImageBlock fields={component.fields} />
      case ComponentType.IMAGE_TEXT:
        return <ImageTextBlock fields={component.fields} />
      case ComponentType.TEXT_IMAGE:
        return <TextImageBlock fields={component.fields} />
      default: 
        return null;
    }
  }

  const getSeoData = () => {
    return {
      title: blogData.title,
      description: blogData.excerpt,
      image: blogData.headerImage
    }
  }

  return (
    <>
      <Seo data={getSeoData()} />
      <div
        className={classes.headerImg}
        style={{
          backgroundImage: `url(${blogData.headerImage})`
        }}
      />

      <div className={classes.details}>
        <div className={classes.title}>
          <h1>{blogData.title}</h1>
          <p>{formatDate(blogData.datePublished)}</p>
        </div>

        <div className={classes.content}>
          {blogData.components.map((component, index) => (
            <div key={index}>
              {renderComponent(component)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await getBlogs();
  const blogs = await res.json();

  return {
    fallback: false,
    paths: blogs.map(blog => ({
      params: {
        slug: toSlug(blog.title)
      }
    }))
  }
}

export async function getStaticProps(context) {
  const blog = await getBlogBySlug(context.params.slug);

  return {
    props: {
      blogData: blog
    }
  }
}

export default BlogDetails;
