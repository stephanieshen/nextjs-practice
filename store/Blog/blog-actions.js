import { endpoint } from "../../firebase/firebase";

export const addBlog = (blog) => {
  return async (dispatch) => {
    const addBlogData = async () => {
      const response = await fetch(
        endpoint + '/blogs.json', 
        { 
          method: 'POST', 
          body: JSON.stringify(blog) 
        }
      );

      return await response.json();
    }

    try {
      const addedBlog = await addBlogData();
    } catch (error) {
      addBlogData.catch(() => {
        alert('error adding blog');
      });
    }
  }
}
