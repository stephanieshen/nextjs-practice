import { Copyright } from '@material-ui/icons';
import SocialLinks from '../SocialLinks/SocialLinks';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src="/assets/images/logo.png" />
      <div className={classes.social}>
        <SocialLinks color="#03DAC6" size="small" />
      </div>
      <div className={classes.copyright}>
        <Copyright fontSize="small" /> 
        <span>2021</span>
      </div>
    </div>
  )
}

export default Footer;
