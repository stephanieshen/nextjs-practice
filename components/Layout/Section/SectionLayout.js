import PropTypes from 'prop-types';
import classes from './SectionLayout.module.scss';

const SectionLayout = (props) => {
  return (
    <div
      className={classes.section}
      style={{ 
        backgroundColor: props.bgColor,
        paddingBottom: props.paddingBottom
      }}
    >
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

SectionLayout.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  paddingBottom: PropTypes.string,
  children: PropTypes.node
}

export default SectionLayout;
