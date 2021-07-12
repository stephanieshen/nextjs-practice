import PropTypes from 'prop-types';
import classes from './Skill.module.scss';

const Skill = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.skillName}>
        {props.skill}
      </div>
      <div className={classes.skillRate}>
        <div style={{ width: props.rate + '%' }}/>
      </div>
    </div>
  )
}

Skill.propTypes = {
  skill: PropTypes.string,
  rate: PropTypes.number
}

export default Skill;
