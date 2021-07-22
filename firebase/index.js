import { find } from 'lodash';
import { toSlug } from "../helpers";

const ENDPOINT = 'https://juand-fe279-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const getBlogs = () => {
  return fetch(
    ENDPOINT + '/blogs.json',
    {
      method: 'GET'
    }
  );
}

export const getBlogBySlug = async (slug) => {
  const res = await getBlogs();
  const blogs = await res.json();
  return find(blogs, blog => (
    toSlug(blog.title) === slug
  ));
}

export const getAboutMe = () => {
  return fetch(
    ENDPOINT + '/about.json',
    {
      method: 'GET'
    }
  );
}

