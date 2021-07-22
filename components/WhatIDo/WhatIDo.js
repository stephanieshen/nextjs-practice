import PropTypes from 'prop-types';
import { formatDate } from '../../helpers';
import classes from './WhatIDo.module.scss';

const WhatIDo = (props) => {
  const { whatIDo } = props;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.images}>
          {whatIDo.images.map((image, index) => (
            <div
              key={index}
              className={classes.img}
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          ))}
        </div>
        <div className={classes.description}>
          <p>{whatIDo.title}</p>
          <p>{formatDate(whatIDo.date)}</p>
        </div>
      </div>
    </>
  )
}

WhatIDo.propTypes = {
  whatIDo: PropTypes.object
}

export default WhatIDo;
