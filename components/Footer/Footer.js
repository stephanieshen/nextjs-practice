import { Copyright } from '@material-ui/icons';
import Image from 'next/image';
import SocialLinks from '../SocialLinks/SocialLinks';
import classes from './Footer.module.scss';
import logoImage from '../../public/assets/images/logo.png';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Image src={logoImage} alt="logo" />
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
