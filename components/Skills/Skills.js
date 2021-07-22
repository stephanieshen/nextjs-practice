import PropTypes from 'prop-types';
import Skill from './Skill/Skill';
import SkillMeter from './SkillMeter/SkillMeter';
import classes from './Skills.module.scss';

const Skills = (props) => {
  return (
    <>
      <SkillMeter />
      <div>
        {props.skills.map((skill, index) => (
          <div key={index} className={classes.skills}>
            <h3>{skill.category}</h3>
            <div>
              {skill.items.map((item, itemIndex) => (
                <Skill
                  key={itemIndex}
                  skill={item.skill}
                  rate={item.rate}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

Skills.propTypes = {
  skills: PropTypes.array
}

export default Skills;
