import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import PropTypes from 'prop-types';
import classes from './SocialLinks.module.scss';

const SocialLinks = (props) => {
  return (
    <div className={classes.socialLinks}>
      <Facebook
        className={classes.socialLink}
        fontSize={props.size}
        style={{ color: props.color }}
      />
      <LinkedIn
        className={classes.socialLink}
        fontSize={props.size}
        style={{ color: props.color }} 
      />
      <Twitter
        className={classes.socialLink}
        fontSize={props.size}
        style={{ color: props.color }}
      />
    </div>
  )
}

SocialLinks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

export default SocialLinks;
