import PropTypes from 'prop-types';
import classes from './ImageTextBlock.module.scss';

const ImageTextBlock = (props) => {
  const { fields } = props;

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${fields.imageUrl})`
        }}
      />
      <p className={classes.text}>
        {fields.value}
      </p>
    </div>
  )
}

ImageTextBlock.propTypes = {
  fields: PropTypes.object
}

export default ImageTextBlock;
