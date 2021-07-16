import { useEffect } from 'react';
import ImageBlock from '../../../components/Components/ImageBlock/ImageBlock';
import ImageTextBlock from '../../../components/Components/ImageTextBlock/ImageTextBlock';
import TextBlock from '../../../components/Components/TextBlock/TextBlock';
import TextImageBlock from '../../../components/Components/TextImageBlock/TextImageBlock';
import classes from './BlogDetails.module.scss';

const BlogDetails = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  return (
    <div>
      <div
        className={classes.headerImg}
        style={{
          backgroundImage: `url(${'https://images.alphacoders.com/234/thumb-1920-234823.jpg'})`
        }}
      />

      <div className={classes.details}>
        <div className={classes.title}>
          <h1>Be Brilliant!</h1>
          <p>February 25, 2021</p>
        </div>

        <div className={classes.content}>
          <TextBlock />
          <TextBlock />
          <ImageTextBlock />
          <TextBlock />
          <ImageBlock />
          <TextImageBlock />
          <TextBlock />
        </div>
      </div>
    </div>
  )
}

export default BlogDetails;
