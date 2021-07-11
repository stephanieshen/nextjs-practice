import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import Button from '../components/Button/Button';
import classes from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <p className={[ classes.paragraph, classes.greet].join(' ')}>
          Hello!
        </p>
        <h1 className={classes.name}>
          I'm Juan Dela Cruz
        </h1>
        <p className={classes.paragraph}>
          Software Engineer
        </p>
        <p className={classes.info}>
          Team Leader. Web Designer. <br/>
          Writer. Volunteer Speaker.
        </p>

        <div className={classes.knowMore}>
          <Button
            type="button"
            classes={['primary']}
            clicked={() => console.log('test')}
          >
            Know More
          </Button>
        </div>

        <div className={classes.social}>
          <Facebook className={classes.socialLink} />
          <LinkedIn className={classes.socialLink} />
          <Twitter className={classes.socialLink} />
        </div>
      </div>
    </div>
  )
}

export default Home;
