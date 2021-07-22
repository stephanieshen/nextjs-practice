import PropTypes from 'prop-types';
import classes from './TextImageBlock.module.scss';

const TextImageBlock = (props) => {
  const { fields } = props;

  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        {fields.value} 
      </p>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${fields.imageUrl})`
        }}
      />
    </div>
  )
}

TextImageBlock.propTypes = {
  fields: PropTypes.object
}

export default TextImageBlock;