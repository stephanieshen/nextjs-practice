import Skill from './Skill/Skill';
import SkillMeter from './SkillMeter/SkillMeter';
import classes from './Skills.module.scss';

const Skills = () => {
  return (
    <>
      <SkillMeter />
      <div>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className={classes.skills}>
            <h3>Web Development</h3>
            <div>
              <Skill skill="React JS" rate="50" />
              <Skill skill="Angular" rate="80" />
              <Skill skill="Typescript" rate="70" />
              <Skill skill="Redux" rate="55" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills;
