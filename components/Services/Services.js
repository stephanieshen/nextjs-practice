import classes from './Services.module.scss';

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.service}>
        <img src="/assets/images/web-design.gif" />
        <h4>
          Web Design
        </h4>
        <p>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, 
          there live the blind texts. 
        </p>
      </div>
      <div className={classes.service}>
        <img src="/assets/images/web-dev.gif" />
        <h4>
          Web Development
        </h4>
        <p>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, 
          there live the blind texts. 
        </p>
      </div>
      <div className={classes.service}>
        <img src="/assets/images/web-design.gif" />
        <h4>
          Web Design
        </h4>
        <p>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, 
          there live the blind texts. 
        </p>
      </div>
    </div>
  )
}

export default Services;
