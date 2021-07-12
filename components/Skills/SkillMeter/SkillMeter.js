import classes from './SkillMeter.module.scss';

const SkillMeter = () => {
  return (
    <div className={classes.skillMeter}>
      <div className={classes.col}></div>
      <div className={classes.col}>
        <div className={classes.meter}>
          <div className={[classes.line, classes.lineOne].join(' ')} />
          <div className={[classes.line, classes.lineTwo].join(' ')} />
          <div className={[classes.line, classes.lineThree].join(' ')} />
        </div>
      </div>
    </div>
  )
}

export default SkillMeter;
