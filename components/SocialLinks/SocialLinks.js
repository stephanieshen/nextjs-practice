import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import PropTypes from 'prop-types';
import classes from './SocialLinks.module.css';

const SocialLinks = (props) => {
  return (
    <div className={classes.socialLinks}>
      <Facebook className={classes.socialLink} style={{ color: props.color }} />
      <LinkedIn className={classes.socialLink} style={{ color: props.color }} />
      <Twitter className={classes.socialLink} style={{ color: props.color }} />
    </div>
  )
}

SocialLinks.propTypes = {
  color: PropTypes.string
}

export default SocialLinks;
