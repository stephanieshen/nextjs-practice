import PropTypes from 'prop-types';
import classes from './ImageBlock.module.scss';

const ImageBlock = (props) => {
  const { fields } = props;

  return (
    <div
      className={classes.img}
      style={{
        backgroundImage: `url(${fields.imageUrl})`
      }}
    />
  )
}

ImageBlock.propTypes = {
  fields: PropTypes.object
}

export default ImageBlock;
